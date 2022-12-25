<template>
<div class="container">
 <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>


  <div div v-else class="col-md-6">
    <h1>Edit Post</h1>
    <PostForm
    @formData="updatePost"
    :button-loading="loading" 
    :post="post"
    />
  </div></div>
</template>
<script>

import axios from "axios";
import Swal from "sweetalert2";
import PostForm from './components/Form.vue';
import { useRoute } from "vue-router";
import { ref } from "vue";


export default {
  name: "editPost",
  components:{
    PostForm
  },
  setup() {
    const loading = ref(false);
    const pageLoading = ref(true);
    const post = ref({});
    const route = useRoute();
   
function getPost() {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function(response){
            post.value = response.data;
            pageLoading.value = false
        })
         .catch(e => {
      this.errors.push(e)
    })
    }
     getPost();

    
    function updatePost(formData) {
        loading.value = true;
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post created successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });

        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(formData.title, formData.body);
    }

    
    return { updatePost,pageLoading,loading, post };
  },
};
</script>

<style>
</style>