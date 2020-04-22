<template>
  <v-content>

  <v-sheet
    height="100%"
    class="overflow-hidden"
    style="position: relative;"
  >
        <v-app-bar class="app-header primary" fixed> 
              <v-app-bar-nav-icon
                  v-if="mobileView"
                  @click.stop="drawer = !drawer"
                  color="white"/>

                   <v-toolbar-title><a href="/"><img src="@/assets/logo.svg" height="30px" alt=""></a></v-toolbar-title>
 
              <ul class="menu-list d-flex pa-0 ml-2"
                  v-if="!mobileView"
                >
                 
                  <li class="" 
                      v-for="item in items" 
                      :key="item.title"
                      >
                       <a href="/">
                        {{item.title}}
                      </a>
                  </li>
                  
              </ul>

        </v-app-bar>


  <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
     
    >
    <v-container class="d-flex justify-end pb-0">
      <v-icon
        @click.stop="drawer = !drawer"
        >
        mdi-close
        </v-icon>
    </v-container>

      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list 
      nav
      dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

      </v-sheet>
  </v-content>

</template>

<script>
  export default {
    name: 'appHeader',
    props:{
      mobileView:{
        type: Boolean
      }
    },
    data: () => ({
      drawer: null,
              items: [
                { title: 'Home', icon: 'mdi-view-dashboard' },
                { title: 'Movies', icon: 'mdi-forum' },
                { title: 'Series', icon: 'mdi-forum' },
                { title: 'Games', icon: 'mdi-forum' },
                { title: 'Profile', icon: 'mdi-forum' },
              ]
    }),
  }
</script>

<style lang="scss">
    .menu-list{
      width: auto;
      list-style-type: none;
      li{
          margin-left: 20px;
        a{
          color: white;
          text-decoration: none;
        }
      }
    }
</style>
