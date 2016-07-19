var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: {
        src: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel'],
                query: {
                    presets: [
                        'babel-preset-es2015',
                        'babel-preset-stage-0',
                        'babel-preset-react'
                    ]
                }
            }
        ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
          compressor: {
              warnings: false
          }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        children: true,
        // (use all children of the chunk)
        async: true,
        // (create an async commons chunk)
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: JSON.stringify('production')
          }
      }),
    ]
};
