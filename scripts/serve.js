
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../webpack.config.js");
var watchConfig = Object.create(webpackConfig);

var watchCompiler = webpack(watchConfig);
// Start a webpack-dev-server
var server = new WebpackDevServer(watchCompiler, {
	publicPath: watchConfig.output.publicPath,
	// hot: true,
	quiet: false,
	noInfo: false,
	stats: {
		colors: true
	}
});

server.listen(8090, "localhost", function(err) {
	if (err) throw new Error("webpack-dev-server", err);
	console.log("[webpack-dev-server]", "http://localhost:8090/webpack-dev-server/index.html");
});

var express = require("express");
var path = require("path");

var app = express();
// app.use(express.static("examples"));
app.use(express.static(path.join(__dirname, "..", "node_modules")));
app.use(express.static(path.join(__dirname, "..")));
app.use(express.static(path.join(__dirname, "..", "node_modules", "react-stockcharts", "docs")));
app.listen(4000);