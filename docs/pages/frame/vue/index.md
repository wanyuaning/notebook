[规范](pages/frame/vue/guifan.md) &emsp; [实践方案](pages/frame/vue/plans.md) &emsp; [全局状态](pages/frame/vue/store.md) &emsp;

nextTick
```
使用场景：
1. 生命周期created中进行的DOM操作
2. 在数据变化后与之相关DOM操作

this.$nextTick(() => {
  // DOM操作
})
```

```link detail
[h3|vue数组更新不渲染页面]
原因： 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：        解决：this.$set(this.arr,"key", 11) 或 this.$forceUpdate() //强制刷新
  1. 利用索引直接设置一个项时，如：vm.items[index] = newValue
  2. 修改数组的长度时，例如：vm.items.length = newLength

[h3|关闭eslint规范]

[h3|自定义全局变量]
➤ [挂载到Vue.prototype中](#pages/frame/vue/plans?id=自定义全局变量)
➤ [按需求调用](#pages/frame/vue/plans?id=自定义全局变量)

[h3|CLI3项目下 配置方案 关联环境]  [Detail](#pages/frame/vue/plans?id=关联环境的配置方案)


```

<ul class="no-list block-list">
  <li>概念</li>
  <li><a href="#">v-for :key作用</a></li>
  <li>子类二</li>
</ul>
<br>
<ul class="no-list block-list">
  <li>原理</li>
  <li><a href="#">双向绑定</a></li>
  <li>虚拟树</li>
</ul>

## Vue.config.js 配置选项 [detail2](pages/frame/vue/guifan.md?id=Vue配置选项)
```
module.exports = {
publicPath: "./", // 基本路径
 outputDir: "dist", // 构建时的输出目录
 assetsDir: "static", // 放置静态资源的目录
 indexPath: "index.html", // html 的输出路径
 filenameHashing: true, //文件名哈希
};
```

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
  <NavBar />
  <router-view />
  <router-view name="helper" />
</div>
```

## vue-element-admin

扩展图标：下载 SVG 图标(home.svg)放入 src/icons/svg
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
① 通过添加访问器实现数据劫持
② 把 vm.\_data 代理到 vm
③ 初始化计算属性
④ 模板编译
⑤ 单向绑定[M→V]-watcher
⑤ 单向绑定[M→V]-订阅
⑤ 单向绑定[M→V]-通知
⑥ 双向绑定[M→V]
⑥ 双向绑定[V→M]

router.beforeEach((to, from, next)=>{})
beforeRouteEnter(to, from, next){ next(vm=>{}) }
router.beforeResolve
router.aferEach
beforeCreate
created
beforeMount
mounted
beforeRouteEnter 的 next 回调

beforeRouteUpdate(){}
beforeRouteLeave(){}

activated
deactivated

```line-8
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<div id="app"> {{ message }} </div>

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

#### 安装

Vue-Cli3.0 独立运行 Vue 文件 图形页面构建项目

```
 $ npm install -g @vue/cli  # 全局安装       npm uninstall @vue/cli -g   # 卸载
 $ vue --version 或 vue -V   # 查看已安装版本

 $ vue create my-project   # 新建项目
 $ cd my-project
 $ npm run serve    # 项目启动
 $ npm run build   # 打包
```

#### 架构 dictionaries

```
1 vue init webpack dictionaries & cd dictionaries & npm run dev
2 建立Git仓库
```

#### 环境配置

```
const path = require('path')
module.exports = {
  publicPath: '/',
  outputDir: 'dist', // 输出文件目录
  assetsDir: 'assets',
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.symlinks(true) //热更新
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      // 将每个依赖包打包成单独的js文件
      let optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      }
      Object.assign(config, { optimization })
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'], //请求本地json
        // 别名配置
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages')
        }
      }
    })
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?是否在构建样式地图，false将提高构建速度
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  parallel: require('os').cpus().length > 1,

  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      // 需要代理的URL标识，这个标识可能是因为区分资源而临时加上的
      '/api': {
        target: process.env.VUE_APP_URL, // 目标 API 地址
        ws: false, // 是否websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '/api/proxy': '' // 标识临时加的时
        }
      }
    },
    // 代理转发配置，用于调试环境
    disableHostCheck: true,
  }
}
```

