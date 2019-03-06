import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// We will have the token field (using local storage stored token if present) and a status field, 
// representing the status of the API call (loading, success or error).
// https://blog.sqreen.com/authentication-best-practices-vue/
const state = {
};

// The ‘isAuthenticated’ getter can seem overkill, however it’s a great way to keep your authentication futur proof. 
// By having this getter, you separate data from app logic making it futur proof
const getters = {
};

// Now after login, all the Axios calls have the authorization header set to your token. 
// All your API calls are authenticated! And when logging out, we delete the authorization header.

const actions = {
}

// basic mutations, showing loading, success, error to reflect the api call status and the token when loaded
const mutations = {
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});
