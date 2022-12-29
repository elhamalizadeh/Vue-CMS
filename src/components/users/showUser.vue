<template>
  <div>
  <h1>User Info</h1>
<h1> Name/Id: <br/>{{ user.name }} / {{ user.id }}</h1>
<ul>Address:
  <li>Street: {{ user.address.street }}</li>
  <li>suite: {{ user.address.suite }}</li>
  <li>city:{{ user.address.city }}</li>
  <li>zipcode: {{ user.address.zipcode }}</li>
  <li>geo:
  <ul>
    <li>geo.lat: {{ user.address.geo.lat }}</li>
  <li>geo.lng: {{ user.address.geo.lng }}</li>
  </ul>
  </li>
</ul>
<button @click ="deleteUser" class="btn btn-danger me-3">Delete</button>
<router-link :to="{name:'editUser'}" class="btn btn-primary"> Edit</router-link>
</div>
</template>

<script>
import {useRoute} from "vue-router";
import axios from 'axios';
import {ref} from 'vue';
import Swal from "sweetalert2";

export default {
name:'ShowUser',
setup() {
    const user = ref({});
    const route = useRoute();

    function getUser() {
    axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function(response){
            user.value = response.data;

        })
         .catch(e => {
      this.errors.push(e)
    })
    }
     getUser();

     function deleteUser(){
       axios
        .delete(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function(){
              Swal.fire({
            title: "Thanks!",
            text: "User updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
         .catch(e => {
      this.errors.push(e)
    })
     }
    return{user,route, deleteUser};

}
}
</script>

<style>

</style>