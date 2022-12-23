<template>
  <h1>List of Posts</h1>
  <router-view></router-view>
  <!-- <div v-for="(post , id) in posts" :key="id">
    {{ post.title }} / {{ post.id }}
  </div> -->
      <div class="col-sm-6" v-for="post in posts" :key="post.id">
  <postCardView :post="post"/>
      </div>

</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
import postCardView from './postCardView.vue';

export default {
  components: { postCardView },
name: 'postList',
setup() {
    const posts = ref([]);
    function getPosts(){
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function(response){
            posts.value = response.data;
        })
         .catch(e => {
      this.errors.push(e)
    })
        
    }

    getPosts();
    return{posts};
}
}
</script>

<style>

</style>