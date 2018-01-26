<template>
  <v-form v-model="valid">
    <v-text-field
      label="Name"
      class="white--text"
      color="light-blue lighten-1"
      v-model="name"
      :counter="10"
      required>
      </v-text-field>
    <v-btn
      @click="submit"
      :disabled="!valid">
      submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      emal: ''
    }
  },

  methods: {
    submit () {
      alert(this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-group__input {
  color: white!important
}

</style>