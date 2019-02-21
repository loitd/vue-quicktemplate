import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";

// Import all components from fontawesome makes the vendor big
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Import all components from fontawesome makes the vendor big
// library.add(fas)

// Only import using icons
import {faUser, faSearch, faChalkboard, faTable,
    faMapMarkerAlt, faBell,
    faCoffee, faSignOutAlt, faSignInAlt,
    faUsers, faExpandArrowsAlt,
    faAngleDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faVaadin, faTypo3, faNutritionix, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

// Only import using icons
library.add(faUser, faSearch, faVaadin, faChalkboard, 
    faTable, faTypo3, faNutritionix, faMapMarkerAlt, 
    faBell, faCoffee, faSignOutAlt, faSignInAlt, faUsers, faExpandArrowsAlt,
    faAngleDown, faHeart, faGoogle, faGithub);



Vue.component("font-awesome-icon", FontAwesomeIcon);
