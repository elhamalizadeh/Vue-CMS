<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <a href="#" class="btn btn-primary">read more</a>
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