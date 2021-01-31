

`规范化
  文档。需求文档、设计文档、系统设计、测试单、项目报告。
  工具。开发语言选型，开发工具，协同工具，测试工具，发布工具。
  代码规范。javascript，css，html，技术文档。
  质量规范。功能方便，是否可拓展，是否满足 RESTFul，是否安全性满足
流程化
  软件开发常见流程
  职责和协同
  目标明确的版本计划
  敏捷开发
自动化
  流程的自动化。即人员协同的自动化
  代码开发自动化，去掉重复劳动
  自动化单元测试
  UI/API/兼容性 自动化测试
  自动化部署
  自动化问题反馈
创新
  发掘其他团队的优秀方法
  实践敏捷开发
  多交流，多观察业界
WEB 前端开发工程化
  工程化应该出现在工作的任何环节，WEB 前端开发过程的工程化发展得尤为迅速。

  把 Grunt、gulp、Nodejs 的技能应用到前端开发，实际上就是前端工程化的一部分。移动互联网的发展，跨平台服务的一致性体验，和要求快速迭代的互联网产品对前端领域提出了更高的要求，前端三板斧已经不能满足了。然后你看到了这几年百花齐放的场景。

前端语言、框架
  CSS 模块化方案：LESS/ SASS
  JS 模块化方案：AMD/CommonJS/UMD/ES6 Modlue
  HTML 模板引擎：baiduTemplate(百度)artTemplate（腾讯）juicer（淘宝）doT tmpl handlebars easyTemplate underscoretemplate mustache kissytemplate
  前端集成框架 Bootstrap、Gumby、 Skeleton、Foundation
  AngularJS
  ReactJS
  VueJS
  Meteor
  还有 WEEX
  (排名不分先后)
前端构建工具
  webpack
  Grunt
  gulp
  yeoman
  FIS
  athena
  tmt-workflow
  jdf
  所以在实际前端构建流程里面，你会发现以下的流程。

代码优化
  LESS、SASS 自动编译
  Autoprefixer 前缀自动补全
  自动生成图片 CSS 属性，width & height
  CSS Sprite 雪碧图合成
  JS、CSS、HTML 压缩
  按需加载
  延迟加载
解决方案
  项目初始化。如果你用了 yeoman 或者 HTML5 Boilerplate，你就懂我说什么
  作用域污染。前端自带问题。
  eslint 验证，代码验证验证
  Retina @2x & @3x 自动生成适配
  px -> rem 兼容适配方案
  智能 WebP 解决方案
  非覆盖式升级，文件指纹
  CDN 文件缓存，缓存更新
  自动化测试
调试和部署
  监听文件变动，自动刷新浏览器 (LiveReload)
  文件指纹，hash 值生成
  FTP 发布部署
  ZIP 项目打包
自动化测试
  Mocha
  Jasmine
  travis-ci
  Jenkins`






let solution = [
  {
    title: "前端工程搭建",
    subtitle: "解决模块化项目浏览器端无法运行的问题",
    resolve: `扩展 javascript 、html、css 本身的语言能力
    解决重复工作
    团队合作模板化、模块化
    解决功能复用和变更问题
    解决开发和产品环境差异问题
    解决发布流程问题`,
    links: [
      {title: "Grunt", link: "0001"},
      {title: "Gulp", link: "0002"},
      {title: "Webpack", link: "0003"}
    ]
  }
]

