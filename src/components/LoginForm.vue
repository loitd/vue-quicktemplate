<template>
    <b-container fluid>
        <b-row d-flex class="justify-content-center align-items-center">
            <b-col sm="6" md="4">
                <b-form>
                    <b-card class="text-center">
                        <b-card-body d-flex>
                            <!--  -->
                            <b-card-title><font-awesome-icon :icon="['fas', 'users']" /></b-card-title>
                            <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title> -->
                            <b-form-group id="fieldset1" description="" label="" label-for="vqtLoginFormEmail"
                                :invalid-feedback="invalidEmailFeedback" :valid-feedback="validFeedback" :state="emailState">
                                <b-form-input id="vqtLoginFormEmail" type="email" required :state="emailState" v-model="email" trim placeholder="Enter email" />
                            </b-form-group>
                            <!--  -->
                            <!-- <label for="vqtLoginFormPassword">Password</label> -->
                            <b-form-group id="fieldset2" description="" label="" label-for="vqtLoginFormPassword"
                                :invalid-feedback="invalidPasswordFeedback" :valid-feedback="validFeedback" :state="passwordState">
                                <b-form-input id="vqtLoginFormPassword" type="password" required :state="passwordState" v-model="password" placeholder="Enter password" />
                            </b-form-group>
                            <b-button type="submit" variant="success">Login</b-button>
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
    name: "LoginForm",
    computed: {
      emailState() {
        // return this.email.length >= 4 ? true : false
      },
      passwordState() {
        // return this.password.length >= 4 ? true : false
      },
      invalidEmailFeedback() {
        // if (this.email.length > 4) {
        //   return ''
        // } else if (this.email.length > 0) {
        //   return 'Enter at least 4 characters'
        // } 
      },
      invalidPasswordFeedback() {
        // if (this.password.length > 4) {
        //   return ''
        // } else if (this.password.length > 0) {
        //   return 'Enter at least 4 characters'
        // } 
      },
      validFeedback() {
        // return this.state === true ? 'Thank you' : ''
      }
    },
    data() {
      return {
        email: '',
        password: '',
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
