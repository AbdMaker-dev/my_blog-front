<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-9" style="height: 600px;">
        <div class="card mb-3" style="width: 100%">
          <div class="row g-0">
            <div class="col-md-4">
              <img style="width: 100%" v-bind:src="sujet.image" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{sujet.libelle}}</h5>
                <p class="card-text">{{sujet.description}}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
          <div class="container contente-comenter">
            <div class="row mt-5" v-for="(coment, index) in sujet.commenters" :key="index">
              <div class="circular--landscape  mr-3">
                  <img src="@/assets/user2.png" />
                </div>
              <div class="alert alert-dismissible alert-light msg">
                <strong class="mr-2">Anonyme!!</strong>{{coment.commenter}}
              </div>
            </div>            
          </div>
      </div>
      <div class="col">
            <form name="form"  @submit.prevent="onSubmit">
              <fieldset>
                <legend>Commenter</legend>
                <div class="form-group">
                  <label class="col-form-label" for="inputDefault">Email</label>
                  <input v-model="commenter.email" name="email" type="text" class="form-control" placeholder="Email" id="inputDefault">
                </div>
                <div class="form-group">
                  <label for="exampleTextarea">Description</label>
                  <textarea v-model="commenter.commenter" name="commenter" class="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Ajouter</button>
              </fieldset>
            </form>
      </div>

    </div>
  </div>
</template>

<script>
import DataService from "../services/data.service";

export default {
  name: "DetailSujet",
  data(){
    return {
      sujet: {},
      commenter: {}
    }
  },
  methods:{
    onSubmit(){
      DataService.AddCommenterToSujet(this.$route.params.id, this.commenter).then(
        (result) => {
          const sjt = result.data;
          console.log(sjt.commenters);
          if (sjt) {
           this.getSujet();
          }
        }
      )
    },
    getSujet(){
      DataService.getSujetBiId(this.$route.params.id).then(
        (result) => {
          const sjt = result.data;
          console.log(sjt.commenters);
          if (sjt) {
            this.sujet = sjt;
            this.commenter = {};
          }
        }
      )
    }
  },
  mounted(){
    this.getSujet();
  }
}
</script>

<style scoped>
.msg{
  max-width: 500px;
}
.contente-comenter{
  max-height: 300px;
  overflow: auto;
  margin-bottom: 50px;
}

</style>