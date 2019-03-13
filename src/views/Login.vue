/* eslint-disable */
<template>
    <div class="vqtLoginPage wrapper">
        <div class="content">
            <!-- <LoginForm /> -->
            <SocialLoginForm />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import LoginForm from "@/components/LoginForm.vue";
import SocialLoginForm from "@/components/SocialLoginForm.vue";

// 
// console.log("We got token: ", Vue.$router.query.access_token);

export default {
    name: "login",
    components: {
        // LoginForm,
        SocialLoginForm,
    }
}
</script>

<style lang="scss" scoped>
    .vqtLoginPage .content {
        padding-top: 12vh;
    }
</style>
