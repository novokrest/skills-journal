import Axios from 'axios'
import router from '@/router'
import config from '@/config'
import log from '@/log'
import {extractApiError} from '@/api/errors'

const authApi = config.apiBaseUrl

export default {
  user: { authenticated: false },

  signIn (context, credentials, redirect) {
    Axios.post(`${authApi}/sign-in`, credentials)
      .then(({data: {result: {token, userName}}}) => {
        log.info('user was authenticated: userName=%s, token=***%s',
                 userName, token.substr(token.length - 5))

        context.$cookie.set('token', token, '1D')
        context.$cookie.set('user_name', userName, '1D')
        context.validSignIn = true
        this.user.authenticated = true

        if (redirect) {
          log.debug('Redirecting to: %s...', redirect)
          router.push(redirect)
        }
      }).catch(({data}) => {
        context.snackbar = true
        context.message = JSON.stringify(data)
      })
  },

  signUp (context, credentials, redirect) {
    Axios.post(`${authApi}/sign-up`, credentials)
      .then(({data: {result: {userName}}}) => {
        log.info('user was registered successfully: userName=%s', userName)
        context.validSignUp = true
        this.signIn(context, credentials, redirect)
      }).catch(apiError => {
        const error = extractApiError(apiError)
        log.info('failed to register user: error=', error)
        context.snackbar = true
        context.message = `${error.message} (${error.code})`
      })
  },

  signOut (context, redirect) {
    context.$cookie.delete('token')
    context.$cookie.delete('user_name')
    this.user.authenticated = false

    if (redirect) {
      router.push(redirect)
    }
  },

  checkAuthentication () {
    const token = document.cookie
    this.user.authenticated = !!token
  },

  getAuthenticationHeader (context) {
    return `Bearer ${context.$cookie.get('token')}`
  }
}
