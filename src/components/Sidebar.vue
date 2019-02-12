<template>
    <!-- Sidebar -->
    <b-list-group id="sidebar-wrapper">
      <div class="list-group list-group-flush">
        <b-list-group-item to="#">Menu 1</b-list-group-item>
        <b-list-group-item to="#">Menu 2</b-list-group-item>
        <b-list-group-item>Menu 3</b-list-group-item>
        <b-list-group-item>Menu 4</b-list-group-item>
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
