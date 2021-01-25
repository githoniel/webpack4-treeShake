const path = require('path');
 
module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  devtool: false,
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4096,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]'
              }
            }
          }
        }],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // }
    ],
  },
  output: {
   filename: 'main.js',
   filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: ['react']
};