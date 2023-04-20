//IMPOER : COMMON JS
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode : "production",
    entry : {
        main : "./src/index.js",
        vendor : './src/vendor.js'
    },
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : '[name].[hash].js',
        assetModuleFilename: 'images/[hash][ext][query]', //แยก path รูปเข้า images/
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