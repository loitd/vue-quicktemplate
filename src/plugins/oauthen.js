import Vue from "vue";
import GoogleAuth from "vue-google-oauth";

Vue.use(GoogleAuth, { client_id: "504355047978-497p9005hhblmq9opgl7doc96hbjf16j.apps.googleusercontent.com" } );
Vue.googleAuth().load()