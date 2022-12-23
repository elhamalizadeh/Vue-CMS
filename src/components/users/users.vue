<template>
<div>
  <h1>Users List</h1>
  <router-view></router-view>
  <div v-for="(user , id) in users" :key="id">
    {{ user.name }} / {{ user.id }}
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
export default {
name:'userList',
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
    console.log(users);
    return{users};
}
}
</script>

<style>

</style>