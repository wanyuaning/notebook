```
src
  Element.ts
examples
  element         Element对象应用
    js
    index.html    浏览页
    app.ts    更新打包插件 到 js
  index.html
  server.js
```

- game-frame> npm init

### 环境部署
- 全局安装：npm install -g typescript
- game-frame> npm i typescript --save
- src/Element.ts



### 测试样例
```
examples
  element         Element对象应用
    js
    index.html    浏览页
    app.ts    更新打包插件 到 js
  index.html
  server.js
```
#### 样例一
1. examples/index.html  
    ```
    <ul>
      <li><a href="element/">Element class</a></li>
    </ul>
    ```
   examples/element/index.html
    ```
    <script src="/__build__/element.js"></script> <script> var el = new GameElement(); console.log('el', el) </script>
    ```
    examples/element/app.ts //作为express -> webpack -> webpack.config.js -> entry热更新入口文件
    ```
    import {GameElement} from '../../src/Element'; var el = new GameElement('Sprite'); console.log('el', el);
    ```
2. game-frame> npm i express --save-dev  // 网页服务
3. examples/server.js
    ```
    const express = require('express')
    const app = express()
    const port = 3002
    app.use(express.static(__dirname))
    app.listen(port)
    ```
4. game-frame> node examples/server.js    http://localhost:3002/index.html

##### express新需求 插件开发进程热更新 webpack-dev-middleware和webpack-hot-middleware配合使用
1. npm i webpack-dev-middleware webpack-hot-middleware --save-dev
2. examples/server.js
    ```
    //const port = 3002
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpack = require('webpack')
    const WebpackConfig = require('./webpack.config')
    const compiler = webpack(WebpackConfig)
    app.use(webpackDevMiddleware(compiler, {
      publicPath: '/__build__/',
      stats: {
        colors: true,
        chunks: false
      }
    }))
    app.use(webpackHotMiddleware(compiler))
    //app.use(express.static(__dirname))
    ```
3. examples/webpack.config.js
    ```
    const fs = require('fs')
    const path = require('path')
    const webpack = require('webpack')

    module.exports = {
      mode: 'development',
      // examples目录下每个demo目录: app.ts 作为webpack构建的入口文件  entries 收集了多目录个入口文件，并且每个入口还引入了一个用于热更新的文件  entries 对象key为目录名
      entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
        const fullDir = path.join(__dirname, dir)
        const entry = path.join(fullDir, 'app.ts')
        if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
          entries[dir] = ['webpack-hot-middleware/client', entry]
        }
        return entries
      }, {}),

      // 根据不同的目录名称，打包生成目标 js，名称和目录名一致
      output: {
        path: path.join(__dirname, '__build__'),
        filename: '[name].js',
        publicPath: '/__build__/'
      },

      module: {
        rules: [
          {test: /\.ts$/, enforce: 'pre', use: [{loader: 'tslint-loader'}]},
          {test: /\.tsx?$/, use: [{loader: 'ts-loader', options: {transpileOnly: true}}]}
        ]
      },

      resolve: {
        extensions: ['.ts', '.tsx', '.js']
      },

      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    }
    ```
4. npm i webpack ts-loader tslint-loader --save-dev
5. npm i tslint --save-dev
6. tsconfig.json
Smart转钱（从旧卡转到新卡）PASALOAD （电话号码）（ 金额）发808



