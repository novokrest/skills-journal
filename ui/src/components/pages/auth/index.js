import Axios from 'axios'
import router from '@/router'
import config from '@/config'

const authApi = config.apiBaseUrl

export default {
  user: { authenticated: false },

  signIn (context, credentials, redirect) {
    Axios.post(`${authApi}/sign-in`, credentials)
      .then(({data: {result: {token}}}) => {
        context.$cookie.set('token', token, '1D')
        context.validSignIn = true
        this.user.authenticated = true

        if (redirect) {
          router.push(redirect)
        }
      }).catch(({data}) => {
        context.snackbar = true
        context.message = JSON.stringify(data)
      })
  },

  signUp (context, credentials, redirect) {
    Axios.post(`${authApi}/sign-up`, credentials)
      .then(({result: {token}}) => {
        context.$cookie.set('token', token, '1D')
        context.validSignUp = true
        this.user.authenticated = true

        if (redirect) {
          router.push(redirect)
        }
      }).catch(response => {
        context.snackbar = true
        context.message = response
      })
  },

  checkAuthentication () {
    const token = document.cookie
    this.user.authenticated = !!token
  },

  getAuthenticationHeader (context) {
    return `Bearer ${context.$cookie.get('token')}`
  }
}
