const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'public/app/app.js'),
  dist: path.join(__dirname, 'dist')
}

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    app: PATHS.src
  },
  output: {
    path: PATHS.dist, 
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
	  loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
	}
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
	use: ['style-loader', 'css-loader']
      }
    ]
  }
};
