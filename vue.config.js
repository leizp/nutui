// vue.config.js
module.exports = {
  productionSourceMap: process.env.NODE_ENV != "production",
  publicPath: "./",
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      //   prependData: {
      //     // @/ 是 src/ 的别名
      //     // 所以这里假设你有 `src/variables.sass` 这个文件
      //     // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      //     additionalData: `@import "~@/styles/variables.sass"`,
      //   },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        additionalData: `@import "~@/styles/variables.scss";`,
      },
    },
  },
  pages: {
    doc: {
      entry: "src/sites/doc/main.ts",
      template: "src/sites/doc/index.html",
      filename: "index.html",
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "NutUI",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "doc"],
    },
    mobile: {
      entry: "src/sites/mobile/main.ts",
      template: "src/sites/mobile/index.html",
      filename: "demo.html",
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "NutUI",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "mobile"],
    },
  },
  configureWebpack: {
    optimization: {
      minimize: process.env.NODE_ENV === "production",
      splitChunks: {
        automaticNameDelimiter: "_",
      },
    },
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
    }
  },
};