module.exports = {
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  stats: {
    assets: true,
    builtAt: false,
    children: false,
    colors: true,
    errors: true,
    hash: false,
    errorDetails: true,
    modules: false,
    performance: true,
    timings: true,
    version: true,
    warnings: true,
  },
};
