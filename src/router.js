import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import users from "./components/users/users.vue";
import createUser from "./components/users/createUser.vue";
import posts from "./components/posts/posts.vue";
import createPost from "./components/posts/createPost.vue";
import showPost from "./components/posts/showPost.vue";
import showUser from './components/users/showUser.vue';
import Template from './components/posts/Template.vue';

const routes = [{ path: "/", name: "HomePage", component: Home },
  {path: "/posts",name: "TemplatePosts",component: Template,
 children:[{ path: "", name: "postList", component: posts },
 { path: ":id", name: "showPost", component: showPost },
 {path: "createPost", name: "createPost", component: createPost }]},
 
  {path: "/users",name: "userList",component: users,
  children:[{ path: "createUser", name: "createUser", component: createUser },
  { path: ":id", name: "userId", component: showUser }],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
