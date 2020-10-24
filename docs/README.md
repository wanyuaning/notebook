
Snipaste

MUI
IOS证书
HBuilderX  for mac

https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android
h ttps://blog.csdn.net/lilang_9920/article/details/81005345

### 系统  [detail3](pages/system/index)
[Windows](pages/system/windows/index) 
[MAC](pages/system/mac/index) 
[Linux](pages/system/linux/index)

### 环境  [detail3](pages/system/index)
[Node](pages/frame/node.md)
[Adroid](pages/frame/node.md)
[IOS](pages/frame/node.md)

[全局&工具](pages/common/global.md)  &emsp; [网络&资源](pages/common/net.md)  &emsp; [MySQL](pages/common/mysql.md)

# CSS
[动画](pages/css/main.md?id=动画) [选择器](pages/css/main.md?id=选择器) 


# VSCode
[settings](pages/tools/vscode.md?id=settings)
[koroFileHeader](pages/tools/vscode.md?id=koroFileHeader)
[用户片段](pages/tools/vscode.md?id=用户片段)

　　　　
## JavaScript
### ECMAScript规范 [detail](pages/javascript/ecma.md)







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
基本类型：[String](pages/javascript/data-type?id=String)  Number  Boolean   null  undefined  Symbol
对象类型：
类对象：Object [Array](pages/javascript/data-type?id=Array)  Function Map  Set  Date  RegExp  Error
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


[ES6](pages/javascript/ecma.md?id=ES6)










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


# 框架

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
```table
.  通配符[^\n\r\u2028\u2029]，换行符、回车符、行分隔符和段分隔符除外

\d  [0-9]              \D  [^0-9]             匹配任意非数字的字符
\w  [0-9a-zA-Z_]       \W  [^0-9a-zA-Z_]      匹配任意不是字母，数字，下划线，汉字的字符
\s  [ \t\v\n\r\f]      \S  [^ \t\v\n\r\f]     匹配任意不是空白符的字符
\b  a\b \bnice         \B                     匹配不是单词开头或结束的位置(隐式位置) 

?  {0,1}            +  {1,}           *  {0,}

/i  不区分大小写     /g  全局匹配       /m  多行匹配  

取反      \W \S \D [^x]匹配除了x以外的任意字符 !(else|\s) [^aeiou]匹配除了aeiou这几个字母以外的任意字符 
惰性匹配  量词 + ?  实现惰性匹配  {m,n}?　　{m,}?　　??　　+?　　*?


```
例子：
```table dianzhui
/\b(?:(?!(else|\s))[\w\W])+\b/gi  "[1| if] else [1| no] else [1| but] [1| if]" 
/<span[^>]+>/                     "[1| <span title="#">]"
a\b \bnice                        "It's [1| a nice] day today."   
```


