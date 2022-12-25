<template>
  <div class="container">
    <h1>List of Posts</h1>
    <router-link :to="{name:'createPost'}" class="btn btn-dark mb-3">Create Post</router-link>
    <div class="row g-3">
    <div v-if="loading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="col-sm-4" v-for="post in posts" :key="post.id">
      <postCardView :post="post" />
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import postCardView from "./postCardView.vue";

export default {
  components: { postCardView },
  name: "postList",
  setup() {
    const posts = ref([]);
    const loading = ref(true);
    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          posts.value = response.data;
          loading.value = false;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    }

    getPosts();
    return { posts,loading };
  },
};
</script>

<style></style>
