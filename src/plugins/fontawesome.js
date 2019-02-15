import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";

// Import all components from fontawesome makes the vendor big
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Only import using icons
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

// Import all components from fontawesome makes the vendor big
// library.add(fas)

// Only import using icons
library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);
