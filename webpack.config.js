const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ejs = require('ejs');
const { dirname } = require('path');

module.exports = {
  mode: process.env.NODE_ENV ?? 'development',
  
  entry: {
    landing: './src/page/landing/landing.js',
    product: './src/page/product/product.js',
    developer: './src/page/developer/developer.js',
    organization: './src/page/organization/organization.js'
  },
  
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
    publicPath: ''
  },
  
  resolve: {
    alias: {
      'component': path.join(__dirname, 'src', 'component'),
      'common': path.join(__dirname, 'src', 'common'),
    },
    fallback: { path: require.resolve("path-browserify"), fs: false }
  },
  
  module: {
    rules: [
      {
        test: /\.jpe?g$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
            preprocessor: (content, loaderContext) => {
              return ejs.render(content)
            }
        }
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
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['landing'],
      filename: 'landing.ejs',
      template: './src/page/landing/index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['product'],
      filename: 'product.ejs',
      template: './src/page/product/index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['developer'],
      filename: 'developer.ejs',
      template: './src/page/developer/index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['organization'],
      filename: 'organization.ejs',
      template: './src/page/organization/index.html'
    })
  ],
      
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