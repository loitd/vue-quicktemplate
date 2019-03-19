<template>
  <div class="tables">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js Quick Template App" /> -->
  
    <b-container fluid>
      <b-row>
        <b-col sm="4" md="3" id="pageSidebar">
          <Sidebar />
        </b-col>
        <b-col sm="8" md="9">
          <Navbar />
          <div id="pageContent">
            <BigTable />
          </div>
          <Footer />
        </b-col>
      </b-row>  
    </b-container>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import BigTable from "@/components/BigTable.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Sidebar,
    BigTable,
    Footer,
  }
};
</script>

<style lang="scss" scoped>
  #pageSidebar {
    border-right: 1px solid lightgrey;
  }

  #pageContent {
    // Push footer / let footer stay at the bottom by define content height
    min-height: calc(100vh - 128px);
  }
</style>

