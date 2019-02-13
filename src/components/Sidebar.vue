<template>
    <!-- Sidebar -->
    <b-list-group id="sidebar-wrapper">
      <div class="list-group list-group-flush">
        <!-- So, if we had <router-link to="/foo"> and <router-link to="/foo/bar">, both components would get the router-link-active class when the path is /foo/bar. 
        Using the same example, if we had <router-link to="/foo"> and <router-link to="/foo/bar">, 
        the router-link-exact-activeclass would only be applied to <router-link to="/foo/bar"> when the path is /foo/bar
        This may not be something that we want, so we can use the exact prop like so: <router-link to="/" exact>. 
        Now the component will only get the active class applied when it is an exact match at /.-->
        <b-list-group-item to="#menu1">Menu 1</b-list-group-item>
        <b-list-group-item to="#menu2">Menu 2</b-list-group-item>
        <b-list-group-item to="#menu3">Menu 3</b-list-group-item>
        <b-list-group-item to="#menu4">Menu 4</b-list-group-item>
      </div>
    </b-list-group>
    <!-- /#sidebar-wrapper -->
</template>

<script>
export default {
    name: 'Sidebar',
    components: {},
    props: {
    }
}
</script>

<style lang="scss" scoped>
// Import component styles
// @ is an alias to /src
// Splitted to a scss file mean packed, you can make any change here
@import "@/assets/scss/components/sidebar.scss";
</style>
