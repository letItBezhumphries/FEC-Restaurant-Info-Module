const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    publicPath: "http://localhost:8080/dist",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: true
  },
  plugins: new webpack.HotModuleReplacementPlugin(),
});
