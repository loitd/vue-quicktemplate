import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tongledButton: {
      // Init state for tongledButton
      state: "closed",
      navup: {display: 'none'},
      navdown: {display: 'block'},
    }, 
    sidebarButton: {
        // Init state for tongledButton
        state: "closed",
        navright: {display: 'block'},
        navleft: {display: 'none'},
        pageSidebar: {'margin-left': '-40vw'},
    }
  },
  mutations: {
    navbarTongled: function(state) {
      // alert("navbarTongled"); //for debug
      if (state.tongledButton.state === "closed") {
          // pretend to be opened
          state.tongledButton.state = "opened";
          state.tongledButton.navup = {display: 'block'};
          state.tongledButton.navdown = {display: 'none'};
      } else {
          // pretend to be closed
          state.tongledButton.state = "closed";
          state.tongledButton.navup = {display: 'none'};
          state.tongledButton.navdown = {display: 'block'};
      }
    }, 
    sidebarTongled: function(state) {
        // need communicate between navbar and sidebar component
        // this.$emit('sidebarTongled');
        if (state.sidebarButton.state === "closed") {
            // pretend to be opened
            state.sidebarButton.state = "opened";
            state.sidebarButton.navright = {display: 'none'};
            state.sidebarButton.navleft = {display: 'block'};
            state.sidebarButton.pageSidebar = {'margin-left': '0'};
        } else {
            // pretend to be closed
            state.sidebarButton.state = "closed";
            state.sidebarButton.navright = {display: 'block'};
            state.sidebarButton.navleft = {display: 'none'};
            state.sidebarButton.pageSidebar = {'margin-left': '-40vw'};
        }
    }
  },
  actions: {

  },
  getters: {
    tongledButton: state => state.tongledButton,
    sidebarButton: state => state.sidebarButton,
  }
})
