var webpack = require('webpack');

module.exports = {
  entry: [
    // './node_modules/jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  // externals: {
  //   jquery: 'jQuery'
  // },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      // "window.jQuery": "jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
    },
    extensions: ['','.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      // { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" }
    ]
  }
};
