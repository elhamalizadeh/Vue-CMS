import { createRouter, createWebHistory } from "vue-router";
import HomeAdmin from "./components/admin/HomeAdmin.vue";
import HomeView from "./components/view/HomeView.vue";

import users from "./components/admin/users/users.vue";
 import createUser from "./components/admin/users/createUser.vue";
import showUser from './components/admin/users/showUser.vue';
import TemplateUsers from './components/admin/users/TemplateUsers.vue';
import posts from "./components/admin/posts/posts.vue";
import createPost from "./components/admin/posts/createPost.vue";
import showPost from "./components/admin/posts/showPost.vue";
import TemplatePosts from './components/admin/posts/TemplatePosts.vue';
import editPost from './components/admin/posts/editPost.vue';
import editUser from './components/admin/users/editUser.vue';

const routes = [{ path: "/admin", name: "HomeAdmin", component: HomeAdmin },
{ path: "/", name: "HomeView", component: HomeView },

  {path: "/admin/posts",name: "TemplatePosts",component: TemplatePosts,
 children:[{ path: "", name: "postList", component: posts },
 { path: ":id", name: "showPost", component: showPost },
 {path: "createPost", name: "createPost", component: createPost },
 {path: "edit/:id", name: "editPost", component: editPost }]},
 
  {path: "/admin/users",name: "TemplateUsers",component: TemplateUsers,
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
