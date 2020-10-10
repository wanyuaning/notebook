#### 引入less编译：
```
    src/main.js import less from 'less' 
    Vue.use(less)
    <style lang="less">
```
#### 延伸API对接：
```
    import { getToken } from 'api/qiniu'
    const token = this.$store.getters.token;
    getToken(token).then(response => { })
```
#### 引入全局状态管理：
```
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
  v-model="$store.state.test.demo"
  向上
  this.$store.dispatch('test/modifyDemo', '456')
```
#### API对接
```
import { fetchList } from '@/api/article'
```
