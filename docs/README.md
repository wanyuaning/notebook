

SVN分支开发
为了便于创建分支和标记，通常习惯于将Repository版本库的结构布置为:/branches,/tags,/trunk
branches－分支
tags－标记
合并到主干

创建分支（标记）
将主干trunk签出（checkout）到本地，在本地checkout的trunk目录上单击鼠标右键，在弹出菜单中选择“TortoiseSVN” →“Branch/tag…”




__dirname：    当前 执行文件 所在目录的完整目录名
__filename：   当前 执行文件 的带有完整绝对路径的文件名
process.cwd()：当前 node命令 所定位的文件夹目录名 
./：           文件所在目录

#### child_process
- exec execFile fork
- spawnSync execFileSync execSync
<br>
<br>
<div class="color-group color-card inline collapse c-atv-0">
  <i>child_process.spawn(command[, args][, options])</i> <c i='1'></c> 基本的创建子进程函数 行指定的程序<br>  
  <div class="c-item-1">    
    const { <strong>spawn</strong> } = require('child_process');<br>
    const ls = <strong>spawn</strong>('ls', ['-lh', '/usr']);<br>
    ls.stdout.on('data', (data) => {<br>
    　console.log(`stdout: ${data}`);<br>
    });<br>
    ls.stderr.on('data', (data) => {<br>
    　console.log(`stderr: ${data}`);<br>
    });<br>
    ls.on('close', (cd) => {<br>
    　console.log(`子进程退出码：${cd}`);<br>
    });    
  </div>
  <i>child_process.exec(command[, options], callback)</i> <c i='2'></c><br>
  <div class="c-item-2">
    const { <strong>exec</strong> } = require('child_process');<br>
    <strong>exec</strong>('cat *.js missing_file | wc -l', (error, stdout, stderr) => {<br>
    　if (error) {<br>
    　　console.error(`执行出错: ${error}`);<br>
    　　return;<br>
    　}
    　console.log(`stdout: ${stdout}`);<br>
    　console.log(`stderr: ${stderr}`);<br>
    });
  </div>
</div>
<br>
<br>

**spawn与exec的相同点**
1. 都用于开一个子进程执行指定命令。
2. 都可以自定义子进程的运行环境。
3. 都返回一个ChildProcess对象，所以他们都可以取得子进程的标准输入流、标准输出流和标准错误流。

**spawn与exec的不同点**
1. 接受参数的方式:spawn使用了参数数组，而exec则直接接在命令后。
比如要运行 du -sh /disk1 命令， 使用spawn函数需要写成spawn('du', ['-sh ', '/disk1'])，而使用exec函数时，可以直接写成exec('du -sh /disk1')。exec是会先进行Shell语法解析，因此用exec函数可以更方便的使用复杂的Shell命令，包括管道、重定向等。
2. 子进程返回给Node的数据量:spawn没有限制子进程可以返回给Node的数据大小，而exec则在options配置对象中有maxBuffer参数限制，且默认为200K，如果超出，那么子进程将会被杀死，并报错：Error：maxBuffer exceeded，虽然可以手动调大maxBuffer参数，但是并不被推荐。由此可窥见一番Node.js设置这两个API时的部分本意，spawn应用来运行返回大量数据的子进程，如图像处理，文件读取等。而exec则应用来运行只返回少量返回值的子进程，如只返回一个状态码。
3. exec方法相比spawn方法，多提供了一个回调函数，可以更便捷得获取子进程输出。这与从返回的ChildProcess对象的stdout或stderr监听data事件来获得输出的区别是: data事件的方式，会在子进程一有数据时就触发，并把数据返回给Node。而回调函数，则会先将数据缓存在内存中（数据量小于maxBuffer参数），等待子进程运行完毕后，再调用回调函数，并把最终数据交给回调函数。

github webHook

