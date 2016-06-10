var express = require('express');

// Contains utilities for handling and transforming file paths
var path = require('path');

// Used for hot module reloading
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');



var app = express();


// Hot module reloading
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


// Server static files from /dist
app.use(express.static('./dist'));

// Redirect root requests to /client/index.html
app.use('/', function(req, res){
	res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(error){
	if (error) throw error;
	console.log("Express server listening on port ", port);
});




// To run the server
// node server/server.js		OR

// Monitor for any changes in your node.js application and automatically restart the server - perfect for development
// npm run server 				(script set in package.json)
