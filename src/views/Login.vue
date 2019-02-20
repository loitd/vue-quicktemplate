<template>
    <div class="vqtLoginPage wrapper">
        <div class="content">
            <LoginForm />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";

export default {
    name: "login",
    components: {
        LoginForm,
    }
}
</script>

<style lang="scss" scoped>
    .vqtLoginPage .content {
        padding-top: 12vh;
    }
</style>
