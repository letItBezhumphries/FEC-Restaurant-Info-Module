const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/client/Components/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        exclude: [
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/__mocks__"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/__tests__"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/views"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/db.js"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/rest_test.json"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/server.js")
        ],
        type: "javascript/auto",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/__mocks__"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/__tests__"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/views"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/db.js"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/rest_test.json"),
          path.resolve(__dirname, "/Users/io/Code/GitHub/Restaurant_details/server.js")
        ],
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
                options: {
                }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: function () {
                  return [
                    require("precss"),
                    require("autoprefixer")
                  ];
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                  implementation: require("node-sass"),
              }
            }
        ]
      },
      {
        test: /\.(png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
            }
        }]
      },
      {
        test: /\.(eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                outputPath: "fonts/"
            }
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./src/index.html",
      excludeChunks: [ 'server' ]
    }),
  ],
};
