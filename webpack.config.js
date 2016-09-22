'use strict';

var path = require( 'path' )

module.exports = {
  entry: path.join( __dirname, 'src/scramble.js' ),
  output: {
    path: path.join( __dirname, 'public/javascripts' ),
    filename: 'scramble.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        'presets': ['es2015']
      }
    }]
  }
}