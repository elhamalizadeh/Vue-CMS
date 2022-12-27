import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import users from "./components/users/users.vue";
 import createUser from "./components/users/createUser.vue";
import showUser from './components/users/showUser.vue';
import TemplateUsers from './components/users/TemplateUsers.vue';
import posts from "./components/posts/posts.vue";
import createPost from "./components/posts/createPost.vue";
import showPost from "./components/posts/showPost.vue";
import TemplatePosts from './components/posts/TemplatePosts.vue';
import editPost from './components/posts/editPost.vue';
import editUser from './components/users/editUser.vue';

const routes = [{ path: "/", name: "HomePage", component: Home },

  {path: "/posts",name: "TemplatePosts",component: TemplatePosts,
 children:[{ path: "", name: "postList", component: posts },
 { path: ":id", name: "showPost", component: showPost },
 {path: "createPost", name: "createPost", component: createPost },
 {path: "edit/:id", name: "editPost", component: editPost }]},
 
  {path: "/users",name: "TemplateUsers",component: TemplateUsers,
  children:[{ path: "", name: "userList", component: users},
   { path: ":id", name: "ShowUser", component: showUser },
   { path: "createUser", name: "createUser", component: createUser },
   { path: "edit/:id", name: "editUser", component: editUser }
],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
