const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './build/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './build/index.html', // 模板地址
      filename: 'index.html'       // 打包后的文件名

    }) 
  ]
}