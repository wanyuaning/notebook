<style>
  .level2{text-indent: 2em;}
  .level3{text-indent: 4em;}
  .level4{text-indent: 6em;}
  .level5{text-indent: 8em;}
  .level6{text-indent: 10em;}
  .hide{display:none}
</style>

<input type="checkbox" /> 第一点
<input type="checkbox" /> 第二点
<input type="checkbox" /> 第三点
<input type="checkbox" /> 第四点

<div class="level1">{</div>
<div class="level2 hide">  devServer: {</div>
<div class="level3 hide">    port: 3000,             // 端口</div>
<div class="level3 hide">    progress: true,         // 显示进度条</div>
<div class="level3 hide">    contentBase: './build', // 重新指定静态服务</div>
<div class="level3 hide">    compress: true,         // 压缩</div>
<div class="level2 hide">  },</div>
<div class="level2 hide">  mode: 'development',      // 值：production/development/none</div>
<div class="level2">  entry: './src/index.js',  // 相对路径</div>
<div class="level2">  output: {</div>
<div class="level3 hide">    filename: 'bundle.js',</div>
<div class="level3 hide">    path: path.resolve(__dirname, 'dist'),           // 绝对路径</div>
<div class="level2">  },</div>
<div class="level2 hide">  module: {</div>
<div class="level3 hide">    rules: [</div>
<div class="level4 hide">      { test: /\.txt$/, use: 'raw-loader' }</div>
<div class="level3 hide">    ]</div>
<div class="level2 hide">  }</div>
<div class="level2 hide">  plugins: [</div>
<div class="level3 hide">    new HtmlWebpackPlugin({</div>
<div class="level4 hide">      template: './src/index.html',  // 模板地址 </div>
<div class="level4 hide">      filename: 'index.html',        // 打包后的文件名</div>
<div class="level4 hide">      minify: {</div>
<div class="level5 hide">        removeAttributeQuotes: true, // 删除属性双引号</div>
<div class="level5 hide">        collapseWhitespace: true,    // 折叠空行</div>
<div class="level4 hide">      }</div>
<div class="level3 hide">    })</div>
<div class="level2 hide">  ]</div>
<div class="level1">}</div>


```runtime
聚合元素
-----------------------------------------------------------
◐title{'id':'navigator','path':'pages/javascript/bom?id=navigator','type':''}◑  展示模块：[SCENE]


代码块
-----------------------------------------------------------
▃
▅
▇5 LAYOUT CELL TOTAL 24 
cell content
▇
▇12
cell content
▇
▅
▃
目录：  [MULU]
样式类：[s12 c0 b0 h1 b reverse inline|内容] 
提示或跳转图标
[DETAIL/info01]        详情图标 提示 内容标识  ▉info01▉content▉
[INFO cg/info02]       信息图标 提示 内容标识  ▉info02▉content▉∵html∴
[(cg)HELP&info03{width:100px;left:50px}]    (class)帮助图标 跳转 内容标识{content-stype} 
[INFO/info04]          代码保持               ▉info04▉content∵<h1>HTML保持</h1>∴content▉
[DETAIL/info05(BASE)]  激活高亮               ▉info05▉content ▀激活代码(BASE)▀ content▉
[DETAIL/info06]        可移动层               ▉-info06▉content▉

内容包裹 
[bg ciBOX content] 带CLASS
[BOX content]
[BOX 
content
]

HTML 
-----------------------------------------------------------
详情：[detail3](url)
链接：[name](url) 
块列表：<ul class="no-list block-list"><li>标题</li><li><a href="#">子类一</a></li><li>子类二</li></ul>
```

