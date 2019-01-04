const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// Constants
const MODE = process.env.NODE_ENV || 'development'
const DEV = MODE == 'development'

const SRC = path.resolve(__dirname, 'src')
const DIST = path.resolve(__dirname, 'dist')

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(SRC, 'index.html')
  }),
  new CleanWebpackPlugin([DIST]),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: DEV ? '[name].css' : '[name].[hash].css',
    chunkFilename: DEV ? '[id].css' : '[id].[hash].css'
  })
]

module.exports = {
  mode: MODE,
  devtool: DEV ? 'inline-source-map' : 'source-map',
  entry: path.join(SRC, 'main.tsx'),
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    path: DIST
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  node: {
    process: false,
    Buffer: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: SRC,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: DEV ? 'style-loader/url' : MiniCssExtractPlugin.loader },
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      })
    ]
  },
  plugins,
  devServer: {
    watchContentBase: true,
    contentBase: SRC
  }
}
