<template>
  <div class="container-fluid" id="header">
    <h1>Main Menu</h1>
<nav class="nav flex-column">
   <router-link :to="{name:'HomeAdmin'}" class="nav-link active" id="links">Dashboard</router-link>
     <router-link :to="{name:'userList'}" class="nav-link" id="links">users</router-link>
    <router-link :to="{name:'postList'}" class="nav-link" id="links">Posts</router-link>
</nav>

  </div>
</template>

<script>
export default {
name:'MainMenu'
}
</script>

<style>
#header{
    background-color:#1d2327;
    width:30%;
    height:700px;
    color: white;
    padding-left:20px;
    float:left;
}

#links{
    color:white;
    text-decoration: none;
    margin-left:15px;
}
#links:hover{
    color:blue
}
</style>