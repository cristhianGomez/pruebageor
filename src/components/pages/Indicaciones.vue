<template>
  <mdb-card style="width:100%; border-radius:10px; height:95%" class="pt-6">
    <v-container fluid justify="center">
    <v-row justify="center">
           <v-switch class="px-3"
      v-model="switch1"
      color="red"
    >
    <p style="inline-size: max-content;color:black" slot="prepend">ocultar cuadro</p>
    </v-switch>
    
           <v-switch class="px-3"
      color="red"
      v-model="switch2"
    >
    <p style="inline-size: max-content;color:black" slot="prepend">ocultar lista</p>
    </v-switch>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="9" lg="7">
      <v-card 
      style="  text-align: right;"
      >
        <v-row class="text-align-right px-4">
        <v-col style="font-weight:bold" cols="4">Comprobantes</v-col>
        <v-col class="pl-1" cols="1">600</v-col>
          <v-col cols="4"><v-progress-linear
      v-model="comprobantes"
      color="blue"
      height="25"
      reactive
    ></v-progress-linear>
    </v-col>
    <v-col cols="3">
      $/.2,301.00
    </v-col>
        </v-row >
        <v-row class="px-4">
        <v-col style="font-weight:bold" cols="4">Percepciones</v-col>
        <v-col class="pl-1" cols="1">24</v-col>
                  <v-col  cols="4"><v-progress-linear
      v-model="percepciones"
      color="amber"
      height="25"
      reactive
    ></v-progress-linear>
    </v-col>
    <v-col  cols="3">
      $/.570.00
    </v-col>
        </v-row>
        <v-row class="px-4">
        <v-col style="font-weight:bold" cols="4">Total</v-col>
        <v-col class="pl-1" cols="1">600</v-col>
                  <v-col  cols="4"><v-progress-linear
      v-model="total"
      color="success"
      height="25"
      reactive
    ></v-progress-linear>
    </v-col>
    <v-col  cols="3">
      $/.2,301.00
    </v-col>
        </v-row>
      </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
    <transition name="expand" mode="out-in">
      <v-col  v-if="showSearch" cols="1" class="m-0" justify="center">     
            <v-text-field
                  label="Buscar"
                  rounded
                  class="v-btn v-size--small light-blue"
                  dark
                >
                <v-icon slot="prepend" @click="showSearch =!showSearch">mdi-magnify </v-icon>
                </v-text-field>
      </v-col>
      <v-col  v-else cols="4" class="m-0" justify="center">     
            <v-text-field
                  label=""
                  rounded
                  class="v-btn v-size--small light-blue"
                  dark
                >
                <v-icon slot="prepend" @click="showSearch =!showSearch">mdi-magnify </v-icon>
                </v-text-field>
      </v-col>
      </transition>
    </v-row>
    <v-row justify="center">

      <mdb-datatable
          :data="data"
          :searching="false"
          :pagination="false"
          striped
          :tfoot="false"
          responsive
        />
    </v-row>
    </v-container>
  </mdb-card>
</template>

<script>
export default {
data(){
  return{
    switch1:true,
    showSearch:false,
    switch2:true,
    comprobantes:60,
    percepciones:24,
    data: {
          columns: [
            {
              label: 'Fecha',
              field: 'date',
              sort: 'asc'
            },
            {
              label: 'Proveedor',
              field: 'proveedor',
              sort: 'asc'
            },
            {
              label: 'Forma de Pago',
              field: 'payment',
              sort: 'asc'
            },
            {
              label: '#Comprob',
              field: 'comprob',
              sort: 'asc'
            },
            {
              label: 'Total',
              field: 'salary',
              sort: 'asc'
            },
          ],
          rows: [
            {
              date: '2020/02/14',
              proveedor: 'System Architect',
              payment: 'Efectivo',
              comprob: 'BO001',
              salary: '$320'
            },
            {
              date: '2020/02/14',
              proveedor: 'Accountant',
              payment: 'Transferencia',
              comprob: 'BO001',
              salary: '$170'
            },
            {
              date: '2020/02/14',
              proveedor: 'Junior Technical Author',
              payment: 'Efectivo',
              comprob: 'BO001',
              salary: '$86'
            },
          ],
          }
  }
},
methods:{
  showSearchClick(){
    this.showSearch= true
  },
  hideSearchClick(){
    this.showSearch=false
  }
},
computed:{
  total(){
    return this.comprobantes+this.percepciones
  }
}
}
</script>

<style>

.expand-enter-active, .expand-leave-active {
  transition: opacity .5s
}
.expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>