<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js Quick Template App" /> -->
    <BigTable />
    <!-- <b-container fluid>
      <b-row>
        <b-col sm="4" md="3" id="pageSidebar">
          <Sidebar />
        </b-col>
        <b-col sm="8" md="9">
          <Navbar />
          <div id="pageContent">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis vel, at ducimus repudiandae asperiores inventore reprehenderit, beatae modi voluptates ut quisquam, dolor dolore eos. Voluptas perspiciatis consectetur nostrum quod deleniti.</p>
          </div>
        </b-col>
      </b-row>  
    </b-container> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import BigTable from "@/components/BigTable.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Sidebar,
    BigTable,
  }
};
</script>

<style lang="scss" scoped>
  #pageSidebar {
    border-right: 1px solid lightgrey;
  }

  #pageContent {
    background-color: aquamarine;
  }
</style>

