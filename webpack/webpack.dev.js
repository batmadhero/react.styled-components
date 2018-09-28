const common = require('./webpack.common.js'),
  webpack = require('webpack'),
  merge = require('webpack-merge'),
  WebpackNotifierPlugin = require('webpack-notifier'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path');

const src = path.join(__dirname, '../src');

module.exports = merge(common, {
  mode: 'development',
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
              name: '[path][name]-[hash:8].[ext]'
            },
          },
        ]
      },
    ]
  },
  devServer: {
    contentBase: src,
    overlay: true,
    hot: true,
    inline: true,
    open: true,
    port: 9000
  },
  devtool: 'eval-source-map',
  plugins: [     
    new HtmlWebpackPlugin({
      title: 'Test',
      hash: false,
      filename: 'index.html',
      template: './public/index.html'
    }), 
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new WebpackNotifierPlugin({ title: 'Webpack' })
  ]
});
