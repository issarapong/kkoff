
module.exports = {
    entry : {
        main : "./src/index.js",
        vendor : './src/vendor.js'
    },
//loader
    module: {
        rules: [
         
            {
                test: /\.html$/i,
                use: "html-loader",
              },
           
        ],
    },

};