<template>
<div class="main">
    <Header/>
    <Slide/>
    <div class="container-fluid fld">
      <router-view/>
    </div>
</div>
</template>


<script>
import Header from './components/nav/header.vue'
import Slide from './components/nav/Slide.vue'
export default {
    components:{
    Header,
    Slide
  }
}
</script>
<style>
.fld{
  padding: 0px;
  margin: 0px;
}
.main{
  width: 100%;
}
</style>