let DATA = [
  {title: "Grunt", version: "0", id: "0001", catalogue: "tools"},
  {title: "Gulp", version: "0", id: "0002", catalogue: "tools"},
  {
    title: "Webpack",
    version: "4.0",
    id: "0003",
    catalogue: "tools",
    scenes: [
      {
        title: "零配置",
        description: [
          {
            title: "默认值",          
            content: `/webpack.config.js
            {
              mode: 'production'
              entry: ./src/index.js
              output: {
                filename: main.js
                path: ./dist
              }
            }`
          },
          {
            title: "Demo",
            content: `[src[index.js, a.js]]
            src/index.js
              console.log('hello webpack')  
              let str = require('./a.js')
              console.log(str)          
            src/a.js
              module.exports = 'ewan'
            启动方式：
            |demo> npx webpack
            |demo> node node_modules/webpack/bin/webpack.js
            |demo> npm run build         // "scripts": {"build": "webpack"}          
            /src/index.js > /dist/main.js`
          }
        ]
      },
      {
        title: "使用配置文件",
        description: [
          {
            title: "默认文件名",          
            content: `/webpack.config.js`
          },
          {
            title: "重命名",
            content: `demo> npx webpack --config webpack.rename.js 或 "scripts":{"build":"webpack --config webpack.rename.js"}`
          }
        ]
      },
      {
        title: "基础配置",
        description: `如：build/webpack.conf.js

        const path = require('path')
        
        module.exports = {
          entry: './build/main.js', // 相对于项目根目录：访问webpack.conf.js同级目录也从根目录开始
          output: {                 // 绝对路径：__dirname + 相对webpack.conf.js访问
            filename: 'bundle.js',  // 打包后的文件名，Hash后缀: bundle.[hash:8].js
            path: path.resolve(__dirname, '../dist')
          }
        }
        
        "scripts": {"build": "webpack --config build/webpack.conf.js"}`
      },
      {
        title: "环境区分",
        description: `module.exports = {mode: 'development'}`
      },
      {
        title: "开发服务WebpackDevServer",
        description: `yarn add webpack-dev-server -D
        以当前目录为静态目录(默认)：npx webpack-dev-server 或 "scripts":{"dev":"webpack-dev-server"}
        指定目录：参考开发配置`,
        links: [
          {title: "指定目录", link: "0001"}
        ]
      },
      {
        title: "代码优化Plugins",
        children: [
          {title: "HTML模板注入:HtmlWebpackPlugin", description: `为应用程序生成一个 HTML 文件，并自动注入所有生成的 bundle
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
            ]`},
          {title: "抽离css样式成link标签形式:MiniCssExtractPlugin", description:`yarn add mini-css-extract-plugin -D
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
            }`}
        ]
      },
      {title: "资源CSS", description: `yarn add less less-loader css-loader style-loader -D
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
      }`},
      {title: "资源Text", description: `场景一：import txt from 'file.txt';
      场景二：<script>${ require('raw-loader!babel-loader!../node_modules/lib-flexible/flexible.js') }</script>
      npm install --save-dev raw-loader
      配置使用
      module: {
        rules: [
          {test: /\.txt$/, use: 'raw-loader'}
        ]
      }
      命令使用
      webpack --module-bind 'txt=raw-loader'
      
      内联使用
      import txt from 'raw-loader!./file.txt';`},
      {title: "资源Image", description: [
        {title: "在JS中创建引入", description: `import logo from './logo.png' 或 let logo = require('./logo.png')

        let image = new Image()
        image.src = logo
        document.body.appendChild(image)
        
        module.rules: [  
          // yarn add file-loader -D
          // file-loader默认会在内部生成一张图片到build下，返回图片地址
          // 通常会使用url-loader 有更丰富的配置 参考场景三
          {test: /\.(png|jpg|gif)$/, use: 'file-loader'}
        ]`},
        {title: "在CSS中引入", description: `如：background('./logo.png')
        默认支持 由css-loader调用require('url')解决`},
        {title: "在HTML标签引入", description: `如：<img src="./logo.png">

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
        ]`}
      ]},
      {title: "第三方模块", description: [
        {title: "安装/引入/打包进bundle,暴露到全局", description: `yarn add jquery
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
          ]  `},
        {title: "安装/引入/打包进bundle,为每个模块注入变量", description: `在每个模块中注入变量 此方法不能使用window.$ 只能使用$
        let webpack = require('webpack')
        {
          plugins: [
            new webpack.ProvidePlugin: {
              $: 'jquery'
            }
          ]
        }`},
        {title: 'CDN引入，打包忽略', description: `现希望jquery不用import引用而改为在模板里CDN引用 如：<script src=".../jquery.js"></script>
        {
          externals: {
            jquery: '$' // 遇到$引入 忽略打包 需心理安慰仍 import $ from 'jquery' 时
          }
        }
        $ 和 window.$ 都可使用`}
      ]},
      {title: "资源路径", description: [
        {title: "图片", description: `module.rules: [
          {
            test: /\.(png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                outputPath: '/img/' // 输出路径
              }
            }
          }
        ]`},
        {title: "CSS", description: `plugins: [
          new MiniCssExtractPlugin({
            filename: 'css/main.css'
          })
        ]`},
        {title: "CDN所有资源", description: `{
          output: {
            publicPach: 'http://abc.com' // 给所有解析资源加前缀 成为绝对路径
          }
        }`},
        {title: "CDN图片", description: `不能设置output.publicPath了 改为设置module.rules.urlLoader.options.publicPath
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
        ]`}
      ]}
    ]
  }
],
ID_DATA = {}