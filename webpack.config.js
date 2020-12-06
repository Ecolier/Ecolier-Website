const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV ?? 'development',

  entry: {
    landing: './src/page/landing/landing.js',
    product: './src/page/product/product.js'
  },
  
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },

  resolve: {
    alias: {
      'component': path.resolve(__dirname, 'src', 'component')
    },
    fallback: { path: require.resolve("path-browserify"), fs: false }
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['landing'],
      filename: 'landing.ejs',
      template: './src/page/landing/index.ejs'
    }),
    new HtmlWebpackPlugin({
      chunks: ['product'],
      filename: 'product.ejs',
      template: './src/page/product/index.ejs'
    })
  ],
  
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        loader: 'html-loader'
      },
      { 
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      }, 
      {
        test: /.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, 
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }]
        }]
      },
      
      optimization: {
        minimizer: [new TerserPlugin()],
        
        splitChunks: {
          cacheGroups: {
            vendors: {
              priority: -10,
              test: /[\\/]node_modules[\\/]/
            }
          },
          
          chunks: 'async',
          minChunks: 1,
          minSize: 30000,
          name: false
        }
      }
    }