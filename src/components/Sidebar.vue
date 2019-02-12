<template>
    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start Bootstrap </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Menu1</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Menu2</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Menu3</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Menu4</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
      </div>
    </div>
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
