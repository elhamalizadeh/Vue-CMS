<template>
<div class="container">
  <h1>Users List</h1>
      <router-link :to="{name:'createUser'}" class="btn btn-dark mb-3">Create New User </router-link>
  <div class="row g-3">
     <div class="col-sm-4"  v-for="user in users"  :key="user.id">
  <userCardView :user="user"/>
     </div>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
import userCardView from './userCardView.vue';
export default {
name:'userList',
components:{
  userCardView
},
setup() {
    const users = ref([]);
    function getUsers(){
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function(response){
            users.value = response.data;
        })
         .catch(e => {
      this.errors.push(e)
    })
        
    }
    getUsers();
    return{users};
}
}
</script>

<style>

</style>