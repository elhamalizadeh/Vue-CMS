<template>
  <h1>Create New User</h1>
  <div class="container">
    <form @submit.prevent="validate">
      <label>Name:</label>
      <input type="text" v-model="form.name" class="form-control" />
      <div class="form-text text-danger">{{ form.nameErrorText }}</div>

      <label>Family:</label>
      <input type="text" v-model="form.family" class="form-control" />
      <div class="form-text text-danger">{{ form.familyErrorText }}</div>

      <label>Email:</label>
      <input type="email" v-model="form.email" class="form-control" />
      <div class="form-text text-danger">{{ form.emailErrorText }}</div>

      <button type="submit" class="btn btn-success mb-3 mt-3">
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
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  setup() {
    const loading = ref(false);
    const form = reactive({
      name: "",
      family: "",
      email: "",
      nameErrorText: "",
      familyErrorText: "",
      emailErrorText: "",
    });
    function validate() {
      if (form.name === "") {
        form.nameErrorText = "name is required";
      } else {
        form.nameErrorText = "";
      }

      if (form.family === "") {
        form.familyErrorText = "family is required";
      } else {
        form.familyErrorText = "";
      }

      if (form.email === "") {
        form.emailErrorText = "email is required";
      } else {
        form.emailErrorText = "";
      }

      if (form.name != "" && form.family != "" && form.email != "") {
        loading.value = true;
        createUser();
      }
    }

    function createUser() {
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          name: form.name,
          family: form.family,
          email: form.email,
        })
        .then(function () {
          Swal.fire({
            title: "Thanks!",
            text: "User created successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { form, validate, loading };
  },
};
</script>
<style>
</style>
