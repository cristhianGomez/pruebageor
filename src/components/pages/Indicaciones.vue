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
          <v-col cols="4"><v-progress-linear rounded
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
      rounded
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
      rounded
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
    <v-row justify="center" >
      <v-col   :cols="searchSize" class="m-0 searchSize" justify="center" key="search1" >     
            <v-text-field
                  label="Buscar"
                  rounded
                  single-line
                  :dark="searchTheme"
                  class="v-btn v-size--small"
                  :class="colorSearch"
                 
                >
                <v-icon slot="prepend" @click="openSearch">mdi-magnify </v-icon>
                </v-text-field>
                <div></div>
      </v-col>
    </v-row>
     <v-row justify="center">
        <CustomTable
          :data="datos"
          :fields="fields"
          responsive
        />
    </v-row>
    </v-container>
  </mdb-card>
</template>

<script>
import CustomTable from '../ui/CustomTable.vue'
export default {
  name:'Indicaciones',
components:{
  CustomTable
},
data(){
  return{
    switch1:true,
    showSearch:false,
    searchTheme:true,
    colorSearch:"light-blue",
    searchSize:"1",
    switch2:true,
    comprobantes:60,
    percepciones:24,
    datos:[ 
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
    }],
    fields:[{label:'Fecha',value:'date'},{label:'Proveedor',value:'proveedor'},
    {label:'Forma de Pago',value:'payment'},{label:'#Comprob',value:'comprob'},{label:'Total',value:'salary'}],
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
  openSearch(){
    if(this.searchSize=="1"){
      this.searchSize="4"
      this.colorSearch=""
      this.searchTheme=false
      }
      else{
      this.searchSize="1"
      this.colorSearch="light-blue ligth-theme"
      this.searchTheme=true
      
      }
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
.searchSize {
   transition: all 1s ease;
}
.expand-enter-active, .expand-leave-active {
  transition: opacity .5s
}
.expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>