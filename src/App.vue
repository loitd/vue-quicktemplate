// This file is the base template of the application. It consists of router-link(s) and a single router-view. 
// Once a link, the router-link, is clicked, the associated component loads into the router-view element.
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app, .dropdown-item {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // min-height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
