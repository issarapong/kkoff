
//IMPORT:other module
const path = require('path');
const {merge} = require('webpack-merge');
//IMPOER : COMMON JS

const HtmlWebpackPlugin = require('html-webpack-plugin');


//IMPORT:our module
const commonConfig = require('./webpack.config');

//############################
const devConfig = merge(commonConfig, {
    mode: 'development',
   /* output : {
        path: path.resolve(__dirname, 'dist'),
        filename : '[name].[hash].js',
        assetModuleFilename: 'images/[hash][ext][query]', //แยก path รูปเข้า images/
    }, */
    //loader
    module: {
        rules: [
         
      
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
        new HtmlWebpackPlugin({
        template: './src/template/index.html',
    }),
   
],
})
    


module.exports = devConfig;