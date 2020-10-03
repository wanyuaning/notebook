
<link href="css/main.css" rel="stylesheet"></link>

[全局&工具](common/global.md)  &emsp; [网络&资源](common/net.md)  &emsp; [MySQL](common/mysql.md)


　　　　
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

#### BOM(Browser Object Model)
```
-Window{
  -document
  -frames
  -navigator
  -history
    *length
    +back  +forward  +go(-2)
  -location 
    href:     "http://localhost:9527/#/minioninfo/minion"   
    hash:     "#/minioninfo/minion"
    origin:   "http://localhost:9527"   
    protocol: "http:"
    host:     "localhost:9527"   
    hostname: "localhost"  
    port:     "9527"
    pathname: "/"
  -screen
}
```



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


window




navigator

appCodeName    //浏览器代码名
appName             //浏览器步伐名
appMinorVersion //浏览器补钉版本
cpuClass              //cpu类型x86
platform               //操作体系类型win32
plugins
opsProfile
userProfile
systemLanguage //客户体系语言zh-cn简体中文
userLanguage      //用户语言,同上
appVersion           //浏览器版本(包括 体系版本)
userAgent .          //用户代理头的字符串表示
onLine                  //用户否在线
cookieEnabled    //浏览器是否撑持cookie
mimeTypes
screen
width          //屏幕宽度
height         //屏幕高度
colorDepth //屏幕颜色深度
availWidth  //可用宽度(除去任务栏的高度)
availHeight //可用高度(除去任务栏的高度)
history
frames
external
AddFavorite("地址","标题" ) //把网站新增到保藏夹



Document{

}
通过window.document 属性访问

原型与原型链
执行上下文与执行上下文栈
作用域与作用域链
闭包
高阶函数

数据类型
基本类型：String  Number  Boolean   null  undefined  Symbol
对象类型：
类对象：Object Array  Function Map  Set  Date  RegExp  Error
实例对象：{} [] fn

#### Array
```
shift [unshift push] pop             增删
splice(s,l,N,N,N...])                增删改
sort([fn])  reverse()                改
slice(s,e)                           信息 内容
indexOf(item,s) lastIndexOf(item,s)  信息 位置 
toString() join('*')                 信息 字符
slice() concat([],arr)               拷贝
 
[1,2,3].forEach((e,i,a)=>{a[i]=e*2}) [2,4,6]           子值重写
[1,2,3].map(e=>e*e)                  [1,2,3] > [1,4,9] 映射
[1,2,3].filter(e=>e%2===0)           [1,2,3] > [2]     过滤筛选
[1,2,3].every(e=>e<3)                false             最大验证
[1,2,3].some(e=>e>2)                 true              最小验证
[1,2,7].find(e=>e>2)                 7                 第一个验证值
[1,2,7].findIndex(e=>e>2)            2                 第一个验证索引

new Array(2);                        [,]
new Array(2,3);                      [2,3]

```
#### String
```
  



+ 截取   
  -'Hello'.slice(1,2))      "e"   
'Hello'.substring(1,2)   "e"
'Hello'.substr(2,3))     "llo"
位置 
'Hello'.indexOf('l',1)   2     
'Hello'.indexOf('l',3)   3
'Hello'.lastIndexOf('l') 3
'Hello'.charAt(2)        "l"  子字符
'Hello'.charCodeAt(2)    108  Unicode编码
去空格
'He l lo'.trim()  "He l lo"
' Hello '.trim()  "Hello"
大小写   
'Hello'.toUpperCase() "HELLO"  
'Hello'.toLowerCase() "hello"
'Türkç'.toLocaleUpperCase()) "TÜRKÇ"
'Türkç'.toLocaleLowerCase()) "türkç" 
比较
'a'.localeCompare('b')  -1     
'a'.localeCompare('a')  0
'b'.localeCompare('a')  1
['猫','狗',"鸡"].sort((a, b)=>a.localeCompare(b)) ['猫','狗',"鸡"] > ["狗", "鸡", "猫"]

typeof instanceof toString.call()


split([连接符])  
match(),search(),
replace(),split()
replace(RegExp/字符串,字符串/函数)

String.fromCharCode(65)       "A"
String.fromCharCode(65,66,67) "ABC"
```

