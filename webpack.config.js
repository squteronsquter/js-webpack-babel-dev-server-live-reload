module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    compress: true,
    hot: true,
    open: 'Google Chrome Canary'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};