import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import TablesView from "./views/Tables.vue";
import Login from "./views/Login.vue";
import AuthGithub from "./views/AuthGithub.vue";
import store from "./store";

Vue.use(Router);

let router = new Router({ 
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: checkAuth,
    },
    {
      path: "/tables",
      name: "tables",
      component: TablesView,
      beforeEnter: checkAuth,
    },
    {
      path: "/auth/login",
      name: "login",
      component: Login,
      beforeEnter: checkAlreadyAuth,
    },
    {
      path: "/auth/logout",
      name: "logout",
      component: () => {
        logout()
        router.push("/auth/login")
      },
      beforeEnter: checkAuth,
    },
    {
      path: "/auth/callback/github",
      name: "authGithubCallback",
      component: AuthGithub
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting this generates a separate chunk (about.[hash].js) for this route which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    }
  ]
});

// Check for authentication before doing
function checkAuth(to, from, next){
  // check store getters
  if (store.getters.isAuthenticated){
    // check where the route from
    next()
  } else {
    next("/auth/login")
  }
  return
}

// check if already authen
function checkAlreadyAuth(to, from, next){
  if (store.getters.isAuthenticated){
    next("/")
  } else {
    next()
  }
  return
}

function logout(){
  store.dispatch("socialLogout")
}

export default router;
