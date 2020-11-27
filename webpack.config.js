const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV ?? 'development',
  
  output: {
    filename: 'main.js',
    path: __dirname + '/public',
    libraryTarget: 'var',
    library: 'ecolier'
  },

  resolve: {
    fallback: { path: require.resolve("path-browserify"), fs: false }
  },

  plugins: [
    new webpack.ProgressPlugin(),
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
            loader: "style-loader"
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