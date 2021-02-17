<template>
  <div class="card crd" style="width: 25rem;">
    <img class="card-img-top" v-bind:src="sujet.image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{sujet.libelle}}</h5>
      <p class="card-text">{{sujet.description}}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <router-link class="btn btn-outline-info btn-sm float-right" :to="'/detail/' + sujet._id">Detail</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ItemSujet',

    props:{
      sujet: {}
    }
}
</script>

<style scoped>
.crd{
}
img{
    border-radius: 20px;
}
</style>