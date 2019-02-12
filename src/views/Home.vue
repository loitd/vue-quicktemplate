<template>
<!-- This is the template for home page -->
<b-container fluid class="page">
  <b-row class="page-home">
    <b-col md="1" class="page-sidebar">
      <Sidebar />
    </b-col>
    <b-col md="11" class="page-content">
      <Navbar title="VQT"/>
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

<style lang="scss">

.page-sidebar, 
.page-content {
  padding: 0;
}
</style>

