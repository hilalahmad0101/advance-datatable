const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-datatables.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MyDatatables',
    libraryTarget: 'umd',
    globalObject: 'this',  // Ensure compatibility with different environments
  },
  module: {
    rules: [
      {
        test: /\.css$/i, 
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
