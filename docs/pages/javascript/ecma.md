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
```tree link
[Window](pages/javascript/bom?id=Window) [BOM规范](pages/javascript/bom?id=浏览器对象模型)
  document: [Document](pages/javascript/bom?id=document) [DOM规范](pages/javascript/bom?id=文档对象模型)
    element:[Element](pages/javascript/bom?id=element)
    title
    cookie
    charset
    referrer
    querySelector [深度优先和先序遍历](pages/common/algorithm.md?id=Depth-First-Search) [querySelectorAll]()
  　  '#container'    返回id为container的dom
      'div#container' 返回id为container的首个div
      '.foo,.bar'     返回带有foo或者bar样式类的首个元素
      'a[target]'     查找文档中共包含 "target" 属性的 a 标签
    ...
  location: [Location](pages/javascript/bom?id=location)  【[编码&解码](pages/javascript/bom?id=location) [解析search](pages/javascript/bom?id=location)】
    protocol
    hostname
    port
    pathname
    hash
    search
    host
    origin
    href
    ...
  navigator: [Navigator](pages/javascript/bom?id=navigator)
    appCodeName
    appName
    appVersion 
    appMinorVersion
    cookieEnabled
    platform
    ...
  screen: [Screen](pages/javascript/bom?id=screen)
    width: 1680
    height: 1050
    availWidth: 1680
    availHeight: 977
    availLeft: 0
    availTop: 23
    ...
  history: [History](pages/javascript/bom?id=history)
  frames

  open 
```