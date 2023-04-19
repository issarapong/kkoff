//IMPOER : COMMON JS
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode : "production",
    entry : "./src/index.js",
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.[hash].js',
    },
    module: {
        rules: [
         
            {
                test: /\.html$/i,
                use: "html-loader",
              },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader', // append <link > in html
                    'css-loader', // allow import '.index.css'
                    'sass-loader'
                ],
            },
        ],
    },
    //Plugin
    
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: './src/template/index.html',
    }),
   
],
};