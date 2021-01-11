```
场景：[前端工程搭建Babel7+](/pages/solution/scene?id=前端工程搭建-babel7+)  require动态变量[DETAIL/WEBPACK_REQUIRE_01]



[h3|webpack4] [DETAIL/WEBPACK_ABOUT]

|demo> yarn init -y
|demo> yarn add webpack webpack-cli -D
  
[cf b3| 零配置 ] 默认值[DETAIL/WEBPACK_CONFIG_DEFAULT] Demo[DETAIL/WEBPACK_DEMO_01]

[cf b3| 配置文件 ] 默认：/webpack.config.js  命名：|demo> npx webpack --config webpack.rename.js 或 "scripts":{"build":"webpack --config webpack.rename.js"}

[cf b3| 配置 入口&出口 ] [CONFIG/-WEBPACK_CONFIG(BASE)]
{
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js', // Hash后缀: bundle.[hash:8].js
    path: path.resolve(__dirname, 'dist'), 
  }
}

[cf b3| 配置 去混淆模式 ] [CONFIG/-WEBPACK_CONFIG(MODE)]
{ 
  mode: 'development' 
}

[cf b3| 配置 资源类型支持 ]
{
  module: {
    rules: [
      .text [INFO2/WEBPACK_LOADER_RAW] [CONFIG/-WEBPACK_CONFIG(LOADER01)]
    ]
  }
}  

[cf b3| 配置 开发服务 ] 安装&启动[DETAIL/WEBPACK_DEV_SERVER]  [CONFIG/-WEBPACK_CONFIG(DEV_SERVER)]

[cf b3| 配置 代码优化 ]
{
  plugins: [
    HTML模板注入 [INFO2/WEBPACK_PLUGIN_HTML] [CONFIG/-WEBPACK_CONFIG(PLUGIN_HTML)] 
  ]
}


▉WEBPACK_DEV_SERVER▉
yarn add webpack-dev-server -D
以当前目录为静态目录(默认)：npx webpack-dev-server 或 "scripts":{"dev":"webpack-dev-server"}
指定目录：参考开发配置

▉
▉WEBPACK_ABOUT▉
可以做的事情：
代码转换 文件优化 代码分割 模块合并 自动刷新 代码校验 自动发布

webpack常见配置
webpack高级配置
webpack优化策略
ast抽象语法树
webpack中的Tapable
掌握webpack流程，手写webpack
手写webpack中常见的loader
手写webpack中常见的plugin
▉

▉WEBPACK_CONFIG_DEFAULT▉
webpack.config.js
{
  mode: 'production'
  entry: ./src/index.js
  output: {
    filename: main.js
    path: ./dist
  }
}
▉
▉-WEBPACK_CONFIG▉
/webpack.config.js

const ▀HtmlWebpackPlugin(PLUGIN_HTML)▀ = require('html-webpack-plugin') // yarn add html-webpack-plugin -D
let ▀path(BASE)▀ = require('path')

module.exports = {
  // 入口
  ▀entry: './src/index.js'(BASE)▀,                           // 相对路径
  
  // 出口
  ▀output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),           // 绝对路径
  }(BASE)▀,

  // 环境
  ▀mode: 'development'(MODE)▀, // 值：production/development/none

  ▀devServer: {
    port: 3000,             // 端口
    progress: true,         // 显示进度条
    contentBase: './build', // 重新指定服务目录
    compress: true,         // 压缩
  }(DEV_SERVER)▀,

  // 插件任务如：打包优化，资源管理，注入环境变量
  plugins: [
    ▀new HtmlWebpackPlugin({
      template: './src/index.html', // 模板地址 
      filename: 'index.html',       // 打包后的文件名
      // 压缩
      minify: {
        removeAttributeQuotes: true, // 删除属性双引号
        collapseWhitespace: true, // 折叠空行

      },
      // 给资源加HASH戳防缓存
      
    })(PLUGIN_HTML)▀ 
  ]

  // Loader 打包特定类型模块时 对其进行转换 Webpack默认能识别 JavaScript 和 JSON
  module: {
    rules: [
      ▀{ test: /\.txt$/, use: 'raw-loader' }(LOADER01)▀ 
    ]
  }
}
▉
▉WEBPACK_PLUGIN_HTML▉
为应用程序生成一个 HTML 文件，并自动注入所有生成的 bundle
-----
npm i html-webpack-plugin -D
const HtmlWebpackPlugin = require('html-webpack-plugin')
▉
▉WEBPACK_LOADER_RAW▉
场景一：import txt from 'file.txt';
场景二：<script>${ require('raw-loader!babel-loader!../node_modules/lib-flexible/flexible.js') }</script>
---------------------------------------
[s18|npm install --save-dev raw-loader]
---------------------------------------
[b9 cf|配置使用]
module: {
  rules: [
    {test: /\.txt$/, use: 'raw-loader'}
  ]
}
[b9 cf|命令使用]
webpack --module-bind 'txt=raw-loader'

[b9 cf|内联使用]
import txt from 'raw-loader!./file.txt';
▉

▉WEBPACK_REQUIRE_01▉
let test = './less/Test.css'
require(test);
//报错  Uncaught Error: Cannot find module "."

let test2 = 'Test'
require("./less/"+test2 + ".css");
//报错 Uncaught Error: Cannot find module "./less"

解决方案：
// 引入语言包
const langConf = lib.langCustom
const langFilesContext = require.context('static/lang', false, /\.json$/)
const messages = {}
for (let key in langConf.options) {
    let path = './' + key + '.json'
    messages[key] = langFilesContext(path)
}
const i18n = new VueI18n({
    locale: langConf.default, // 定义默认语言为中文
    messages
})
▉
▉WEBPACK_DEMO_01▉
[src[index.js, a.js]]

[cf bc|src/index.js]
  console.log('hello webpack')  
  let str = require('./a.js')
  console.log(str)
  
[cf bc|src/a.js]
  module.exports = 'ewan'


启动方式：
|demo> npx webpack 
|demo> node node_modules/webpack/bin/webpack.js
|demo> npm run build         // "scripts": {"build": "webpack"} 

/src/index.js > /dist/main.js
▉


```





















