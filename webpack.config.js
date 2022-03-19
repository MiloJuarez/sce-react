const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/images/[hash][ext][query]",
        publicPath: "/",
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@components": "src/components/",
            "@containers": "src/containers/",
            "@pages": "src/pages/",
            "@styles": "src/styles/",
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                },
            },
            {
                test: /\.png|jpg|svg|gif$/,
                type: "asset",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3005,
        compress: true,
        historyApiFallback: true,
    },
};
