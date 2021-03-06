var webpack = require('webpack');
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: {
	    app: SRC_DIR + "/app/index.js",
	    css: SRC_DIR + "/app/css/styles.scss"
	},
    output: {
        path: DIST_DIR + "/app",
        filename: "[name].js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.(s?)css$/,
                include: SRC_DIR,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    }
};

module.exports = config;