类型转换
```
true => 1       false => 0        '' => 0        '4S' => NaN            null => 0        undefined => NaN        {valueOf:()=>1} => 1
false、""、0、NaN、null、undefined   =>  false         " " => true
```
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
# 工具
### GIT&NPM
[GIT仓库&NPM包](tools/git-npm.md) [GIT命令](tools/git-npm.md#git命令)
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

文档对象模型DOM

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


**空格**
|&thinsp;|&#8201;|&#x2009;
|&nbsp;|&#160;|&#xA0;
|&ensp;|&#8194;|&#x2002;
|&emsp;|&#8195;|&#x2003;




HTTP&TCP/IP  三/四次握手
算法
二分法(折半查找法)
二叉树

两次提交
节流防抖
域名访问网页的过程





// window.
var Window = {
    document: {}, // Document
    location: {},
    navigator: {},
    screen: {},
    history: {}, // History
    frames: {},
    external: {},


    // 状态栏
    defaultStatus: '', // 窗口状态栏中的默认文本。
    status: '', // 临时设置窗口状态栏的文本。
    // 窗口位置
    pageXOffset: '', // 设置或返回当前页面相对于窗口显示区左上角的 X 位置。
    pageYOffset: '', // 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。

    innerheight: '', // 返回窗口的文档显示区的高度。
    innerwidth: '', // 返回窗口的文档显示区的宽度。
    outerheight: '', // 返回窗口的外部高度。
    outerwidth: '', // 返回窗口的外部宽度。
    screenLeft: 0,
    screenTop: 23,
    screenX: 0,
    screenY: 23,
    // 其它属性

    name: '', // 设置或返回窗口的名称。
    parent: '', // 返回父窗口。
    top: '', // 返回最顶层的先辈窗口。


    setInterval: function () { },
    setTimeout: function () { },
}

var Location = {
    hash: "",
    host: "www.guancha.cn",
    hostname: "www.guancha.cn",
    href: "https://www.guancha.cn/gongye%C2%B7keji?s=dhgongye%C2%B7keji",
    origin: "https://www.guancha.cn",
    pathname: "/gongye%C2%B7keji",
    port: "",
    protocol: "https:"
}

// window.document.
var Document = {
    body: {
        bgColor: '', //设置或获取对象后面的背景颜色
        link: '', //未点击过的链接颜色
        alink: '', //激活链接(焦点在此链接上)的颜色
        vlink: '', //已点击过的链接颜色
        text: '', //文本色
        innerText: '', //设置body>…/body>之间的文本
        innerHTML: '', //设置body>…/body>之间的HTML代码
        topMargin: '', //页面上边距
        leftMargin: '', //页面左边距
        rightMargin: '', //页面右边距
        bottomMargin: '', //页面下边距
        background: '', //背景图片
        appendChild: () => { },//(oTag) //动态生成一个HTML对象
        onclick: () => { },//=”func()”//鼠标指针单击对象是触发
        onmouseover: () => { },//=”func()”//鼠标指针移到对象时触发
        onmouseout: () => { },//=”func()”//鼠标指针移出对象时触发
    },         //提供对 <body>元素的直接访问。对于定义了框架集的文档，该属性引用最外层的<frameset>。
    cookie: '',      //返回与当前文档有关的所有 cookie。
    title: '',           //返回文档标题等价于HTML的title标签
    domain: '',     //返回当前文档的域名。
    bgColor: '',    //返回页面背景色
    fgColor: '',     //返回前景色(文本颜色)
    linkColor: '',   //未点击过的链接颜色
    alinkColor: '', //激活链接(焦点在此链接上)的颜色
    vlinkColor: '', //已点击过的链接颜色
    URL: '', //设置URL属性从而在同一窗口打开另一网页
    URL: '', //返回当前文档的 URL。
    fileCreatedDate: '', //文件建立日期，只读属性
    fileModifiedDate: '', //文件修改日期，只读属性
    lastModified: '', //返回文档被最后修改的日期和时间。
    fileSize: '', //文件大小，只读属性
    cookie: '', //设置和读出cookie
    charset: '', //返回字符集 简体中文:gb2312

    referrer: '', //返回载入当前文档的文档的 URL。
    styleSheets: '', //返回样式表的集合,返回值CSSStyleSheet[]
    //styleSheets[0].cssRules.style.paddingTop=”10px”//设置样式,样式名去掉连字符,
    //--------------------------------------------------------
    write: () => { }, //动态向页面写入内容
    writeln: () => { }, //等同于 write() 方法，不同的是在每个表达式之后写一个换行符。
    createElement: () => { },//(<Tag>) //用指定标签类型创建一个新的element对象)
    getElementById: () => { },//(ID) //获得指定ID值的对象
    getElementsByName: () => { },//(Name) //获得指定Name值的对象
    getElementsByTagName: () => { }, //返回带有指定标签名的对象集合。

}
var Element = {
    accessKey: '', //设置或返回元素的快捷键。
    attributes: '', // 返回元素属性的集合。
    childNodes: {
        item: () => { },//() 返回 NodeList 中位于指定下标的节点。
        length: '', // 返回 NodeList 中的节点数。
    }, // 返回元素子节点的 NodeList。
    className: '', // 设置或返回元素的 class 属性。
    clientHeight: '', // 返回元素的可见高度。
    clientWidth: '', // 返回元素的可见宽度。
    contentEditable: '', // 设置或返回元素的文本方向。
    dir: '', // 设置或返回元素的文本方向。
    firstChild: '', // 返回元素的首个子。
    hidden: '', //获取或设置hidden属性的存在状态
    id: '', // 设置或返回元素的 id。
    innerHTML: '', // 设置或返回元素的内容。
    isContentEditable: '', // 设置或返回元素的内容。
    lang: '', // 设置或返回元素的语言代码。
    lastChild: '', // 返回元素的最后一个子元素。
    namespaceURI: '', // 返回元素的 namespace URI。
    nextSibling: '', // 返回当前元素之后的兄弟元素
    nodeName: '', // 返回元素的名称。
    nodeType: '', // 返回元素的节点类型。
    nodeValue: '', // 设置或返回元素值。
    offsetHeight: '', // 返回元素的高度。
    offsetWidth: '', // 返回元素的宽度。
    offsetLeft: '', // 返回元素的水平偏移位置。
    offsetParent: '', // 返回元素的偏移容器。
    offsetTop: '', // 返回元素的垂直偏移位置。
    ownerDocument: '', // 返回元素的根元素（文档对象）。
    parentNode: '', // 返回元素的父节点。
    previousSibling: '', // 返回当前元素之前的兄弟元素
    scrollHeight: '', // 返回元素的整体高度。
    scrollLeft: '', // 返回元素左边缘与视图之间的距离。
    scrollTop: '', // 返回元素上边缘与视图之间的距离。
    scrollWidth: '', // 返回元素的整体宽度。
    style: '', // 设置或返回元素的 style 属性。
    tabIndex: '', // 设置或返回元素的 tab 键控制次序。
    tagName: '', // 返回元素的标签名。
    textContent: '', // 设置或返回节点及其后代的文本内容。
    title: '', // 设置或返回元素的 title 属性。
    add: () => { },//(<class>)给元素添加指定的类
    appendChild: () => { },//() 向元素添加新的子节点，作为最后一个子节点。
    cloneNode: () => { },//() 克隆元素。
    compareDocumentPosition: () => { },//() 比较两个元素的文档位置。
    getAttribute: () => { },//() 返回元素节点的指定属性值。
    getAttributeNode: () => { },//() 返回指定的属性节点。
    getElementsByTagName: () => { },//() 返回拥有指定标签名的所有子元素的集合。
    getFeature: () => { },//() 返回实现了指定特性的 API 的某个对象。
    getUserData: () => { },//() 返回关联元素上键的对象。
    hasAttribute: () => { },//() 如果元素拥有指定属性，则返回true，否则返回false。
    hasAttributes: () => { },//() 如果元素拥有属性，则返回 true，否则返回false。
    hasChildNodes: () => { },//() 如果元素拥有子节点，则返回 true，否则false。
    insertBefore: () => { },//(<a>,<b>) 在指定的已有的子节点之前插入新节点。A插到b前
    isDefaultNamespace: () => { },//() 如果指定的 namespaceURI是默认的，则返回true，否则返回false。
    isEqualNode: () => { },//(<a>) 检查a元素是否与当前元素相等。
    isSameNode: () => { },//(a) 检查指定元素是否就是当前元素.
    isSupported: () => { },//() 如果元素支持指定特性，则返回 true。
    normalize: () => { },//() 合并元素中相邻的文本节点，并移除空的文本节点。
    remove: () => { },//(<class>) 从元素移除指定的类
    removeAttribute: () => { },//() 从元素中移除指定属性。
    removeAttributeNode: () => { },//() 移除指定的属性节点，并返回被移除的节点。
    removeChild: () => { },//(a) 从元素中移除子节点。
    replaceChild: () => { },//(a,b) 替换元素中的子节点。
    setAttribute: () => { },//() 把指定属性设置或更改为指定值。
    setAttributeNode: () => { },//() 设置或更改指定属性节点。
    setIdAttribute: () => { },//()
    setIdAttributeNode: () => { },//()
    setUserData: () => { },//() 把对象关联到元素上的键。
    toggle: () => { },//(<class>)如果类不存在就添加它存在就移除它
    toString: () => { },//() 把元素转换为字符串。
}


var Event = {
    type: '', //事件的名称如mouseover 字符串
    target: {} // Element
}





香港六合彩 时时彩 11选5 北京赛车 快三 快乐10分

参考2：admin.cdn888.com:82  账号：jishu888  密码：jishu888    菜单增加‘证书管理’

