import Vue from "vue";
// In production
// import VueAllAuth from "vue-all-auth";
// In dev
import VueAllAuth from "@/modules/vue-all-auth";

Vue.use(VueAllAuth, { 
    google: {
        // keys for google
        client_id: "1027003686601-70tu7n41d2h3q9t3icuahra8iorte3g5.apps.googleusercontent.com", 
        scope: "profile email",
    },
    github: {
        // keys for github
    }, 
    facebook: {
        // keys for fb
        appId: "",
        cookie: true,
        xfbml: true,
        version: "v3.2",
    },
    twitter: {
        // keys for twitter
    }
    
});
Vue.allAuth().google().init();
Vue.allAuth().facebook().init();