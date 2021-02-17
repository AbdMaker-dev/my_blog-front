<template>
  <div class="home">
    <ListSujet/>
  </div>
</template>

<script>
import  ListSujet from '../components/sujet/ListSujet.vue'

export default {
  name: 'Home',
  components: {
    ListSujet,
  }
}
</script>

<style scoped>
.home{
  padding: 0px;
  margin: 0px;
}
</style>