```
功能
npm install vue-infinite-scroll --save  // 滚动分页

概念&关键词
vuex   router .   axios   生命周期    客户端渲染
weex               跨终端
服务端渲染 .   客户端append性能／seo／传统js脚本执行慢
keep-alive      解决路由转换重新请求数据的问题



props: ['fooMessage']
props: {
    fooA: Number, // 类型检测
    fooB: [String, Number], // String、Number、Boolean、Function、Object、Array、Symbol
    fooC: {
        type: String,
        default: '' // 默认值
    },
    fooD: {
        type: Number,
        required: true, // 是否必填
    },
    fooE: {
        type: Object, // 当类型为Array或Object时default必须是函数返回
        default: function(){
            return { message: 'Hello, world' }
        }
    },
    fooF: {
        // 自定义的验证器
        validator: function(value){
            return value>=0 && value<=100;
        }
    }
}

https://blog.csdn.net/jjb520/article/details/79551943
```

#### 多页开发

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/vue.js"></script>
  </head>
<body>
  <div id="container">
    <div>{{title}}:
      <span v-text="firstName"></span>
      <span v-html="lastName"></span>
    </div>
    <div v-bind:title="fullName"
      v-bind:class="{active: isActive, otherclass: isOtherclass}"
      :class="[isActiveClass, isOtherClass]"
      :class="`ball${item.id}`"
      :style="{color: activeColor, fontSize: fontSize + 'px'}"
      >
    属性绑定：v-bind:title="fullName" ／ 简写：:title="fullName" ／ 表达式：:title="'表达式' + fullName"
    </div>
    <div>
      双向绑定：
      <input v-model.trim ="firstName" />
      <input v-model="lastName" /> ／
      计算属性：
      {{fullName}} ／
      帧听&过滤器：
      {{nameChangeCount | decimal}}
    </div>
    <div>
      <input v-model="todoListAddValue" />
      <!-- 事件: @click="handleClick"
                @click="handleClick($event, 1)"  带参
                v-on:click="handleClick"
                v-on:click.stop       修饰：阻止冒泡
                v-on:click.prevent    修饰：阻止默认事件
                v-on:click.self       修饰：只对绑定标签有效
                v-on:click.once       修饰：只作用一次
                v-on:keyup.enter      修饰：捕获特定的键
                v-on:keyup.tab
                v-on:keyup.delete
                v-on:keyup.esc
                v-on:keyup.space
                v-on:keyup.up
                v-on:keyup.down
                v-on:keyup.left
                v-on:keyup.right-->
      <button @click="todoListAdd">添加</button>
      <button @click="handleClick">隐藏列表</button>
    </div>
    <!-- v-if:是否渲染  v-show:是否显示-->
    <ul v-if="show">
      <!-- 父向子传参:content ／:index-->
      <!-- 子向父传参:this.$emit('del', this.index) @del="todoListDel"-->
      <todo-item
        v-for="(item, index) of todoList" :key="index"
        :content="item"
        :index="index"
        @del="todoListDel">
        <span solt="soltname"></span>
      </todo-item>
    </ul>
  </div>
  <script>
  // 全局组件
  // Vue.component('todo-item', {
  //   template: '<li>ddd</li>'
  // })
  // 局部组件
  var TodoItem = {
    props: ['content', 'index'],
    template: '<li @click="handleDel"><solt id="soltname"/>{{content}}</li>',
    methods: {
      handleDel: function () { this.$emit('del', this.index) }
    }
  }

  new Vue({
    el: "#container", // 挂载点
    data: {
      title: "SB",
      firstName: '王',
      lastName: '样',
      nameChangeCount: 0,
      show: true,
      todoList: [],
      todoListAddValue: 'hello'
    },
    // 注删局部组件
    components: {
      'todo-item': TodoItem
    },
    // 初始化
    mounted () {
      this.$nextTick(() => {})  // DOM更新是异步的，依赖DOM数据的操作应放在$nextTick发生后  
    },
    // 方法集
    methods: {
      handleClick: function () { this.show = !this.show },
      todoListAdd: function () { this.todoList.push(this.todoListAddValue) },
      todoListDel: function (index) { this.todoList.splice(index, 1) }
    },
    // 过滤器
    filters: {
      decimal: function (value) { return value.toFixed(2) }
    },
    // 计算属性
    computed: {
      fullName: function () { return this.firstName + ' ' + this.lastName },
      ssl: {
        get: function(){ return {1: '禁用', 2: '启用', 3: '强制'}[this.sslIndex] },
        set: function(val){ this.sslIndex = val }
      }
    },
    // 帧听器
    watch: {
      // 数据属性
      firstName: function () { this.nameChangeCount ++ },
      // 计算属性
      fullName: function () { this.nameChangeCount ++ },
      "status": {
        deep: true, // 是否深入监听
        immediate: true, // 是否立即执行handler默认false
        handler: function (status) { }
      }
    }
  })
  </script>
