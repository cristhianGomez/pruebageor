<template>
   <mdb-navbar   color="white" expand="large" class="d-flex align-items-center" position="top" light animated animation="2" av>
     <mdb-navbar-brand href="#"> 
      <v-btn  v-if="showButton" class="mx-2" fab dark x-small color="red" @click="drawer">
      <v-icon dark>mdi-chevron-left</v-icon>
    </v-btn>
    <img src="@/assets/geor.png" height="50" alt="">
    </mdb-navbar-brand>
   <mdb-navbar-toggler class="mx-5">
      <mdb-navbar-nav right class="d-flex align-items-lg-center text-left ">
          <mdb-dropdown tag="li" class="nav-item inline py-0">
            <mdb-dropdown-toggle tag="a" navLink slot="toggle" class="d-flex align-items-center " waves-fixed>
            <mdb-icon icon="user-alt"   />
          <h6 class="pl-3"><strong>Nombre Apellido
  </strong>        <br />
    <p class="text-muted my-0">geor@gmail.com</p></h6>
  </mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>VER PERFIL</mdb-dropdown-item>
              <mdb-dropdown-item>GESTIONAR USUARIOS</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        <mdb-nav-item href="#"><mdb-icon icon="cog" /><strong class="d-lg-none pl-4">Configuración</strong></mdb-nav-item>
        <mdb-nav-item href="#"><mdb-icon icon="envelope" /><strong class="d-lg-none pl-4">Mensajes</strong></mdb-nav-item>
        <mdb-nav-item  href="#"><mdb-icon icon="bell" /><strong class="d-lg-none pl-4">Notificaciones</strong></mdb-nav-item>
        <mdb-nav-item  href="#" class="ml-lg-4"><mdb-icon color="red" icon="power-off pl- 4" /><strong class="d-lg-none">Salir</strong></mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
export default {
  name:'Header',
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
      drawer(){
        this.$store.commit('updateDrawer')
      }
    },
    computed: {
      showButton(){
          return this.$vuetify.breakpoint.name == 'sm' || this.$vuetify.breakpoint.name == 'xs'? true:false
      }
    }

}
</script>

<style>

</style>