<template>
<v-app>
  <Header/>
<v-content  style="margin-top:80px">
<Sidebar/>
        <!-- <Breadcumb/> -->
        <v-sheet class="bgs d-flex outlined p-3 
    tile" height="100%"
    color="blue lighten-5" >
      <mdb-container fluid>
      <mdb-row class="justify-content-center">
      <h6>{{name}}</h6>
      </mdb-row>
       <transition
				name="main-anim"
				enter-active-class="animated fadeIn"
				leave-active-class="fateOut"
        mode="out-in"
			>
				<router-view>
          
        </router-view>
			</transition>
      </mdb-container>
     </v-sheet>
  </v-content>
</v-app>
</template>
<script>
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
  data(){
    return {
      items:[{'nombre':"1133"},{'nombre':"333"},{'nombre':"11"}]
    }
  },
  computed:{
    name(){
      return this.$store.state.pageName||""
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.animated-icon2 span[data-v-5e1632bb]{
  background: black;
}
</style>
