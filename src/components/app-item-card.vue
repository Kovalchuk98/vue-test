<template>
    <v-card
    class="mx-auto mb-2"
    max-width="300"
  
  >
  <v-card-title>{{planet.name}}</v-card-title>

    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{ planet.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{ planet.name}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{planet.name}}</div>

      <div>{{planet.name}}</div>
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        color="orange"
        text
      >
        More
      </v-btn>
    </v-card-actions>
  </v-card>

</template>


<script>
export default {
    name: "appItemCard",
    props:{
      planet:{
        type: Object
      }
    }
    
}
</script>

<style lang="scss">
    
</style>