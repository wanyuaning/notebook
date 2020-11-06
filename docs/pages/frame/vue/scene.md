#### 使用clipboard
`npm install clipboard --save`
mian.js
```
import Clipboard from 'clipboard'
// 注册到vue原型上
Vue.prototype.Clipboard = Clipboard
```
使用
```
<span data-clipboard-action="copy" class="cobyOrderSn" :data-clipboard-text="orderData.orderSn" @click="copyLink">{{orderData.orderSn}}</span>
copyLink() {
    let clipboard = new this.Clipboard(".cobyOrderSn");
    clipboard.on('success', function () {});
    clipboard.on('error', function () {});
}

<input v-model="$store.state.user.cn_alias" id="cn-alias">
<img src= "../assets/images/copy.png" title="复制" id="btn-cn-alias" data-clipboard-action="copy" data-clipboard-target="#cn-alias">
mounted(){
    const clipboard = new this.Clipboard('#btn-cn-alias')
    clipboard.on('success', function(e) {})
    clipboard.on('error', function(e) {})
}

```