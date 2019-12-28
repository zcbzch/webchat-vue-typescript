const path = require("path");
const sourceMap = process.env.NODE_ENV === "development";

module.exports = {
  publicPath: "/demo",
  chainWebpack: () => {},
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        alias: {
          vue$: "vue/dist/vue.js",
          "@": path.resolve(__dirname, "./src"),
          "@c": path.resolve(__dirname, "./src/components"),
          utils: path.resolve(__dirname, "./src/utils"),
          less: path.resolve(__dirname, "./src/less"),
          views: path.resolve(__dirname, "./src/views"),
          assets: path.resolve(__dirname, "./src/assets"),
          com: path.resolve(__dirname, "./src/components"),
          store: path.resolve(__dirname, "./src/store"),
          mixins: path.resolve(__dirname, "./src/mixins")
        }
      }
    });
  },
  productionSourceMap: sourceMap,
  devServer: {
    // open: process.platform === "darwin",
    host: "localhost",
    port: 8080, //8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 设置代理
      // proxy all requests starting with /api to jsonplaceholder
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    before: app => {}
  },
}