<template>
<div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div v-else>
  <h1>Show Post</h1>
<h1> Title: {{ post.title }} / {{ post.id }}</h1>
<p>Description: {{ post.body }}</p>
<router-link to="" class="btn btn-danger">Delete</router-link>
<router-link :to="{name:'editPost'}" class="btn btn-primary">Edit</router-link>
</div>
</template>

<script>
import {useRoute} from "vue-router";
import axios from 'axios';
import {ref} from 'vue';

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
    return{post,route};

}
}
</script>

<style>

</style>