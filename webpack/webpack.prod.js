const common = require('./webpack.common.js'),
  merge = require('webpack-merge'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const src = path.join(__dirname, '../src');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: path.join(src, 'index.jsx')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][hash:8].[ext]'
            },
          },
          {
            loader: 'image-webpack-loader'
          },
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        }
      })
    ]
  },

  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new HtmlWebpackPlugin({
      title: 'Test',
      hash: true,
      filename: 'index.html',
      template: './public/index.html'
    })
  ],

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'components/[name].js'
  }

});