- npm i chalk --save-dev
- semver 分析 语义化版本规范 工具
npm install semver
const semver = require('semver')
// 比较两个版本号的大小
semver.gt(‘1.2.3’, ‘2.3.4’) // false
semver.lt(‘1.2.3’, ‘2.3.4’) // true
// 验证版本号是否合法，返回null即不合法
semver.valid(‘1.2.3’) // ‘1.2.3’
semver.valid(‘a.b.c’) // null
// 提取版本号
semver.clean(’ =v1.2.3 ') // ‘1.2.3’
semver.major(‘1.2.3’) // ‘1’
semver.minor(‘1.2.3’) // ‘2’
semver.patch(‘1.2.3’) // ‘3’
// 尝试将字符串解析为SemVer对象 { ...raw: '1.2.3', version: '1.2.3' }
semver.parse('1.2.3');        
// 分析版本号是否属于某个范围或符合一系列条件

ora  loading标

```js
// https://github.com/shelljs/shelljs
require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var shell = require('shelljs')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var removeFile = require('./webpack.package');
var replaceHtml = require('./webpack.product');
var builds = require("./webpack-build-module");

const exec = require('child_process').exec;
const staticPath = path.join(__dirname, '../');
const fs = require('fs');
var cmd = 'svn info';


var spinner = ora('building for production...')
spinner.start()


Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//读取svn版本号, 并写入static文件夹里面;
var work = exec(cmd, { cwd: staticPath });

work.stdout.on('data', function (data) {

    var str = `
最后修改的版本：${data.split('\n')[10].split(':')[1]}
最后修改的作者：${data.split('\n')[9].split(':')[1]}
最后修改的时间：${new Date().Format('yyyy-MM-dd hh:mm:ss')}
            `

    fs.writeFile(staticPath + '/static/version.txt', str, 'utf8', (err) => {
        if (err) return;
        console.log(chalk.green('获取到svn版本号成功, `static/version.txt`'));
    })

})

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)
shell.config.silent = true
shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))

  console.log(chalk.green('\n\n' + new Date().Format('yyyy-MM-dd hh:mm:ss') + '\n\n'));

  /************************  下面这一行，是打包单站点的资源文件，如果注释掉，就打包所有站点的资源文件  *************************/
  removeFile();

	/************************  这一行是发布build包时，将本地的配置文件修改成线上的配置文件，如果注释，则不会替换   ***************************/
	replaceHtml();
    
    /************************  build完成后，将vuesss文件改成vue   ***************************/
    builds(true)
})

```
1 node/npm版本检测

2 SVN版本信息记录

3 webpack打包

4 删除冗余资源文件  webpack.package

5 打包文件再整理 webpack.product

	index.html

	./static/script/jquery.param.js 替  ../Scripts/jquery.param.js

	跑马直播页 

	../script/jquery.param.js 替 ../../../Scripts/jquery.param.js

	维护通告页

	script/jquery.param.js 替 ../../Scripts/jquery.param.js

6 webpack-build-module.js

	src/components/

	banner目录 main目录 float目录 footer目录 header目录

	当前皮肤 文件后缀改为 vue

	非当前皮肤 文件后缀改为 vuesss

https://segmentfault.com/a/1190000010377156

[全局&工具](pages/common/global.md)  &emsp; [网络&资源](pages/common/net.md)  &emsp; [MySQL](pages/common/mysql.md)

# CSS
[动画](pages/css/main.md?id=动画)
```
elem: 表示任意元素   attr: 任意属性名称   value: 值
elem[attr~=value]  匹配附带attr属性的elem元素，其中attr属性的值是以空格隔开的值列表，value是值列表中的一个独立值
elem[attr^=value]  匹配附带attr属性的elem元素，并且该属性值是以value作为开始的
elem[attr$=value]  匹配附带attr属性的elem元素，并且该属性值是以value作为结束的
elem[attr*=value]  匹配附带attr属性的elem元素，并且该属性值包含value字符

[id]               附带 id 属性的元素
div[class]         附带 class 属性的 div 元素
span[class][title] 即带 class 属性也带 title 属性的 span 元素
p[class=hidden]    附带 class 属性同时值为 hidden 的 p 元素

[class*=col-] {含 row 类名的多类名组合}
[class*=col-] {含 col- 字符}
[class^=col-] {以 col- 开头的类名}
[class$=col-] {以 col- 结尾的类名}

.color-group i:nth-child(1){color: #318ed8;}   序号优先 第1个元素 匹配<i>
.color-group i:nth-of-type(1){color: #318ed8;} 类型优先 元素<i> 匹配第1个
```

# VSCode
###### settings
```js
{
  // 缩进
  "editor.detectIndentation": false, // 默认启用了根据文件类型自动设置tabSize
  "editor.tabSize": 2, // 设置缩进不生效时关闭editor.detectIndentation

  // koroFileHeader 插件
  "fileheader.customMade": { // 头部注释
    "Description":"file content",
    "Version": "2.0"
    "Author":"Ewan",
    "Date":"Do not edit",
    "LastEditors":"Ewan",
    "LastEditTime":"Do not edit"    
  },
  "fileheader.cursorMode": { // 函数注释
    "description":"",
    "param":"",
    "return":"",
    "author":"Ewan"
  }
}
```
###### koroFileHeader
`ctrl + Alt + i`  文件头部注释 [fileheader.customMade](?id=settings)<br>
`ctrl + Alt + t`  在鼠标位置插入相应的注释 [fileheader.cursorMode](?id=settings)<br>

###### 用户片段
文件 > 首选项 > 用户片段
```
{
  "Print to console": {
    "prefix": "log",
    "body": [
      "console.log('$1');",
      "$2"
    ],
    "description": "打印到控制台"
  }
}
```
**prefix** 触发快捷提示的字符串前缀<br>
**body** 代码片段主体<br><br>
**变量** $变量名 调用
```
TM_FILENAME               当前文件名
TM_FILENAME_BASE          当前文件名，不带扩展名
CURRENT_YEAR              当前年份
CURRENT_YEAR_SHORT        当前年份，最后两位数字
CURRENT_MONTH             当前月份数字形式，两位表示
CURRENT_MONTH_NAME        当前月份英文形式，如 July
CURRENT_MONTH_NAME_SHORT  当前月份英文缩写形式，如 Jul
CURRENT_DATE              当前日
CURRENT_DAY_NAME          当前星期，如 Monday
CURRENT_DAY_NAME_SHORT    当前星期缩写形式，如 Mon
CURRENT_HOUR              当前小时，24小时格式，两位表示
CURRENT_MINUTE            当前分钟，两位表示
CURRENT_SECOND            当前秒，两位表示
TM_DIRECTORY              当前文件所属目录的绝对路径
TM_FILEPATH               当前文件的绝对路径
```
　　　　
## JavaScript
### ECMAScript规范 
为宿主环境提供编程实现，Flash-ActionScript、浏览器-Javascript

语法、类型、语句、关键字、保留字、运算符、对象
JavaScript中的类型转换
作用域、作用域链和闭包
函数与函数表达式
arguments对象
call与apply的应用
callee与caller的应用
原型和原型链
面向对象与继承
this的理解
引用/深浅拷贝/JavaScript中的参数传递规则
Object原型中的函数及应用
Object静态方法的应用
Array相关API的应用
Date相关API的应用
异步编程

窗口管理<br>
　　方档规范<br>
　　当前URL信息<br>
　　浏览器信息<br>
　　显示屏信息<br>
　　用户访问信息<br><br>
　　窗口集


[Window](pages/javascript/bom?id=Window) [BOM规范](pages/javascript/bom?id=浏览器对象模型)<br>
　　document: [Document](pages/javascript/bom?id=document) [DOM规范](pages/javascript/bom?id=文档对象模型)<br>
　　　　element:[Element](pages/javascript/bom?id=element)<br>
　　　　title<br>
　　　　cookie<br>
　　　　charset<br>
　　　　referrer<br>
　　　　querySelector [深度优先和先序遍历](pages/common/algorithm.md?id=Depth-First-Search) [querySelectorAll]()<br>
　　　　　'#container'    返回id为container的dom<br>
　　　　　'div#container' 返回id为container的首个div<br>
　　　　　'.foo,.bar'     返回带有foo或者bar样式类的首个元素<br>
　　　　　'a[target]'     查找文档中共包含 "target" 属性的 <a> 标签
　　　　...<br>
　　location: [Location](pages/javascript/bom?id=location)<br>
　　　　protocol<br>
　　　　hostname<br>
　　　　port<br>
　　　　pathname<br>
　　　　hash<br>
　　　　search<br>
　　　　host<br>
　　　　origin<br>
　　　　href<br>
　　　　...<br>
　　navigator: [Navigator](pages/javascript/bom?id=navigator)<br>
　　　　appCodeName<br>
　　　　appName<br>
　　　　appVersion<br> 
　　　　appMinorVersion<br>
　　　　cookieEnabled<br>
　　　　platform<br>
　　　　...<br>
　　screen: [Screen](pages/javascript/bom?id=screen)<br>
　　　　width: 1680<br>
　　　　height: 1050<br>
　　　　availWidth: 1680<br>
　　　　availHeight: 977<br>
　　　　availLeft: 0<br>
　　　　availTop: 23<br>
　　　　...<br>
　　history: [History](pages/javascript/bom?id=history)<br>
　　frames

　　open    



弹出新的浏览器窗口；
移动、关闭浏览器窗口以及调整窗口大小；
提供 Web 浏览器详细信息的定位对象；　
提供用户屏幕分辨率详细信息的屏幕对象；
跳转到另一个页面、前进、后退

DOM(W3C标准)
HTMLDocument
HTMLElement
鼠标事件：click、dbclick、mousedown、mouseup、mouseover、mouseout、mousemove
键盘事件：keydown、keypress、keyup
HTML事件：load、unload、abort、error、select、change、submit、reset、resize、scroll、focus、blur

1、DOMReady
2、DOM操作。增删改查遍历
3、DOM继承层级
5、DOM类型与相应的API
6、事件与事件流
7、浏览器兼容性













原型与原型链
执行上下文与执行上下文栈
作用域与作用域链
闭包
高阶函数

数据类型
基本类型：[String](pages/javascript/data-type?id=string)  Number  Boolean   null  undefined  Symbol
对象类型：
类对象：Object [Array](pages/javascript/data-type?id=array)  Function Map  Set  Date  RegExp  Error
实例对象：{} [] fn



[类型转换](pages/javascript/data-type?id=类型转换)

控制流程
for 可return breake
for in    {} []  i为key
for of    [] Map Set i为value
forEach 遍历装饰元素 
map       遍历返回新元素 原数组不变
filter

call&apply













向导

前端安全 Web Front-End/安全

https://jinnianwushuang.github.io/jinnian-space/dist/spa/#/note



curl -u 'wanyuaning' https://api.github.com/orgs/wmgcuan/repos -d '{"name":"express"}' 
git remote add github https://github.com/wmgcuan/express.git



项目
skin: 1 利用class 命名空间；2 利用CSS预处理生成多套样式；3 利用CSS 变量换肤
## 工具
### GIT&NPM
[GIT仓库&NPM包](tools/git-npm.md) &emsp; [GIT命令](tools/git-npm.md#git命令) &emsp; [Markdown](tools/markdown) &emsp; [Docsify](tools/docsify)
```
1. git init 
2. curl -u 'wanyuaning' https://api.github.com/user/repos -d '{"name":"demo"}'    Wanyuaning... ...   user/repos  orgs/wmgcuan/repos
3. git remote add github https://github.com/wanyuaning/demo.git   wanyuaning/demo.git   wmgcuan/demo.git
4. git push github master:master
```
```
1. package.json  { "name": "@angg/demo" }
2. npm adduser   wanyuaning  wanyuan...ew..  wanyuaning@163.com 
3. npm publish --access public
```












v-for :key【作用】

防抖和节流【区别】【实现】
Set、Map、WeakSet 和 WeakMap 的区别
深度优先遍历和广度优先遍历【实现】
ES5/ES6 的继承除了写法以外还有什么区别
setTimeout、Promise、Async/Await 的区别
Async/Await 如何通过同步的方式实现异步
如何实现一个 new


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



# VUE
[详情](frame/vue/index.md)  

## 路由
```js
{ 
  path: '/settings', 
  // You could also have named views at the top 
  component: UserSettings, 
  children: [{ 
    path: 'emails', 
    component: UserEmailsSubscriptions 
  }, { 
    path: 'profile', 
    components: { 
      default: UserProfile, 
      helper: UserProfilePreview 
    } 
  }] 
}
```
```html
<!-- UserSettings.vue -->
<div> 
  <h1>User Settings</h1> 
  <NavBar/> 
  <router-view/> 
  <router-view name="helper"/> 
</div>
```

## vue-element-admin
扩展图标：下载SVG图标(home.svg)放入 src/icons/svg
  路由里使用 meta: { title: '综合信息', icon: 'home' }


【cli route vuex】

init(events/lifecycle) > beforeCreate > init(injections/reactivety) > created > beforeMount > mounted > beforeUpdate > updated > beforeDestroy > destroyed
```
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
mode: 'history',  //路由模式[hash/history]
routes: [ {path: '/demo', component: Demo} ]
})
<router-link :to="{ name: 'Lottery', params: { id: 1 }}">...</router-link> <router-link :to="{ path:'/lottery',query: {id: 3, name: 'ewan'}}">..</router-link>  this.$router.push({path:''}) 
<router-view></router-view>
```



Object.defineProperty 访问器数据劫持
①通过添加访问器实现数据劫持
②把vm._data代理到vm
③初始化计算属性
④模板编译
⑤单向绑定[M→V]-watcher
⑤单向绑定[M→V]-订阅
⑤单向绑定[M→V]-通知
⑥双向绑定[M→V]
⑥双向绑定[V→M]

router.beforeEach((to, from, next)=>{})
beforeRouteEnter(to, from, next){ next(vm=>{}) }
router.beforeResolve
router.aferEach
beforeCreate
created
beforeMount
mounted
beforeRouteEnter的next回调

beforeRouteUpdate(){}
beforeRouteLeave(){}

activated
deactivated



SSR
https://segmentfault.com/a/1190000013956945





ES6
const 和 let  {}块级作用域
模板字符串：`hello ${name}`
class
class Human extends Animal{
constructor(age){
super()
this._age = age
}
get age (){ return this._age }
set name (value){this._name = value}
static 静态方法
}
promise & async&await

常量    作用域    箭头函数   默认参数    对象代理
解构赋值   模板文本  多行字符串   正则扩展   
数字扩展   Iterator    Set和Map   Generator
函数扩展   Class   Module   Symbol
对象扩展
增强对象文本
Promises对象

Symbol

Object.assign
Array.from

class, extends, super, 
arrow functions, 
template string, destructuring, default, rest arguments

let, const, var

 class, extends, super

async/await

非数组转数组／参数剩余整理
[a,b] = [b,a] 数组顺序交换
解构{x:{b}} = {x:{b:1}}

 (...m) => {}                      rest参数
:let [x, y, z] = [1, 2, 3]      数组解构 x: 1 .  y: 2 .  z:3
let [x, ...y] = [1,2,3,4,5]    x: 1 .  y:[2,3,4,5]
:[...[1,2,3], ...[4,5,6]]        数组的扩展 [1,2,3,4,5,6]
 ...[1,2,3]                           函数的扩展

Symbol: 用相同的字符串对对象属性名或方法进行命名时会发生命名冲突,而使用symbol产生的名字是不同的
应用场景1：使用Symbol来作为对象属性名(key),不怕被覆盖
const NAME = Symbol(), AGE = Symbol()
let obj = {[NAME]: "ewan"}
obj[AGE] = 18
obj.AGE = 20
obj[NAME] // 'ewan'
obj[AGE] // 18
应用场景2：使用Symbol来替代常量
const TYPE_AUDIO = 'AUDIO'     const TYPE_AUDIO = Symbol()
const TYPE_VIDEO = 'VIDEO'     const TYPE_VIDEO = Symbol()
const TYPE_IMAGE = 'IMAGE'     const TYPE_IMAGE = Symbol()
应用场景3：使用Symbol定义类的私有属性/方法
const PASSWORD = Symbol()
class Login {
  constructor(username, password) { this.username = username; this[PASSWORD] = password }
  checkPassword(pwd) { return this[PASSWORD] === pwd }
}
export default Login

import Login from './a'
const login = new Login('admin', '123456')
login.checkPassword('123456')  // true
login.PASSWORD  // oh!no!
login[PASSWORD] // oh!no!
login["PASSWORD"] // oh!no!
注册和获取全局Symbol
const TYPE_AUDIO = 'AUDIO'     const TYPE_AUDIO = Symbol()
const TYPE_VIDEO = 'VIDEO'     const TYPE_VIDEO = Symbol()
const TYPE_IMAGE = 'IMAGE'     const TYPE_IMAGE = Symbol()

Map: 类似于对象。
由于普通对象的key只能是字符串，如果用对象作为键值会被toString转化为字符串"[object Object]，
let obj1={key:1}, obj2={key:2}, obj={}
obj[obj1]='a'    // 将对象obj1作为obj的键值
obj[obj2]='b'    // 由于转化为相同的键值字符串，obj2会覆盖obj1
console.log(obj) // {[object Object]: "b"}
因而新增Map数据类型，它的key可以是任何数据类型  
var m0 = new Map() // 空Map
var obj = {a: 1}
var m = new Map([['a', 100], [obj, 50]]) // 二维数组作为参数
属性 
m.size // 2
方法
m.set('b', 2)    // Map(3) {"a" => 100, {a: 1} => 50, "b" => 2}                              添加新的key-value
m.set({},"obj1") // Map(4) {"a" => 100, {a: 1} => 50, "b" => 2, {} => "obj1"}
m.set({},"obj2") // Map(5) {"a" => 100, {a: 1} => 50, "b" => 2, {} => "obj1", {} => "obj2"}
m.has('b')       // true 
m.get('a')       // 100
m.get(obj)       // 50
m.delete('a')    // true                
m.get('a')       // undefined
m.clear()        // undefined 清除map中所有键值

Set: 类似于数组。数组允许元素重复，Set不允许
var s0 = new Set(); // 空Set
var s = new Set([1, 2, 3, 3]) // Array作为参数，会自动去重
属性  
s.size      // 3
方法
s.add(4)    // Set(4) {1, 2, 3, 4}          添加元素
s.keys()    // SetIterator {1, 2, 3, 4}     返回集合所有的键值
s.values()  // SetIterator {1, 2, 3, 4}     返回集合所有值
s.delete(4) // true                         删除元素
s.values()  // SetIterator {1, 2, 3}
s.clear()   // undefined                    清除集合所有元素
s.values()  // SetIterator {}

Service Worker
Node
npm yarn







HTTP&TCP/IP  三/四次握手
算法
二分法(折半查找法)
二叉树

两次提交
节流防抖
域名访问网页的过程





# 正则表达式

<!-- layout:start:regclass -->
<!-- col:6 -->
  <strong>/i</strong>　不区分大小写
<!-- col:12 -->
  <strong>/g</strong>　全局匹配
<!-- col:6 -->
  <strong>/m</strong>　多行匹配
<!-- layout:end -->

<!-- layout:start:regclass -->
<!-- col:8 -->
  <strong>?</strong>　{0,1}
<!-- col:8 -->
  <strong>+</strong>　{1,}
<!-- col:8 -->
  <strong>*</strong>　{0,}
<!-- layout:end -->
<!-- layout:start:regclass -->
<!-- col:4 -->
  <strong>\d</strong>　[0-9]
<!-- col:4 -->
  <strong>\D</strong>　[^0-9]
<!-- col:4 -->
  <strong>\w</strong>　[0-9a-zA-Z_]
<!-- col:4 -->
  <strong>\W</strong>　[^0-9a-zA-Z_]
<!-- col:4 -->
  <strong>\s</strong>　[ \t\v\n\r\f]
<!-- col:4 -->
  <strong>\S</strong>　[^ \t\v\n\r\f]
<!-- layout:end -->
<!-- layout:start:regclass -->
<!-- col:24 -->
  <strong>.</strong>　通配符[^\n\r\u2028\u2029]，换行符、回车符、行分隔符和段分隔符除外
<!-- layout:end -->

<!-- layout:start -->
<!-- col:4 -->
  惰性匹配
<!-- col:8 -->
  <strong>量词</strong> 后面加个 <strong>?</strong> 实现惰性匹配
<!-- col:12 -->
  {m,n}?　　{m,}?　　??　　+?　　*?
<!-- layout:end -->








香港六合彩 时时彩 11选5 北京赛车 快三 快乐10分

参考2：admin.cdn888.com:82  账号：jishu888  密码：jishu888    菜单增加‘证书管理’

