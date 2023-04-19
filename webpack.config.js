//IMPOER : COMMON JS
const path = require('path');

module.exports = {
    mode : "production",
    entry : "./src/index.js",
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
    },
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
};