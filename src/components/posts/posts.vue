<template>
  <div class="container">
    <h1>List of Posts</h1>
    <div v-if="loading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="col-sm-4" v-for="post in posts" :key="post.id">
      <postCardView :post="post" />
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
    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          posts.value = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    }

    getPosts();
    return { posts };
  },
};
</script>

<style></style>
