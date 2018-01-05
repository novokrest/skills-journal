<template>
  <div>
    <h3>Hi! this is our App's Home</h3>
    <ul>
      <li v-if="users != null" v-for="user in users">
        {{ user.userName }}
      </li>
    </ul>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Config from '@/config'
  import Auth from '@/components/pages/auth'

  const apiBaseUrl = Config.apiBaseUrl
  export default {
    data () {
      return {
        users: []
      }
    },

    mounted () {
      this.getAllUsers()
    },

    methods: {
      getAllUsers (context) {
        Axios.get(`${apiBaseUrl}/user/list`, {
          headers: {
            'Authorization': Auth.getAuthenticationHeader(this)
          }
        }).then(({data: {result: users}}) => (this.users = users))
      }
    }
  }
</script>