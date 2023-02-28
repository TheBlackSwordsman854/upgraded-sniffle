const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/main.ts"),
  },
  output: {
    publicPath: '/',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", ".js", ".vue", ".css", ".scss", ".sass"],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        include: path.resolve(__dirname, "../src"),
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "tsx",
              target: "es2015",
            },
          },
        ],
      },
      {
        test: /\.vue$/i,
        include: path.resolve(__dirname, "../src"),
        loader: "vue-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, "../src"),
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve(__dirname, "../src"),
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false,
    }),
  ],
};
