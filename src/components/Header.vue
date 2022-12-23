<template>
<div class="" id="header">
    <h1>Header</h1>
    <router-link :to="{name:'HomePage'}" id="links">Home</router-link>
     <router-link :to="{name:'userList'}" id="links">users</router-link>
   <router-link :to="{name:'createUser'}" id="links">New User</router-link>
    <router-link :to="{name:'postList'}" id="links">Posts</router-link>
    <router-link :to="{name:'createPost'}" id="links">New Post</router-link> 
    </div>
</template>

<script>
export default {
name : 'HeaderSection'
}
</script>

<style>
#header{
    background-color: blueviolet;
    height:100px;
    color: white;
    padding-left:20px;
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