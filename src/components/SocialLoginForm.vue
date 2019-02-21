<template>
    <b-container fluid>
        <b-row d-flex class="justify-content-center align-items-center">
            <b-col sm="6" md="4">
                <b-form>
                    <b-card class="text-center">
                        <b-card-body d-flex>
                            <!--  -->
                            <b-card-title><font-awesome-icon :icon="['fas', 'users']" /></b-card-title>
                            <b-button type="submit" variant="success" :click="signIn">Continue with Google</b-button>
                            <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                        </b-card-body>
                    </b-card>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
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
            Vue.googleAuth().signIn(this.onSignInSuccess, this.onSignInError)
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
