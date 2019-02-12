<template>
<!-- This is the template for home page -->
<b-container fluid class="page" id="page-wrapper">
  <Navbar title="VQT" isSidebar="yes"/>
  <b-row id="page-home">
    <b-col id="page-sidebar" v-bind:style="this.$store.getters.sidebarButton.pageSidebar">
      <Sidebar />
    </b-col>
    <b-col id="page-content">
    </b-col>
  </b-row>
</b-container>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'home',
  components: {
    Navbar, 
    Sidebar,
  }
}
</script>

<style lang="scss" scoped>
// Import component styles
// @ is an alias to /src
// Splitted to a scss file mean packed, you can make any change here
@import "@/assets/scss/home.scss";
</style>

