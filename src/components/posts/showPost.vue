<template>
<div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div v-else>
  <h1>Show Post</h1>
<h1> Title: {{ post.title }} / {{ post.id }}</h1>
<p>Description: {{ post.body }}</p>
<button @click="deletePost" class="btn btn-danger me-2">Delete</button>
<router-link :to="{name:'editPost'}" class="btn btn-primary">Edit</router-link>
</div>
</template>

<script>
import {useRoute} from "vue-router";
import axios from 'axios';
import {ref} from 'vue';
import Swal from "sweetalert2";

export default {
    name:'showPost',
setup() {
    const post = ref({});
    const route = useRoute();

    function getPost() {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function(response){
            post.value = response.data;
        })
         .catch(e => {
      this.errors.push(e)
    })
    }
     getPost();

     function deletePost(){
    axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function(){
            Swal.fire({
            title: "Thanks!",
            text: `Post ${route.params.id} deleted successfully`,
            icon: "warning",
            confirmButtonText: "Ok",
          });
        })
         .catch(e => {
      this.errors.push(e)
    })
    }
    return{post,route,deletePost};

}
}
</script>

<style>

</style>