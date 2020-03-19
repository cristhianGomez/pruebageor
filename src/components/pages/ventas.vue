<template>
  <mdb-card style="width:100%; border-radius:10px; height:95%" class="pt-6">
    <v-container fluid justify="center">
    <v-row justify="center" >
      <v-col>
   <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      </v-col>
    </v-row>
    </v-container>
  </mdb-card>
</template>

<script>
export default {
  name:'Compras',
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