</body>
</html>
```

#### 单页应用

```
<template>
<div>
<Counter></Counter>
</div>
</template>

import Vue from 'vue'
import vuex from 'vuex'
import { mapState } from 'vuex' // vuex解决计算属性重复冗余
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

import Counter from './components/counter.vue' // 组件


Vue.use(vuex)
const store = new vuex.Store(参考Vuex)


new Vue({
el: '#app',
store,
// 组件
components: {
Counter
},
// 计算属性
computed: {
count () {
return this.$store.state.count
},
...mapState({
count: state => state.count
}),
...mapGetters({
//
})
},
// 方法集
methods: {
increment () {
this.$store.commit('increment')
},
...mapActions({
//
})
}
})

<style lang="less">
@import url("../static/pxvalue");
@import url("https://at.alicdn.com/t/font_883018_5qscag2rr67.css");
@abc: #888888;
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app{
  height: 100%;
}
</style>
```

#### VUE-CLI

```
1 sudo npm install -g vue-cli
2 vue init webpack project-name
3 cd project-name
4 npm run dev




渐进增强


使用less
npm install --save less less-loader
main.js
import less from 'less'
Vue.use(less)




创建了一个Vue-cli项目
1 cd hello
2 vue init webpack goods-mall  (npm init )
3 cd goods-mall
4 curl -u 'wanyuaning' https://api.github.com/user/repos -d '{"name":"goods-mall"}'
    git remote add origin https://github.com/wanyuaning/goods-mall.git
    git remote -v
5 git add . /git commit -m "First Commit" / git push origin master

路由：参考vue-router
插槽Slot
bread.vue
<template>
<nav>
<!--未命名为默认-->
<a href="/">Home</a><slot></slot><slot name="aa"></slot>
</nav>
</template>
调用
<nav-bread>
<span>Goods</span><span slot="aa">test</span>
</nav-bread>

开发接口模拟
build/webpack-dev-conf.js
// 第一步 const portfinder = require('portfinder')后添加
const express = require('express')
const app = express()//请求server
var goodsData = require('./../mock/goods.json')//加载本地数据文件
var apiRoutes = express.Router()
app.use('/api', apiRoutes)//通过路由请求数据
// 第二步 devServer里面添加
before(app) {
app.get('/api/goods', (req, res) => {
res.json({
errno: 0,
data: goodsData
})//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
})
}








