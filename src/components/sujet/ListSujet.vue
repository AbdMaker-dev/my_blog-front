<template>
    <div id="listProduit">
        <div class="row inline-block crd justify-content-start align-items-center">
            <div  v-for="(sujet, index) in listSujet" :key="index" class="ml-3">
                <ItemSujet v-bind:sujet="sujet"/>
            </div>
            <!-- <div class="col-sm ml-3">
                <ItemSujet/>
            </div>

            <div class="col-sm ml-3">
                <ItemSujet/>
            </div>
            <div class="col-sm ml-3">
                <ItemSujet/>
            </div>                       -->
        </div>
    </div>
</template>

<script>
import ItemSujet from './ItemSujet.vue'
import DataService from '../../services/data.service'

export default {
    name: 'ListSujet',
    components: {
        ItemSujet
    },
    data(){
        return{
            listSujet: []
        }
    },

    computed:{
    },
    mounted() {
        this.getAllSujets();
    },
    created(){

    },
    methods:{
        getAllSujets() {
            DataService.getAllSujet().then(
                (response) =>{
                    console.log(response.data);
                    this.listSujet = response.data;
                    return response;
                },
                (err) =>{ console.log(err);}
            );
            return null;
        }
    }
}
</script>

<style scoped>

.crd{
    background-color: #d6dbdf ;
    border: none;
    margin-bottom: 30px;
    border-radius: 30px;
    padding: 30px;
    width: 98%; 
    margin-left: auto; 
    margin-right: auto;
}

</style>