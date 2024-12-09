const { defineConfig } = require("@vue/cli-service");
const MacleConfigCreatorPlugin = require("./MacleConfigCreatorPlugin");
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: "./",
  outputDir: "dist",
  configureWebpack: {
    plugins: [new MacleConfigCreatorPlugin("index.html")],
  },
});
