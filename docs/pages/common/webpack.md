```
场景：[前端工程搭建Babel7+](/pages/solution/scene?id=前端工程搭建-babel7+)  require动态变量[DETAIL/WEBPACK_REQUIRE_01]

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

[h3|webpack] [DETAIL/WEBPACK_ABOUT]

|demo> yarn init -y
|demo> yarn add webpack webpack-cli -D

[src[index.js, a.js]]
[cf bc|src/index.js]
  console.log('hello webpack')  
  let str = require('./a.js')
  console.log(str)
  
[cf bc|src/a.js]
  module.exports = 'ewan'
  
  
[cf b3| 配置零 ] 默认值[DETAIL/WEBPACK_CONFIG_DEFAULT]
|demo> npx webpack [DETAIL/WEBPACK_RUN]
/src/index.js > /dist/main.js

[cf b3| 配置 去混淆模式 ] [CONFIG/WEBPACK_CONFIG(MODE)]
{
  mode: 'development'
}

[cf b3| 配置 入口&出口 ] [CONFIG/WEBPACK_CONFIG(BASE)]
{
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), 
  }
}

[cf b3| 配置 资源类型支持 ]
{
  module: {
    rules: [
      .text [CONFIG/WEBPACK_CONFIG(LOADER01)] [TARGET/WEBPACK_LOADER_RAW]
    ]
  }
}  

[cf b3| 配置 代码优化 ]
{
  plugins: [
    为入口生成HTML文件 [CONFIG/WEBPACK_CONFIG(PLUGIN_HTML)] [TARGET/WEBPACK_PLUGIN_HTML] 
  ]
}

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
▉WEBPACK_RUN▉
启动方式：
1 $ npx webpack
2 $ node node_modules/webpack/bin/webpack.js
3 "scripts": {"build": "webpack"}  $ npm run build
▉
▉WEBPACK_CONFIG_DEFAULT▉
{
  mode: 'production'
  entry: ./src/index.js
  output: {
    filename: main.js
    path: ./dist
  }
}
▉
▉WEBPACK_CONFIG▉
/webpack.config.js

const ▀HtmlWebpackPlugin(PLUGIN_HTML)▀ = require('html-webpack-plugin')
let ▀path(BASE)▀ = require('path')

module.exports = {
  // 环境
  ▀mode: 'development'(MODE)▀, // 值：production/development/none
  
  // 入口
  ▀entry: './src/index.js'(BASE)▀,                           // 相对路径
  
  // 出口
  ▀output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),           // 绝对路径
  }(BASE)▀,

  // Loader 打包特定类型模块时 对其进行转换 Webpack默认能识别 JavaScript 和 JSON
  module: {
    rules: [
      ▀{ test: /\.txt$/, use: 'raw-loader' }(LOADER01)▀ 
    ]
  }

  // 插件任务如：打包优化，资源管理，注入环境变量
  plugins: [
    ▀new HtmlWebpackPlugin({template: './src/index.html'})(PLUGIN_HTML)▀ 
  ]
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

```