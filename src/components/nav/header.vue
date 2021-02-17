<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <router-link  class="navbar-brand" to="/"><h5 class="display-3">My-Blogs</h5></router-link >
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item" v-if="loggedIn">
              <router-link class="nav-link" to="/add">Add-Sujet</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/apropos">A Propos</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            <button v-if="loggedIn" type="button" class="btn btn-primary ml-3" v-on:click="logOut"><i class="fa fa-power-off" aria-hidden="true"></i></button>
            <button v-else type="button" class="btn btn-primary ml-3" v-on:click="showAlert"><i class="fa fa-key" aria-hidden="true"></i></button>
          </form>

        </div>
      </nav>
    </div>
</template>

<script>
import swal from 'sweetalert2';
// window.Swal = swal;

export default {
    name: 'Header',
    data(){
      return {
        user_login: String,
      };
    },
    computed: {
    loggedIn() {
      return this.$store.state.status.loggedIn;
    }
    },
    methods: {
      showAlert() {
      // Use sweetalert
      swal.fire({
          title: 'Votre username?',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Loogin',
          showLoaderOnConfirm: true,
          preConfirm: (login) => {
            console.log(login);
            this.$store.dispatch('login', login).then(
              (rest) => {
                console.log(rest);
              },
              error => {
              this.loading = false;
              this.message = error.toString();
              }
            );
          },
          allowOutsideClick: () => !swal.isLoading()
        }).then((result) => {
          if (result.isConfirmed) {

            if (result.value === "abd2020") {
              swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your are logIng',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
              swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Username incorect!',
                footer: '<a href>use: abd2020</a>'
              })
            }
          }
        })
    },

    logOut(){
      this.$store.dispatch('logout').then(
        ()=> {
          this.$router.push('/');
        }
      );
    }
    }
}
</script>

<style scoped>
h5{ 
  color: #d54d7b;
  font-family: "Great Vibes", cursive; 
  font-size: 55px; line-height: 50px; 
  font-weight: normal; 
  margin-bottom: 0px; 
  margin-top: 40px; 
  text-align: center; 
  text-shadow: 0 1px 1px #fff; 
}
</style>