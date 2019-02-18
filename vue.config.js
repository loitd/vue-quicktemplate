// Create a new file in root directory of your project and name it ‘vue.config.js’. Why this name? Check out here why.
module.exports = {
  pwa: {
    name: "Vue Quick Template"
  },
  // NOTE: in publicPathinside the <> chars you have to put the name of your project. Specifically read here why.
  // https://cli.vuejs.org/config/#publicpath
  publicPath: '<vue-quick-template>',
};
