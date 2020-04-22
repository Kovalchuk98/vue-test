<template>
  <v-content class="content">
 
       <app-header :mobileView="mobileView"/>

         <app-item-list/>
    
      <app-footer/>
  
  </v-content>

</template>

<script>
import appHeader from '@/components/app-header.vue';
import appFooter from '@/components/app-footer.vue';
import appItemList from '@/components/app-item-list.vue';


export default {
  name: 'Home',
  components: {
    appHeader,
    appItemList,
    appFooter 
  },
  data: ()=>{
    return{
      mobileView: false,
    }
  },
  computed:{
  },
  methods:{
    displayView(){
      this.mobileView = window.innerWidth <= 770; 
    }
  },
  mounted(){
     window.addEventListener('resize', this.displayView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.displayView);
  }
}
</script>

<style lang="scss">
  .content{
    width: 100%;
    height: 100%;
  }
</style>
