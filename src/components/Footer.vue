<template>
    <footer class="vqtFooter">
        <b-container fluid class="d-flex align-items-center vqtFooterContainer">
            <div class="copyright ml-auto">
                Coded with <span><font-awesome-icon :icon="['fas', 'heart']" class="fa-pulse" /></span> by <a href="https://github.com/loitd" target="_">Leo Tran</a>.
                Designed based on <a href="https://github.com/loitd/vue-quick-template" target="_">Vue Quick Template</a>.
                Licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_">CC BY-NC-SA 4.0</a>.
            </div>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style lang="scss" scoped>
.vqtFooter {
    display: block;
    // background-color: aqua;
    border-top: 1px solid lightgrey;
    width: 100%;
    height: 3.75rem;
}
.vqtFooterContainer {
    height: 100%;
}
.vqtFooterContainer .fa-heart {
    color: red;
}
.vqtFooterContainer .copyright {
    font-size: 0.775rem;
}
</style>
