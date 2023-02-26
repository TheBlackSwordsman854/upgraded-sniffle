const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "../src/main.ts"),
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src"),
        },
        extensions: ['.tsx', '.ts', '.js', ".vue"],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                include: path.resolve(__dirname, "../src"),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'tsx',
                            target: 'es2015',
                        },
                    }
                ]
            },
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
        })
    ]
}