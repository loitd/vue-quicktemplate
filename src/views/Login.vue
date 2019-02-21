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
import LoginForm from "@/components/LoginForm.vue";
import SocialLoginForm from "@/components/SocialLoginForm.vue";

export default {
    name: "login",
    components: {
        LoginForm,
        SocialLoginForm,
    }
}
</script>

<style lang="scss" scoped>
    .vqtLoginPage .content {
        padding-top: 12vh;
    }
</style>
