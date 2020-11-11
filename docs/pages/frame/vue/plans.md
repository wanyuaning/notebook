
#### 复制粘贴
```
1. 安装npm i clipboard --save

2. 挂载到VUE原型
    [b|src/main.js]
    import [cc|Clipboard] from 'clipboard';
    Vue.prototype.[b|Clipboard] = [cc|Clipboard];  // 注册到vue原型上
3. 使用
    <img src="" @click="[cg b|handleCopy]" id="[ch b|ID]" data-clipboard-target="#[ci b|TARGET]" data-clipboard-action="copy" title="复制">
    <div id="[ci b|TARGET]">[cc|123456]</div>
    [cg b|handleCopy](){
        const clipboard = new this.[b|Clipboard]('#[ch b|ID]')
        clipboard.on('success', function(e) { that.$message({message: '复制成功', type: 'success'}); e.clearSelection()})
        clipboard.on('error', function(e) { that.$message({message: '复制失败', type: 'warning' })})
    }    
```
#### 动态加载图片资源
```
  <img :src="icon" />
  data{ icon: require('../assets/images/icon.png') }
```
#### 图片加载失败后设置默认图片
```
<img  :src="$store.state.user.avatar" :onerror="avatarLoadError()" ref="avatar"/>
methods: {
    avatarLoadError(){
        this.$nextTick(function(){
            const img = this.$refs.avatar
            img.src = require('../assets/images/avatar-default.png')
            img.onerror=null
        })
    }
}

```
#### 父触发子类里的方法 
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
```
[h3|vue数组更新不渲染页面]
原因： 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：        解决：this.$set(this.arr,"key", 11) 或 this.$forceUpdate() //强制刷新
  1. 利用索引直接设置一个项时，如：vm.items[index] = newValue
  2. 修改数组的长度时，例如：vm.items.length = newLength

[h3|关闭eslint规范]
```

#### 自定义全局变量
```
➤ 挂载到Vue.prototype中
    ◌ [b|src/conf/global.js]
        const host = 'localhost:8080'
        export [cg|default{] [ci b|host] [cg|}]
    ◌ [b|src/main.js]
        import [cg|O] from './conf/global.js'   //注意文件路径，实际路径以项目目录结构为准
        Vue.prototype.$O = [cg|O];
    ◌ [b|使用]
        export default {
            data(){
                return{
                    global: this.$O
                }
            },
            methods:{
                clickMe(){
                    console.log(this.$O.[ci b|host])
                }
            }
        }
➤ 按需求调用
    ◌ [b|src/utils/auth.js]
        import Cookies from 'js-cookie'
        const TokenKey = 'Admin-Token'
        export function [cg b|getToken]() { return Cookies.get(TokenKey) }
        export function setToken(token) { return Cookies.set(TokenKey, token) }
        export function removeToken() { return Cookies.remove(TokenKey) }
    ◌ [b|使用]
        import { [cg b|getToken] } from '@/utils/auth'
        export default {
            created() { this.token = [cg b|getToken]() }
        }
```

#### 关联环境的配置方案
```link
1.  [b|在根目录下,新建各个环境的text文件]  [文档](https://cli.vuejs.org/zh/guide/mode-and-env.html)
    [b|.env.development]
    ENV = 'development'                      // 只是一个标志 
    [cg b|VUE_APP_]BASE_API = '111'   // 定义全局变量必须以VUE_APP_开头
    [b|.env.production]
    ENV = 'production'          
    [cg b|VUE_APP_]BASE_API = '000'  // 定义全局变量必须以VUE_APP_开头  
    [b|].env.staging]
    NODE_ENV = production

2. [b|场景命令中加上 [c9|--mode] 参数]
    package.json/"scripts": {
        "dev": "vue-cli-service serve [ci b|--mode development]",
        "build:prod": "vue-cli-service build [cj b|--mode production]"
    }
3 [b|使用]
    export default {
        created () {
            console.log(process.env.[cg b|VUE_APP_]BASE_API ) 
        }
    }

```