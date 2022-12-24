<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }} / {{ user.id }}</h5>
        <p class="card-text">{{ user.address }} </p>
        <router-link :to="{ name : 'ShowUser' , params : { id: user.id} }" >
        Details...
        </router-link> 
   
      </div>
    </div>
</template>


<script>
export default {
props :{
    user:Object
}
}
</script>

<style>

</style>