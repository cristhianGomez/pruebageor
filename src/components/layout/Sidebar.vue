<template>
    <v-navigation-drawer    clipped  
      v-model="draw"
      mobile-break-point="960" app
      color="white"
      :style="isLarge"
      width="250"
      :mini-variant="icons"
      >
    
      <v-list dense style="text-align:start" 
        selected="red"
        color="red-text"

      >
     <v-subheader style="justify-content: flex-end;">
        <v-btn class="mx-2" fab dark x-small color="red" @click="hideSideBar">
      <v-icon dark>{{iconarrow}}</v-icon>
    </v-btn>
     </v-subheader>
        <template v-for="item in items">
        <v-list-item
          :key="item.title"
          :to="item.to"
          @click="updateName(item.title)"
        >
          <v-list-item-icon class="mr-3">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Sidebar',
    created(){
     
    },
    data () {
      return {
        items: [
          {title: 'Indicadores',
            icon: 'mdi-account',
            to:'/indicadores'
          },
          { title: 'Ventas', icon: 'mdi-store', to:'/Ventas'},
          { title: 'Compras', icon: 'mdi-cart', to:'/Compras'},
          { title: 'Inventarios', icon: 'mdi-file-table-box', to:'/Inventarios'},
          { title: 'Finanzas', icon: 'mdi-home-currency-usd', to:'/Finanzas'},
          { title: 'Personas', icon: 'mdi-account-multiple', to:'/Personas'},
          { title: 'Planificacion', icon: 'mdi-text-box-multiple-outline', to:'/Planificacion'},
          { title: 'Informes', icon: 'mdi-checkbook', to:'/Informes'}
        ],
        isLarge:'padding-top:80px',
        draw:true,
        icons:false,
        iconarrow:'mdi-chevron-left'
      }
      },
      methods:{
        action(){},
        updateName(name){
          this.$store.dispatch('setPageName',name)
        },
        hideSideBar(){
            this.icons=!this.icons
            this.iconarrow=this.icons?'mdi-chevron-right':'mdi-chevron-left'
        }
      },
    watch:{
      drawer(){
        this.draw=this.drawer
      }
    },
      computed:{
        drawer(){
          return this.$store.state.drawer
        },
   
      }

  }
</script>
