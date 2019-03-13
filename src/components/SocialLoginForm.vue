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
                                <b-button type="submit" variant="danger" @click="ggSignIn"  style="min-width: 15rem;">
                                    <font-awesome-icon :icon="['fab', 'google']" class="mr-1"/>
                                    Continue with Google
                                </b-button>
                            </b-form-group>
                            <!-- Github login button -->
                            <b-form-group>
                                <b-button type="submit" variant="primary" @click="fbSignIn" style="min-width: 15rem;">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="mr-1"/>
                                    Continue with Facebook
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
import Vue from "vue";
// console.log("This is this outside export: "+this); //--> will be undefined
export default {
    name: "SocialLoginForm",
    data() {
      return {
        //   
      }
    },
    methods: {
        ggSignIn: function (event) {
            // Prevent default action
            event.preventDefault()
            // console.log("Begin google authentication!");
            Vue.allAuth().google().init()
            // console.log("This is this before calling allAuth(): ");
            // console.log(this); //--> at this time this is a Vue instance
            // Assign that for accessing Vue object inside Vue.allAuth()
            let that = this
            Vue.allAuth().google().signIn(function (googleUser) {
                // console.log("This is googleUser in SocialLoginForm: "+googleUser);
                Vue.allAuth().google().printInfo() //just to check what you received
                // console.log("This is this in SocialLoginForm: ");
                // console.log(this); //--> at this time, this is undefined, that will be a Vue instance
                that.$router.push("/")
            }, function (error) {
                console.log("Something went wrong!");
                console.log(error);
                // Vue.allAuth().printInfo();
                // console.log(that.$router);
            })
        },
        signOut: function (event) {
            event.preventDefault()
            console.log("Begin google sign out")
            Vue.googleAuth().signOut(function(){
                //when sign out ok
            }, function(error){
                //when sign out fails
            })
        },
        fbSignIn: function(event){
            event.preventDefault();
            Vue.allAuth().facebook().signIn(function(facebookUser){
                console.log(facebookUser)
            }, function(error){
                console.log("Something went wrong!");
                console.log(error);
            })
        }
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
