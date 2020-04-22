<template>
   <div class="list">
        <v-row>
            <v-col class="d-flex flex-wrap">
                <app-item-card
                        v-for="planet in PLANETS"
                        :key="planet.name"
                        :planet=planet
                    />
                </v-col>
        </v-row> 
   </div>
           
</template>
<script>

import appItemCard from '@/components/app-item-card.vue';
import { mapActions, mapGetters} from 'vuex';

export default {
    name: 'appItemList',
    components:{
        appItemCard
    },
     data: () => ({
         
    }),
      computed:{
      ...mapGetters([
          'PLANETS'
      ])
  },
  methods:{
    ...mapActions([
        'GET_PLANETS_FROM_API'
    ])
  },
  mounted(){
    this.GET_PLANETS_FROM_API();
  }
}
</script>

<style lang="scss">

    .list{
        width: 100%;
        height: 100%;
        padding:80px 0;
    }
</style>