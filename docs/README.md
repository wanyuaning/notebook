
[全局&工具](common/global.md)
[网络&资源](common/net.md)
参考2：admin.cdn888.com:82  账号：jishu888  密码：jishu888    菜单增加‘证书管理’
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
Window{
  document
  frames
  navigator
  history
  location
    href: "http://localhost:9527/#/minioninfo/minion"   href = origin+hash = protocol+hostname+port+hash
    origin: "http://localhost:9527"
    protocol: "http:"
    host: "localhost:9527"
    hostname: "localhost"
    port: "9527"
    hash: "#/minioninfo/minion"
    pathname: "/"
  screen
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
增删改：shift [unshift push] pop   -+splice(s,l,增,增,增...]) sort([函数])  reverse()  
信息：内容 slice(s,e)   位置 indexOf(项,s) lastIndexOf(项,s)   字符 toString() join('*') 拷贝 slice() concat([],arr)
 
遍历数组：arr.forEach((e,i,arr)=>{ })
        arr.map(x=>x*2)
最大验证：[1,2].every(e=>e<3)   true
最小验证：[1,2].some(e=>e==2)   true
过滤：[1,2,3,4].filter(e=>e%2===0)  [2,4]
第一个验证值：[1,2,3,4].find(e=>e>2);  3
第一个验证索引：findIndex

var a=[]; var b=a.unshift(1,2);  a: [1, 2]  b: 2
var a=[1,2,3,4]; a.splice(1,2,22,33);  a:[1,22,33,4]
var a=[1,3,2]; var b = a.sort(); b.pop();  a:[1,2,3] b:[1,2]
var a=new Array(2);  a:[,]
var a=new Array(2,3);  a:[2,3]
var a=[1,2,3,4]; var b=a.map(x=>x*2);  b:[2,4,6,8]
var a=[1,2,3,4]; var b=a.forEach(x=>x*2);  b:undefined
var a=[1,2,3,4]; var b=arr.every(e=>e<5);  b:true
var a=[1,2,3,4]; var b=a.filter(e=>e%2===0);  b:[2,4]
var a=[1,2,3,4]; var b=a.find(e=>e>2);  b:3
```
String
字符：   charAt(位置) charCodeAt(位置)  String. fromCharCode(多个字符编码)
空格：   trim()
比较：   localeCompare(字符串) 
转换：   toUpperCase()  toLowerCase()  toLocaleUpperCase()   toLocaleLowerCase()  split([连接符])  
操作：   substring(起点[,终点])   substr(起点[,个数])      replace(RegExp/字符串,字符串/函数)  concat([多个项])    slice(起点[,终点])
位置：   indexOf(项[,起点])  lastIndexOf(项[,起点]) 

typeof instanceof toString.call()

true => 1       false => 0        '' => 0        '4S' => NaN            null => 0        undefined => NaN        {valueOf:()=>1} => 1
false、""、0、NaN、null、undefined   =>  false         " " => true


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
```
引入less编译：
  src/main.js import less from 'less' 
  Vue.use(less)
  <style lang="less">
延伸API对接：
  import { getToken } from 'api/qiniu'
  const token = this.$store.getters.token;
  getToken(token).then(response => { })

引入全局状态管理：
  store/modules/test.js 
    const state = { demo: '123' }
    const mutations = { M_DEMO: (state, value) => { state.demo = value } }
    const actions = { modifyDemo({ commit }, value) { commit('M_DEMO', value) } }
    export default { namespaced: true, state, mutations, actions }
  store/getters.js getters{ testDemo: state => state.test.demo }

  向下
  import { mapGetters } from 'vuex'
  computed: {
    ...mapGetters([
      'testDemo'
    ])
  }
  <img :src="testDemo+'?imageView2/1/w/80/h/80'" />
  向上
  this.$store.dispatch('records/addDomain', '456')



动态加载图片资源
  <img :src="profileData.icon" />
  data{ icon: require('../assets/images/108.png')}
```



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

父触发子类里的方法 
`<Keyboard ref="keyboard"> <button @click="$refs.keyboard.close()">关闭</button>`

**Vue.use(Vuex)**
```
let store = new Vuex.Store({
state: { city: '城市名' },
getters: { getCityFn (state) { return state.city } },
mutations: { setCity (state, name) { state.city = name } },
actions: { setCityName ({commit, state}, name) { commit('setCity', name) } }
})

export default store
this.$store.dispatch("setCityName", this.cityArr[index]) 
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






自我介绍
本人2012年开始前端工作
做过web站点，H5交互应，移动端web开发，框架维护（VUI/Aurora）
MySQL+PHP, JavaScript+Zepto+Fis, 面向对象编程，H5移动端开发，框架开发与维护，Node开发服务
感觉前端技术栈覆盖得还是比较全面的，
最近工作，开发一个六合彩相关的web应用，没来得及上线，遇上疫情


本人2012年由平面设计转前端工作
江西吉安人
场景：web站点，H5交互应用，移动／web混合开发，框架维护（VUI/Aurora）
服务：平安银行／华为
最近工作，开发一个六合彩相关的web应用，没来得及上线，遇上疫情
感觉前端技术栈覆盖得还是比较全面的，
技术部解散，面临求职就业或回国
职业生涯延伸得更长


香港六合彩 时时彩 11选5 北京赛车 快三 快乐10分



