
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
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
