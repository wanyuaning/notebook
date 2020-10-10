
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