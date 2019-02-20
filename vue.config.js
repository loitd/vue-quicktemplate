// Create a new file in root directory of your project and name it ‘vue.config.js’. Why this name? Check out here why.
module.exports = {
  pwa: {
    name: "Vue Quick Template"
  },
  // NOTE: in publicPathinside the <> chars you have to put the name of your project. Specifically read here why.
  // https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.NODE_ENV === "production" ? "/vue-quick-template/" : "/",
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  // The internal webpack config is maintained using webpack-chain. 
  // The library provides an abstraction over the raw webpack config, with the ability to define named loader rules and named plugins, 
  // and later "tap" into those rules and modify their options.
  configureWebpack: {
    // module: {
    //   rules: [
    //     { test: /\.js$/, 
    //       loaders: ["babel-loader"], 
    //       exclude: /node_modules(?![\\/]vue-octicons[\\/])/ 
    //     },
    //   ]
    // }
  }
};
