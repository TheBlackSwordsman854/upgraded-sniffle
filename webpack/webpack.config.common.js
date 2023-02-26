const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "../src/main.js"),
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                include: path.resolve(__dirname, "../src"),
                loader: "vue-loader",
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_OPTIONS_API__: false,
        }),
    ]
}