const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    devServer: {
        proxy: {
            '/': 'http://localhost:61001',
            changeOrigin: true,
        },
        contentBase: path.join(__dirname, '/src/index.js'),
        port: 9000
    },
    output: {
        filename: 'build.js',
        path: path.join(__dirname, 'dist/')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/, /tmp/],
            loader: 'babel-loader',
            options: {
                "presets": [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ],
                "plugins": [
                    "@babel/plugin-proposal-class-properties"
                ]
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader','sass-loader']
        },

        {
            test: /\.(jpg|png|svg|ttf|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 25000,
            },
        }]
    },
    plugins: [
        new HWP(
            { template: path.join(__dirname, '/src/index.html') }
        )
    ]
}