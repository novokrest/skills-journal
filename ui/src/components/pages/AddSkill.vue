<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4 v-for="skill in skills">
        <v-card>
          <v-card-media
            height="200px"
            :src="skill.img">
          </v-card-media>
          <v-card-title>
            <v-flex xs12 align-center flexbox>
              <span class="headline">{{skill.name}}</span><br>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-flex xs12 align-center flexbox>  
              <v-btn flat color="blue">MORE</v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    const defaultImg = 'http://bocwaterhydraulics.com/wp-content/uploads/2016/04/mechanical-gears-.png'
    return {
      skills: [
        { name: 'driving', img: defaultImg },
        { name: 'scala', img: defaultImg },
        { name: 'java', img: defaultImg },
        { name: 'c++', img: defaultImg },
        { name: 'play', img: defaultImg }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>