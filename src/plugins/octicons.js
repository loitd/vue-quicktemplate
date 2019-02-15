import Vue from "vue";
import Octicon from "vue-octicons/src/components/Octicon.vue";

// Pick one way betweem the 2 following ways

// only import the icons you use to reduce bundle size
// import 'vue-octicon/icons/repo'

// or import all icons if you don't care about bundle size
Vue.component("octicon", Octicon);
