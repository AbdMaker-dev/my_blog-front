<template>
  <div class="container">
    <form name="form"  @submit.prevent="onSubmit">
  <fieldset>
    <legend>Legend</legend>
    <div class="form-group">
      <label for="exampleSelect1">Image du sujet</label>
      <select v-model="sujet.image" name="image" class="form-control" id="exampleSelect1">
        <option>Selectionez type d'image</option>
        <option value="car">Voiture</option>
        <option value="computer ">Ordinateur</option>
        <option value="keyboard">Clavier</option>
        <option value="shoes">chaussures</option>
      </select>
    </div>

    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Titre</label>
      <input v-model="sujet.libelle" name="libelle" type="text" class="form-control" placeholder="Titre" id="inputDefault">
    </div>
    <div class="form-group">
      <label for="exampleTextarea">Description</label>
      <textarea v-model="sujet.description" name="description" class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Ajouter</button>
  </fieldset>
</form>
  </div>
</template>

<script>
import swal from 'sweetalert2';
import DataService from "../services/data.service"
export default {
  name: "AddSujet",
  data(){
    return {
      sujet: {}
    }
  },
  methods: {
    onSubmit(){
      console.log(this.sujet);
      this.sujet.image = `https://source.unsplash.com/1080x720/?${this.sujet.image}`;
      DataService.AddSujet(this.sujet).then(
        (result) => {
          console.log(result);
          if (result.statusText=== "Created") {
            this.alert();
            this.sujet = {};
          }
        },
        (err) => {
          console.log(err);
        }
        );
    },

    alert(){
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ajout',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}
</script>
