<template>
    <b-container id="sidebar-wrapper" fluid>
        <!-- Sidebar -->
        <b-list-group style="" id="sidebarmenu">
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
                <b-list-group-item to="#menu5">Menu 5</b-list-group-item>
                <!-- <b-list-group-item to="#menu6">Menu 6</b-list-group-item>
                <b-list-group-item to="#menu7">Menu 7</b-list-group-item>
                <b-list-group-item to="#menu8">Menu 8</b-list-group-item>
                <b-list-group-item to="#menu9">Menu 9</b-list-group-item>
                <b-list-group-item to="#menu10">Menu 10</b-list-group-item>
                <b-list-group-item to="#menu11">Menu 11</b-list-group-item> -->
            </div>
        </b-list-group>

        <b-media right-align vertical-align="center" id="sidebarabout">
            <!-- <b-img slot="aside" blank blank-color="#ccc" width="80" alt="placeholder" /> -->
            <h5 id="sidebarabouttitle">Vue Quick Template</h5>
            <em id="sidebaraboutdesc">
                All for quick and handy start with Vue. 
                <b-link href="https://github.com/loitd/vue-quicktemplate">Github</b-link> 
                - <b-link href="https://twitter.com/loitranduc/">Twitter</b-link>.
            </em>
            <p style="font-size: 1vh;">Version 201902131314.</p>
        </b-media>

        <!-- /#sidebar-wrapper -->
    </b-container>
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
