const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
  entry: __dirname + '/app.jsx',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
    })
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}