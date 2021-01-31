```
多入口
yarn add @babel/core @babel/preset-env babel-loader webpack-dev-server -D

webpack.config.js

let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    home: './src/index.js',
    other:'./src/other.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    1.两个入口，以两个实例来产生两个输出
    2.两个输出都会插入所有资源，需使用chunks罗列所需的资源
    3.
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename: 'index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template:'./other.html',
      filename: 'other.html',
      chunks: ['other', 'home']
    })
  ]
}


SOURCE MAP
module.exports = {
  mode: 'production',
  entry: {
    home: './src/index.js'
  },
  module: {
    rules: [
      {test:/\.js$/, use: {loader: 'babel-loader', options: {presets:['@bebal/preset-env']}}}
    ]
  },
  // 增加映射文件，调试代码
  1.source-map 会单独生成一个sourcemap文件，会标识列和行
  2.eval-source-map 无单独文件而和资源打包在一起，会标识列和行
  3.cheap-module-source-map 单独映射文件，不会标识列
  4.cheap-module-eval-source-map 集成在打包文件里，不会标识列
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename: 'index.html'
    })
  ]
}

自动打包实体文件
module.exports = {
  mode: 'production',
  entry: {
    home: './src/index.js'
  },
  module: {
    rules: [
      {test:/\.js$/, use: {loader: 'babel-loader', options: {presets:['@bebal/preset-env']}}}
    ]
  },
  // 监控当前代码变化
  watch: true,
  watchOptions: {
    poll: 1000,  // 频率(毫秒)多少时长检查一次变动
    aggregateTimeout: 500, // 防抖(毫秒)
    ignored: /node_modules/,  // 忽略监控

  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename: 'index.html'
    })
  ]
}

一些小插件
1.cleanWebpackPlugin  防止输出文件堆叠  yarn add clean-webpack-plugin -D
2.copyWebpackPlugin   拷贝指定文件(夹)  yarn add copy-webpack-plugin -D
3.bannerPlugin 内置 版权申明插件

let CleanWebpackPlugin = require('clean-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')
let webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    home: './src/index.js'
  },
  module: {
    rules: [
      {test:/\.js$/, use: {loader: 'babel-loader', options: {presets:['@bebal/preset-env']}}}
    ]
  },
  watch: true,
  watchOptions: {
    poll: 1000,  
    aggregateTimeout: 500, 
    ignored: /node_modules/, 

  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin('./dist'), // 可用数组清空多个文件夹
    new CopyWebpackPlugin([
      {from: 'doc', to: './'}  // doc目录下的文件拷贝到输出目录下
    ]),
    new webpack.BannerPlugin('make 2020 by ewan')
  ]
}

代理
/server.js
let express = require('express') //webpackDevServer自带
let app = express()
app.get('api/user', (req,res)=>{
  res.json({name:'服务数据'})
})
app.listen(3000)

/src/index.js  
let xhr = new XMLHttpReuquest()
xhr.open('GET', '/api/user', true)
xhr.onload = function(){
  console.log(xhr.response)
}
xhr.send()

index.js运行在8080端口，请求不到3000端口，这时可设置一个代理服务

module.exports = {
  mode: 'production',
  entry: {
    home: './src/index.js'
  },
  module: {
    rules: [
      {test:/\.js$/, use: {loader: 'babel-loader', options: {presets:['@bebal/preset-env']}}}
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    // 服务端app.get('/api/user')与方问路径xhr.open('GET', '/api/user', true)吻合时
    proxy: {'/api': 'http://localhost:3000'}
    // 服务端app.get('/user')与方问路径xhr.open('GET', '/api/user', true)不吻合时
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'/api': ''}
      }
    }
    //单纯模拟数据(由webpackDevServer内置的express通过注入app支持 没有跨域问题)
    before(app){
      app.get('/user', (req,res)=>{
        res.json({name:'服务数据'})
      })
    }
    //服务端是自己的 在服务端里启动webpack
    webpack-dev-middleware
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename: 'index.html'
    })
  ]
}







场景：[前端工程搭建Babel7+](/pages/solution/scene?id=前端工程搭建-babel7+)  require动态变量[DETAIL/WEBPACK_REQUIRE_01]

[h3|webpack4] [DETAIL/WEBPACK_ABOUT]
|demo> yarn init -y
|demo> yarn add webpack webpack-cli -D
  
[cf b3| 零配置 ] 默认值[DETAIL/WEBPACK_CONFIG_DEFAULT] Demo[DETAIL/WEBPACK_DEMO_01]

[cf b3| 配置文件 ] 默认：/webpack.config.js  命名：|demo> npx webpack --config webpack.rename.js 或 "scripts":{"build":"webpack --config webpack.rename.js"}
[cf b3| 配置 入口&出口 ] [INFO2/WEBPACK_ENTRY_OUTPUT] [CONFIG/-WEBPACK_CONFIG(BASE)]
[cf b3| 配置 去混淆模式 ] mode: 'development' [CONFIG/-WEBPACK_CONFIG(MODE)]
[cf b3| 配置 开发服务 ] 安装&启动[DETAIL/WEBPACK_DEV_SERVER]  [CONFIG/-WEBPACK_CONFIG(DEV_SERVER)]
[cf b3| 配置 代码优化 ] plugins: [ HTML模板注入 [INFO2/WEBPACK_PLUGIN_HTML] [CONFIG/-WEBPACK_CONFIG(PLUGIN_HTML)]  抽离css样式成link标签形式 [INFO2/WEBPACK_PLUGIN_CSS] [CONFIG/-WEBPACK_CONFIG(PLUGIN_LINK)]]

[cf b3| 资源 CSS   ] module/rules: [ {test: /\.css$/, use:['style-loader', 'css-loader']} ] [INFO2/WEBPACK_MODULE_CSS] [CONFIG/-WEBPACK_CONFIG(PLUGIN_CSS)]
[cf b3| 资源 Text  ] module/rules: [ {test: /\.txt$/, use: 'raw-loader'} ] [INFO2/WEBPACK_LOADER_RAW] [CONFIG/-WEBPACK_CONFIG(LOADER01)]
[cf b3| 资源 Image ] █ 在JS中创建引入[INFO2/WEBPACK_RES_IMAGE]   █ 在CSS中引入 [INFO2/WEBPACK_RES_IMAGE_2]   █ 在HTML标签引入 [INFO2/WEBPACK_RES_IMAGE_3]

[cf b3| 第三方模块 ] █ 安装/引入/打包进bundle,暴露到全局 [INFO2/WEBPACK_RES_THIRD] [CONFIG/-WEBPACK_CONFIG(PLUGIN_EXPOSE_LOADER)]  █ 安装/引入/打包进bundle,为每个模块注入变量 [INFO2/WEBPACK_RES_THIRD_2]  █ CDN引入，打包忽略 [INFO2/WEBPACK_RES_THIRD_3]

[cf b3| 资源路径 ] 图片[INFO2/WEBPACK_RES_PATH_IMG] CSS[INFO2/WEBPACK_RES_PATH_CSS] CDN所有资源[INFO2/WEBPACK_RES_PATH_ALL] CDN图片[INFO2/WEBPACK_RES_PATH_CDN]


▉WEBPACK_RES_THIRD▉
yarn add jquery
import $ from 'jquery'
console.log($)

内联方式 暴露全局变量
  yarn add expose-loader -D
  import $ from 'expose-loader?$!jquery'
  console.log(window.$)

配置方式 暴露全局变量
  module.rules: [
    {
      test: require.resolve('jquery'), 
      use: 'expose-loader?$'
    }
  ]  
▉
▉WEBPACK_RES_THIRD_2▉ 
在每个模块中注入变量 此方法不能使用window.$ 只能使用$
let webpack = require('webpack')
{
  plugins: [
    new webpack.ProvidePlugin: {
      $: 'jquery'
    }
  ]
}
▉
▉WEBPACK_RES_THIRD_3▉ 
现希望jquery不用import引用而改为在模板里CDN引用 如：<script src=".../jquery.js"></script> 
{
  externals: {
    jquery: '$' // 遇到$引入 忽略打包 需心理安慰仍 import $ from 'jquery' 时
  }
}
$ 和 window.$ 都可使用
▉ 

▉WEBPACK_RES_IMAGE▉ 
import logo from './logo.png' 或 let logo = require('./logo.png')

let image = new Image()
image.src = logo
document.body.appendChild(image) 

module.rules: [  
  // yarn add file-loader -D 
  // file-loader默认会在内部生成一张图片到build下，返回图片地址
  // 通常会使用url-loader 有更丰富的配置 参考场景三
  {test: /\.(png|jpg|gif)$/, use: 'file-loader'}
]    
▉  
▉WEBPACK_RES_IMAGE_2▉ 
如：background('./logo.png')

默认支持 由css-loader调用require('url')解决
▉
▉WEBPACK_RES_IMAGE_3▉  
  如：<img src="./logo.png">

  module.rules: [
    // yarn add html-withimg-loader -D 
    {test: /\.html$/, use: 'html-withimg-loader'},
    {
      test: /\.(png|jpg|gif)$/, 
      use: {
        loader: 'url-loader',
        options: {
          limit: 200*1024,   // 小于200k 转为base64 否则用file-loader生成图片
          outputPath: '/img' // 输出路径 其它资源路径参考【资源路径】
        }
      }
    }
  ]
▉
 
▉WEBPACK_RES_PATH_IMG▉
module.rules: [
  {
    test: /\.(png|jpg|gif)$/, 
    use: {
      loader: 'url-loader',
      options: {
        outputPath: '/img/' // 输出路径
      }
    }
  }
]
▉ 
▉WEBPACK_RES_PATH_CSS▉
plugins: [
  new MiniCssExtractPlugin({
    filename: 'css/main.css' 
  })
]
▉
▉WEBPACK_RES_PATH_ALL▉
{
  output: {
    publicPach: 'http://abc.com' // 给所有解析资源加前缀 成为绝对路径
  }
}
▉
▉WEBPACK_RES_PATH_CDN▉
不能设置output.publicPath了 改为设置module.rules.urlLoader.options.publicPath
module.rules: [
  {
    test: /\.(png|jpg|gif)$/, 
    use: {
      loader: 'url-loader',
      options: { 
        publicPach: 'http://abc.com'
      }
    }
  }
]
▉  

▉WEBPACK_ENTRY_OUTPUT▉
如：build/webpack.conf.js

const path = require('path')

module.exports = {
  entry: './build/main.js', // 相对于项目根目录：访问webpack.conf.js同级目录也从根目录开始
  output: {                 // 绝对路径：__dirname + 相对webpack.conf.js访问
    filename: 'bundle.js',  // 打包后的文件名，Hash后缀: bundle.[hash:8].js
    path: path.resolve(__dirname, '../dist')
  }
}

"scripts": {"build": "webpack --config build/webpack.conf.js"}
▉
▉WEBPACK_PLUGIN_CSS▉
yarn add mini-css-extract-plugin -D
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css' // 抽离出来的文件名 输出路径参考【资源路径】
    })
  ]

再设置Loader的输出端，参考Module CSS
  module: {
    rules: [
      {test: /\.css$/, use:[MiniCssExtractPlugin.loader, 'css-loader']}
    ]
  }
▉
▉WEBPACK_MODULE_CSS▉
yarn add less less-loader css-loader style-loader -D
其它：node-sass sass-loader  stylus stylus-loader
      {
        test: /\.css$/, 
        use:[
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top', // 资源插入到模板的位置
            }
          }, 
          'css-loader'
        ]
      }

抽离css样式成link标签形式，而不是以<style>形式插入模板里
先：Plugin 抽离css样式成link标签形式
再：
{
  test: /\.less$/, 
  use:[
    MiniCssExtractPlugin.loader, 
    'css-loader',
    'less-loader'
  ]
}
▉
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
/webpack.config.js
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
const ▀MiniCssExtractPlugin(PLUGIN_LINK)▀ = require('mini-css-extract-plugin')
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
      template: './src/index.html',  // 模板地址 
      filename: 'index.html',        // 打包后的文件名      
      minify: {                      // 压缩
        removeAttributeQuotes: true, // 删除属性双引号
        collapseWhitespace: true     // 折叠空行
      },      
      hash: true                     // 给资源加HASH引用参 与output: {filename: 'bundle.[hash:8].js'}不同      
    })(PLUGIN_HTML)▀,
    ▀new MiniCssExtractPlugin({
      filename: 'main.css'           // 抽离出来的文件名
    })(PLUGIN_LINK)▀ 
  ]

  // Loader 打包特定类型模块时 对其进行转换 Webpack默认能识别 JavaScript 和 JSON
  module: {
    rules: [
      ▀{
        test: /\.less$/, 
        use:[
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'less-loader'
        ]
      }(PLUGIN_LINK)▀,
      ▀{
        test: /\.css$/, 
        use:[
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top', // 资源插入到模板的位置
            }
          }, 
          'css-loader'
        ]
      }(PLUGIN_CSS)▀,
      ▀{ test: require.resolve('jquery'), use: 'expose-loader?$'}(PLUGIN_EXPOSE_LOADER)▀, // yarn add expose-loader -D 
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

  plugins: [
    new HtmlWebpackPlugin({
      template: './build/index.html', // 模板地址
      filename: 'index.html',         // 打包后的文件名
      // 压缩
      minify: {
        removeAttributeQuotes: true, // 删除属性双引号
        collapseWhitespace: true     // 折叠空行
      },
      // 给资源加HASH引用参 与output: {filename: 'bundle.[hash:8].js'}不同 
      hash: true
    })
  ]
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





















