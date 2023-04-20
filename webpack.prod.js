const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Import Other Module
const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");

// Import Our Module
const commonConfig = require("./webpack.config");

const devConfig = merge(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    assetModuleFilename: "image/[hash][ext][query]",
  },

  // Loader
  module: {
    rules: [
      {
        test: /\.s?css$/, // เฉพาะกับไฟล์ css
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // อนุญาติให้ใช้ import ไฟล์ css
          "sass-loader",
        ],
      },
    ],
  },

  // plugin
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizer(),
      new HtmlWebpackPlugin({
        template: "./src/template/index.html",
        filename: "index.min.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
});

module.exports = devConfig;