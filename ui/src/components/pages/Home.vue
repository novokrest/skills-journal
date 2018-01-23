<template>
  <main class="l-home-page">
    <app-header></app-header>

    <div class="l-home">
      <h4 class="white--text text-xs-center my-0">
        Skills Journal
      </h4>
    </div>
  </main>
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

<style lang="scss" scoped>
  @import "./../../assets/styles";

  .l-home {
    background-color: $background-color;
    margin: 25px auto;
    padding: 15px;
    min-width: 272px;
  }
</style>
