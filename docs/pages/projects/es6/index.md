#### 开发
```es6-demo/src/Element.js
export class Element{  
  constructor(type){
    this.type = type
    this.data = {a: 1}
  }
}
```
#### 应用  
es6-demo/examples/index.html
```
<h1>插件应用实例</h1>
<a href="001/">001</a>
```
es6-demo/examples/001/index.html
```
<script src="/static/Element.js"></script><!-- 开启服务 从跟目录读取资源 --> 
<script src="../static/Element.js"></script><!-- File协议浏览 从上一级目录读取资源 --> 
<script>
  var el = new lib.Element('Sprite')
  console.log('el', el)
</script>
```
#### 搭建应用服务
【es6-demo】npm init -y
【es6-demo】npm i express --save-dev
```es6-demo/examples/server.js
const express = require('express')
const app = express()
const port = 3001
app.use(express.static(__dirname))
app.listen(port, ()=>{console.log('Listen on '+port)})
```
#### 浏览应用
【es6-demo】node examples/server.js  // http://localhost:3000



#### 开发&应用(服务根目录/static/Element.js还不存在)
1. 为服务添加热更新
    【es6-demo】npm i webpack-dev-middleware webpack-hot-middleware webpack webpack-cli --save-dev
    ```es6-demo/examples/server.js
    ▇const port = 3000
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpack = require('webpack')
    const webpackConfig = require('./webpack.config.js')
    const compiler = webpack(webpackConfig)
    app.use(webpackDevMiddleware(compiler))
    app.use(webpackHotMiddleware(compiler))
    ▇app.use(express.static(__dirname))
    ```
2. WEBPACK支持
    ```es6-demo/examples/webpack.config.js
    const path = require('path')
    module.exports = {
      mode: 'development',
      entry: {
        Element: path.resolve(__dirname, '001/app.js') // 用绝对路径 突破服务限制
      },
      output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[name].js',
        publicPath: '/static/',
        library: 'lib',
        libraryTarget: 'umd'
      }
    }
    ```
3. WEBPACK入口文件
    ```es6-demo/examples/001/app.js
    import {Element} from '../../src/Element'
    export {Element}
    ```
4. 开发浏览 【es6-demo】node examples/server.js<br>
   运行打包 【es6-demo】npx webpack --config examples/webpack.config.js


#### 总结
【es6-demo】npm init -y
【es6-demo】npm i express webpack-dev-middleware webpack-hot-middleware webpack webpack-cli --save-dev
----------------------------
es6-demo
  src
    Element.js
  examples
    server.js
    webpack.config.js
    index.html
    001
      app.js
      index.html
----------------------------