[极验验证码](http://docs.geetest.com/2.0/sections/idx-client-sdk.html)

[牛博云](pages/nby.md)

- v-for :key【作用】
- 防抖和节流【区别】【实现】
- Set、Map、WeakSet 和 WeakMap 的区别
- 深度优先遍历和广度优先遍历【实现】
- ES5/ES6 的继承除了写法以外还有什么区别
- setTimeout、Promise、Async/Await 的区别
- Async/Await 如何通过同步的方式实现异步
- 如何实现一个 new

- HTTP&TCP/IP  三/四次握手
- 算法  二分法(折半查找法)  二叉树

- 两次提交
- 域名访问网页的过程

vue performance devtool(谷歌/性能)


Snipaste

MUI


IOS开发环境
    OS X 10.14.0+、Xcode 11.0+
    版本一致:HBuilderX / IOS离线SDK
    配置工程


return request({
      url: '/api/user/bindgooglecode/',
      responseType: 'arraybuffer',
    method: 'get',
    params: {id: id}
  })

.then(data => {
           data = 'data:image/png;base64,' + btoa(new Uint8Array(data).reduce((d, b) => d + String.fromCharCode(b), ''))
           that.googleCodeImg = data
        })




https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android
h ttps://blog.csdn.net/lilang_9920/article/details/81005345



    
[场景&方案](pages/solution/scene.md)
[设计模式](pages/solution/disign-pattern.md)

[全局&工具](pages/common/global.md)  &emsp; 
[网络&资源](pages/common/net.md)  &emsp; 
[MySQL](pages/common/mysql.md)

<ul class="no-list block-list">
  <li><a href="#/pages/system/index">系统</a></li>
  <li><a href="#/pages/system/windows/index">Windows</a></li>
  <li><a href="#/pages/system/mac/index">MAC</a></li>
  <li><a href="#/pages/system/linux/index">Linux</a></li>
</ul>
<ul class="no-list block-list">
  <li><a href="#/pages/platform/index">平台</a></li>
  <li><a href="#/pages/platform/node.md">Node</a></li>
  <li><a href="#/pages/platform/android.md">Adroid</a></li>
  <li><a href="#/pages/platform/ios.md">IOS</a></li>
</ul>
<ul class="no-list block-list">
  <li>CSS</li>
  <li><a href="#/pages/css/main.md?id=动画">动画</a></li>
  <li><a href="#/pages/css/main.md?id=选择器">选择器</a></li>
</ul>

<br>
<ul class="no-list block-list">
  <li><a href="#/pages/tools/index">工具</a></li>
  <li><a href="#/pages/tools/git-npm">GIT&NPM</a></li>
  <li><a href="#/pages/tools/regular-expression">正则表达式</a></li>
</ul>
<ul class="no-list block-list">
  <li>VSCode</li>
  <li><a href="#/pages/tools/vscode.md?id=settings">settings</a></li>
  <li><a href="#/pages/tools/vscode.md?id=koroFileHeader">koroFileHeader</a></li>
  <li><a href="#/pages/tools/vscode.md?id=用户片段">用户片段</a></li>
</ul>
<br>
<ul class="no-list block-list">
  <li><a href="#/pages/frame/index.md">框架</a></li>
  <li><a href="#/pages/frame/vue/index.md">VUE</a></li>
</ul>
<br>
<ul class="no-list block-list">
  <li><a href="#/pages/plugin/index.md">插件&功能</a></li>
</ul>





　　　　
## JavaScript
### ECMAScript规范 [detail](pages/javascript/ecma.md)

```link
[h5|数据类型] [类型转换](/pages/javascript/data-type?id=类型转换)
  [title2|基本类型]：[String](/pages/javascript/data-type?id=String)  Number  Boolean   null  undefined  Symbol
  [title2|对象类型]：类对象：Object [Array](/pages/javascript/data-type?id=Array)  Function Map  Set  Date  RegExp  Error  实例对象：{} [] fn
[h5|事件循环][DETAIL](#)
  回调地狱[Promise/then](/pages/javascript/es6?id=Promise/then)
  同一作用域自动异步[async/await](/pages/javascript/es6?id=async/await) 
  同一作用域手动异步[generator/yield/next](/pages/javascript/es6?id=generator/yield/next)

```

控制流程
for 可return breake
for in    {} []  i为key
for of    [] Map Set i为value
forEach 遍历装饰元素 
map       遍历返回新元素 原数组不变
filter

call&apply


[ES6](pages/javascript/ecma.md?id=ES6)










向导

前端安全 Web Front-End/安全

https://jinnianwushuang.github.io/jinnian-space/dist/spa/#/note



curl -u 'wanyuaning' https://api.github.com/orgs/wmgcuan/repos -d '{"name":"express"}' 
git remote add github https://github.com/wmgcuan/express.git



项目
skin: 1 利用class 命名空间；2 利用CSS预处理生成多套样式；3 利用CSS 变量换肤

















**盒子模型**【w=c 怪异模式w=c+p+b+m】【边界塌陷和边界重叠】<br>

**弹性盒子** 
```css
.flex{
    display: flex; 
    flex-flow: row nowrap; 
    flex-direction: row row-reverse column column-reverse; 
    flex-wrap: nowrap wrap wrap-reverse; 
    justify-content: flex-start flex-end center space-between space-around; /*子元素在不参与扩张时的主轴上靠齐容器的方式*/
    align-content: stretch; /*子元素在主轴上开始/结束之间对齐方式*/
    align-items: stretch; /*子元素在垂轴上开始/结束之间对齐方式*/
}
.flex .item{
    flex: 0 1 auto; flex-grow: 0 1...; flex-shrink: 0 1...;  flex-basis: auto width; 
    align-self: auto; /*对齐auto/flex-start/flex-end/center/baseline/stretchwidth*/
    order: 0;
}
```
**事件模型**
document →捕获→ child     (默认) document ←冒泡← child 
阻止冒泡/捕获：[jQuery e.stopPropagation() ]  [js e.preventDefault() ]

**事件循环机制**(Event Loop)<br>
宏任务

**前端优化**：多使用内存／缓存 减少CPU计算 减少网络请求<br>
静态资源：合并 压缩 缓存 CDN
加载策略：css/head js/body 懒加载
性能：减少DOM操作 合并操作  DOM缓存  防抖／节流  大数据翻页 闭包<br>



**垃圾回收机制**
标记清除: 变量进入执行环境时标记“进入环境”，当变量离开环境时，则将其标记为“离开环境”
引用计数: 被引用+1, 引用变值变更-1, 为零时无效删除


# 浏览网页的过程
dns域名解析：搜索【浏览器DNS缓存>操作系统DNS缓存】    hosts里ip映射     向本地DNS服务器发起域名解析请求     向根DNS服务器发起请求
请求应答过程：
客户端数据包流动过程：




命名空间

**设计模式**
Promise 【pending fulfilled]】【then catch all race】
发布订阅模式

**模块化**
AMD  RequireJS define('模块名', [], function () { }) require(['模块名'], function (name) { })
CMD  SeaJS require('模块路径')
CommonJs module.exports require('模块路径')
ES6  export default login   import login from '...' 
  export { login }           import {login} from '...'      import * as util from '...'
  export default login   import login from '...'  

Webpack rollup








SSR
https://segmentfault.com/a/1190000013956945







Node
npm yarn















数据流
[baowang](pages/data-flow/baowang.md)


