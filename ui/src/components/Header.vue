<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Skills</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import Auth from '@/components/pages/auth'
  export default {
    data () {
      return {
        search: '',
        status: '',
        statusItems: [
          'All', 'Approved', 'Denied', 'Waiting', 'Writing', 'Editing'
        ]
      }
    },
    methods: {
      submitSignout () {
        Auth.signOut(this, '/login')
      }
    }
  }
</script>

<style lang="scss">
  @import "./../assets/styles";

  .l-header-container {
    background-color: $background-color;
    margin: 0 auto;
    padding: 0 15px;
    min-width: 272px;

    label, input, .icon, .input-group__selections__comma {
      color: #29b6f6!important;
    }

    .input-group__details {
      &:before {
        background-color: $border-color-input !important;
      }
    }

    .btn {
      margin-top: 15px;
    }
  }
</style>