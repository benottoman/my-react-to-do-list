var webpack = require('webpack');

module.exports = {
    devtool: 'inline-sourcemap',                                // source map allowing us to see the actual js files  (only used for development)
    entry: [
    	'webpack-hot-middleware/client',
    	'./client/client.js'
   	],
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
            	test: /\.js$/,                                  
                loader: 'babel-loader',
                exclude: /node_modules/,                        
                query: {                                        // same as setting up a babel.rc file
                    presets: ['react', 'es2015', 'react-hmre']	// tells the babel-loader what to do
                }
            }
        ]
    },
    plugins: [
    	new webpack.optimize.OccurrenceOrderPlugin(),
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin()
    ]
}


