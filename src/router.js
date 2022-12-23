import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import users from "./components/users/users.vue";
import createUser from "./components/users/createUser.vue";
import posts from "./components/posts/posts.vue";
import createPost from "./components/posts/createPost.vue";

const routes = [{ path: "/", name: "HomePage", component: Home },
  {path: "/posts",name: "postList",component: posts,
 children:[{ path: ":id", name: "postPage", component: showPost },
 {path: "createPost", name: "createPost", component: createPost }]},
  {path: "/users",name: "userList",component: users,
  children:[{ path: "createUser", name: "createUser", component: createUser },
  { path: ":id", name: "userPage", component: showUser }],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
