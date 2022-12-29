<template>
  <div class="container">
    <h1>Edit User</h1>
     <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
    <div div v-else class="col-md-6">
     <UserForm
    @formData="updateUser"
    :button-loading="loading" 
    :user="user"
    />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
import UserForm from './components/Form.vue'

export default {
  name: "editUser",
  components:{
    UserForm
  },

  setup() {
     const loading = ref(false);
    const pageLoading = ref(true);
    const route = useRoute();
     const user = ref({});

    function getUser() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
             user.value = response.data;
            pageLoading.value = false
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getUser();

    function updateUser(formData){
        loading.value = true;
         axios
        .post("https://jsonplaceholder.typicode.com/users", {
          name: formData.name,
          family: formData.family,
          email: formData.email,
        })
        .then(function () {
            loading.value = false;
          Swal.fire({
            title: "Thanks!",
            text: "User updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });

        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return {updateUser,pageLoading,loading, user };
  },
};
</script>

<style>
</style>