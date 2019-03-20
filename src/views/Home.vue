<template>
  <div class="home">
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
            <div class="row">
              <div class="col-sm-4 col-md-3"><ShortCard/></div>
              <div class="col-sm-4 col-md-3"><ShortCard/></div>
              <div class="col-sm-4 col-md-3"><ShortCard/></div>
              <div class="col-sm-4 col-md-3"><ShortCard/></div>
            </div>
            <LongCard cid="ServiceCard1" ctitle="MGB"/>
            <LongCard cid="ServiceCard2" ctitle="MGP"/>
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
import LongCard from "@/components/LongCard.vue";
import ShortCard from "@/components/ShortCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Sidebar,
    ShortCard,
    LongCard,
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
    padding-top: 10px;
  }
</style>

