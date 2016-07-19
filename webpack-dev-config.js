module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        src: './src/index.js'
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/public/'
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
    }
}
