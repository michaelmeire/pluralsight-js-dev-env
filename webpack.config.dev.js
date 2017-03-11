import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map', // the different options make a tradeoff between compilation speed versus quality source maps, see http://webpack.github.io/docs/configuration.html#devtool
  noInfo: false,
  entry: [ // the entry points of the application. This is also the place to inject middleware for hot reloading
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', // can be 'node', 'electron', ...
  output: { // this does not actually write files, but we need to simulate the physical file's existence
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugings: [], // hot reloading, catching errors, linting styles
  module: { // tell webpack the file types that we want it to handle
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
