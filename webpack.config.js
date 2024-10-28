const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },

    target: "web",
    devServer: {
        port: 3000,

        static: {
            directory: path.join(__dirname, "public"),
        },

        open: true,

        hot: true,

        liveReload: true,
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
        ],
    },
};
