<template>
  <v-app>

    <v-content>
      <home/>
    </v-content>
    
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    
  }), 
};
</script>
