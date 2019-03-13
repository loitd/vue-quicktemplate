import Vue from "vue";
import Vuex from "vuex";

// See Vuex docs at: https://vuex.vuejs.org/
// We will use Vuex as a global state library. Vuex is application scoped.
Vue.use(Vuex);

// State in Vuex ~ Data in Vue
// We will have the token field (using local storage stored token if present) and a status field, 
// representing the status of the API call (loading, success or error).
// https://blog.sqreen.com/authentication-best-practices-vue/
const state = {
  token: localStorage.getItem("token") || '',
};

// Mutation: commit + track state changes -> can rollback/revert to previous value
// basic mutations, showing loading, success, error to reflect the api call status and the token when loaded
const mutations = {
  SET_TOKEN(state, newtoken){
    state.token = newtoken;
  }
}

// Action calls Mutation which updates State directly. ~Method in Vue can updates Data
// Action in Vuex ~ Method in Vue
// Now after login, all the Axios calls have the authorization header set to your token. 
// All your API calls are authenticated! And when logging out, we delete the authorization header.
const actions = {
  fetchToken(context){
    context.commit('SET_TOKEN', 'ahihi');
  }
}

// Getter can be used to access State ~ Computed in Vue access Data
// The ‘isAuthenticated’ getter can seem overkill, however it’s a great way to keep your authentication futur proof. 
// By having this getter, you separate data from app logic making it futur proof
const getters = {
  isAuthenticated: state => !!state.token,
};



export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,                     
})                                                                
