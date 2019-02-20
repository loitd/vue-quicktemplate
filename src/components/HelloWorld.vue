<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://github.com/loitd/vue-quick-template" target="_blank" rel="noopener"
        >vue-quick-template documentation</a
      >.
    </p>
    <h3>Demos</h3>
    <ul>
      <li>
        <a
          href="https://loitd.github.io/vue-quick-template"
          target="_blank"
          rel="noopener"
          >Github</a
        >
      </li>
      <li>
        <a
          href="https://vqt.surge.sh"
          target="_blank"
          rel="noopener"
          >Surge</a
        >
      </li>
    </ul>
    
  </div>
</template>

<script>
// console.log("really heavy test");
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    test: function() {
      // console.log("inside function");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
