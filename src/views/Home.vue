<template>
  <b-row class="home">
    <b-col sm="3">
      <Sidebar />
    </b-col>
    <b-col sm="9" class="page-content">
      <Navbar title="VQT"/>
    </b-col>
  </b-row>
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
