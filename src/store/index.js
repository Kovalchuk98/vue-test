import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    planets:[]
  },
  mutations: {
    SET_PLANETS_TO_STATE: (state, planets) =>{
      state.planets = planets;
    }
  },
  actions: {
    GET_PLANETS_FROM_API({commit}){
     axios.get('https://swapi.dev/api/planets/')

        .then(planets => {
            console.log(planets.data.results);
            commit('SET_PLANETS_TO_STATE', planets.data.results)
            return planets
        })
        .catch(err => {
            console.error(err);
        });
    }
  },
  getters:{
    PLANETS(state){
      return state.planets;
    }
  },
  modules: {
  }
})
