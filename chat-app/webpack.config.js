const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your main entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader for JavaScript files
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.css$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [/node_modules\/rsuite\/dist\/styles\/rsuite-default.css/],
      },
    ],
  },
};
