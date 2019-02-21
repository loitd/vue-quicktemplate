<template>
    <b-container fluid>
        <b-row d-flex class="justify-content-center align-items-center">
            <b-col sm="6" md="4">
                <b-form>
                    <b-card class="text-center">
                        <b-card-body d-flex>
                            <!--  -->
                            <b-card-title><font-awesome-icon :icon="['fas', 'users']" class="fa-2x"/></b-card-title>
                            <!-- Google login button -->
                            <b-form-group>
                                <b-button type="submit" variant="danger" @click="signIn"  style="min-width: 15rem;">
                                    <font-awesome-icon :icon="['fab', 'google']" class="mr-1"/>
                                    Continue with Google
                                </b-button>
                            </b-form-group>
                            <!-- Github login button -->
                            <b-form-group>
                                <b-button type="submit" variant="" @click="signIn" style="min-width: 15rem;">
                                    <font-awesome-icon :icon="['fab', 'github']" class="mr-1"/>
                                    Continue with Github
                                </b-button>
                            </b-form-group>
                            <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                        </b-card-body>
                    </b-card>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
/**
 * ----------------------------------------------------
 *  All component javascript will be placed here
 * ----------------------------------------------------
 */
// https://github.com/TinyNova/vue-google-oauth
import Vue from "vue";
export default {
    name: "SocialLoginForm",
    // client ID: 504355047978-497p9005hhblmq9opgl7doc96hbjf16j.apps.googleusercontent.com
    // client secret: IYI3-6iUABbR_rq1YZuTZElB
    data() {
      return {
        
      }
    },
    methods: {
        signIn: function (event) {
            event.preventDefault();
            console.log("Begin google authentication!");
            Vue.googleAuth().signIn(function (authorizationCode) {
                // things to do when sign-in succeeds
                // You can send the authorizationCode to your backend server for further processing, 
                // Sample response: 4/-ABYX3-wfXTznLcS6prVHU5mqYbCsTvAbGKKtxw00k559VMVwLIC1Pt_L7Mmpt24bec3bJXpLH2MY1Eoh98Eg6g
                console.log("Google authentication successfully!");
                console.log(authorizationCode); 
                // redirect to the dashboard
                this.$router.push({ name: 'home' });

            }, function (error) {
                // things to do when sign-in fails
                // Sample response: {error: "popup_closed_by_user"}
                console.log("Something went wrong!");
                console.log(error);
            });
        },
    }
}
</script>

<style lang="scss" scoped>
/**
 * ----------------------------------------------------
 *  Styling? It's time to show your designing skills!
 * ----------------------------------------------------
 */

</style>
