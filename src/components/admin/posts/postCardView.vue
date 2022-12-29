<template>
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">{{ post.id }} - {{ post.title }} </h5>
        <p class="card-text">{{ post.body }} </p>
        <router-link :to="{ name : 'showPost' , params : { id: post.id} }" >
        read more
        </router-link> 
   
      </div>
    </div>

</template>

<script>
export default {
props :{
    post:Object
}
}
</script>

<style>

</style>