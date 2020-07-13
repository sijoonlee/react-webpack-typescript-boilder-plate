var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : { app: './src/index.tsx'},

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".ts", ".tsx"]
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: '[name].js'
    },
    module : {
        rules : [
            { test: /\.tsx?$/, exclude: /node_modules/, use: [ "ts-loader" ] },
            { test: /\.(png|jpg)$/, use: ['file-loader']},
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]},
            { test : /\.(js|jsx)$/, 
                use: { 
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            }, 
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : './src/index.html'
        })
    ]

}