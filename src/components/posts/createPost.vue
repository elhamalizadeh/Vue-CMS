<template>
  <div class="container">
    <h1>Create New Post</h1>
    <form @submit.prevent="validate">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="form.title"
        />
        <div class="form-text text-danger">{{ form.titleErrorText }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Body</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="form.body"
        ></textarea>
        <div class="form-text text-danger">{{ form.bodyErrorText }}</div>
      </div>
      <button type="submit" class="btn btn-success mb-3" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Save
      </button>
    </form>
  </div>
</template>
<script>
import { reactive , ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "createPost",
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });

    const loading = ref(false);

    function validate() {
      if (form.title === "") {
        form.titleErrorText = "Title is required";
      } else {
        form.titleErrorText = "";
      }

       if (form.body === "") {
        form.bodyErrorText = "body is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !=="" && form.body !="" ){
        console.log("createpost is called");
         loading.value = true;
        createPost();
      }
    }

    function createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.title,
          body: form.body,
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
        console.log(form.title, form.body);
    }

    
    return { form, validate,loading };
  },
};
</script>

<style>
</style>