https://www.imooc.com/video/12299 .  ①②③④⑤⑥⑦⑧⑨⑩
http://so.tv.sohu.com/mts?box=1&wd=Vue%E5%85%A8%E6%96%B9%E4%BD%8D%E8%A7%A3%E6%9E%90%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B


简单开发
① <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
② var vm = new Vue({ el: '#demo', data: {}, methods: {} })
或 new Vue({
el: '#demo',
data: {
a: 1,
b: []
},
methods: {
doSomething: function(){
this.a++
}
},
watch: {
'a': function(val, oldVal){
console.log(val, oldVal)
}
}
生命周期钩子
})


模块化开发(npm安装)
参考vue-cli


生命周期
名称                          状态描述                                 应用
beforecreated：      el 和 data 并未初始化            loading事件
created:完成了        data 数据的初始化，el没有    结束loading，还做一些初始化，实现函数自执行
beforeMount：        完成了 el 和 data 初始化        在这发起后端请求，拿回数据，配合路由钩子做一些事情
mounted ：              完成挂载                                 你确认删除XX吗？
destoryed ：当前组件已被删除，清空相关内容



合计
:summary-method="getSummaries"
show-summary

el: '#app',
    props: {
      getSummaries(param) {
        const { columns, data } = param;    // 解构param
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) { sums[index] = '合计'; return }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              return prev + curr;
            }, 0);
          } else {
            sums[index] = 'N/A';
          }
        });
        if(!this.countAmount) this.countAmount = sums[3];
        return sums;
      }
    },


如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个keep-alive指令
<component :is='curremtView' keep-alive></component>


 keepAlive
使用一？

1. 路由的meta标签中设置keepAlive属性为true
src/router/index.js
{
path: '/area/:id',
name: 'Area',
component: () => import(/* webpackChunkName: "about" */ '../views/Area.vue'),
meta: {
title: '区域',
keepAlive: true // 此属性可以在全局守卫
}
}

2. 在需要缓存的router-view组件上包裹keep-alive组件

<keep-alive>
<router-view v-if='$route.meta.keepAlive'></router-view>
</keep-alive>

使用二
<keep-alive include="Profile,ProfileHistory,ProfileZoushi,ProfileTouzhu,ProfilePankou,ProfileGuize">
<router-view />
</keep-alive>
组件里的生命周期勾子
activated () {console.log('history activated')
var arr = this.$store.state.catalogueChildrenArr || [];
if(arr.length === 0) arr.push({id:'', name:''})
this.catalogueChildrenArr = arr;
this.$refs.categoryselector.init({value:arr[0].id, name: arr[0].name})
}


注：vue: "^2.6.11",vue-router: "^3.1.5"使用时完成上两步已经有了滚动定位
滚动定位缓存
创建router实例时加上scrollBehavior方法
src/router/index.js
const router = new VueRouter({
mode: 'history',
base: process.env.BASE_URL,
routes,
scrollBehavior (to, from, savedPosition) {
if (savedPosition) {
return savedPosition
} else {
return { x: 0, y: 0 }
}
}
})


选择性缓存
由于有些情况下需要缓存有些情况下不需要缓存，可以在缓存的组件里的路由钩子函数中做判断

beforeRouteLeave (to, from, next) {
this.loading = true
if (to.path === '/goods_detail') {
from.meta.keepAlive = true
} else {
from.meta.keepAlive = false
// this.$destroy()
}
next()
}


排除与包含
注：Lottery为Lottey组件的name属性
<keep-alive exclude="Lottery">
<router-view/>
</keep-alive>



注：当项目只有一种状态需要缓存，可以考虑使用这种方法。有局限：
1.第一次从A列表页跳到B详情页，再回来并没有缓存，后面再进入B详情页才会被缓存
2.A分类页选中一个分类跳到B列表页，再从B列表页跳往C详情页，此时会缓存这个状态，并且以后再从A分类页的其他分类跳到B列表页都不会重新被缓存，以至于每次从C详情页返回B列表页都会呈现第一次缓存的状态；



```
