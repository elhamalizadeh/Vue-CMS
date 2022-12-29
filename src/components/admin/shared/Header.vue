<template>
<div class="" id="MainMenu">
    <router-link :to="{name:'HomeAdmin'}" id="links">Dashboard</router-link>
     <router-link :to="{name:'userList'}" id="links">users</router-link>
    <router-link :to="{name:'postList'}" id="links">Posts</router-link>
    <router-link :to="{name:'HomeView'}" id="links">View Site</router-link>
    </div>
</template>

<script>
export default {
name : 'HeaderSection'
}
</script>

<style>
#MainMenu{
    background-color:blue;
    height:30px;
    color: white;
    padding-left:20px;
}
#links{
    color:white;
    text-decoration: none;
    margin-left:15px;
}
#links:hover{
    color:#1d2327;
}
</style>