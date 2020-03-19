<template>
<div class="table-responsive-sm">

  <table class="  table   table-md sortable customtable" cellspacing="0">
  <thead>
    <tr>
      <th v-for="(field,index) in fields" :key="index" scope="col"><strong>{{field.label}}</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr  class="customtr rounded"  v-for="(dat,index) in data" :key="index">
      <td v-for="(field,index) in fields" :key="index" scope="col">{{dat[field.value]}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
export default {
name:'CustomTable',
props:{
  data: {
    type: Array,
    default:function(){
        return []
        }
  },
  fields:{
   default:function(){
        return []
       },
    type: Array
  }
}

}
</script>

<style>
  .customtr{
     background-color: aliceblue;
    border-radius: 2px solid;
    margin: 5px;
    border-left: 6px yellow solid;  
    box-shadow: aliceblue  0px 1.5px 2px 2px;

  }
  td:first-child{
    border-left: 6px yellow solid;  
  }
  .customtable{
    border-collapse:separate;
    border-spacing:8px 15px;
  }
  .customtr:hover{
    box-shadow: gray  0px 2px 3px 3px;
  }
</style>