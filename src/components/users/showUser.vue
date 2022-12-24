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
</div>
</template>

<script>
import {useRoute} from "vue-router";
import axios from 'axios';
import {ref} from 'vue';

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
    return{user,route};

}
}
</script>

<style>

</style>