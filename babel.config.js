module.exports = {
  // presets: [
  //   [
  //     "@vue/app",
  //     {
  //       useBuiltIns: "entry"
  //     }
  //   ]
  // ]
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import"
  ]
};
