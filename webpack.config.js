const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  
     module: {
        rules:[
            {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
            test:/\.html$/i,
            use:['html-loader'],  
            },
            {
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset/resource',
            }
        ],
    }, 

    plugins: [
        new MiniCssExtractPlugin({filename:'[name].[hash].css'}),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new CleanWebpackPlugin(),


    ],

    optimization: {
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
    },


};

