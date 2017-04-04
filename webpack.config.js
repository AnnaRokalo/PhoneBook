let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry:{
    main:  './src/index.js'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // The backup style loader
          'css?sourceMap!sass?sourceMap'
        )
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style/style.css',{
      allChunks: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
