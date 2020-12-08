


```
[CLASS cc none]
➤ 通过添加访问器实现数据劫持
➤ 把vm._data代理到vm
➤ 初始化计算属性
➤ 模板编译
➤ 单向绑定[M→V]-watcher
➤ get[M→V]-订阅
➤ set[M→V]-通知
➤ 双向绑定[M→V]
➤ 双向绑定[V→M]

function Mvvm (options) {
  this.$options = options
  var data = this._data = this.$options.data
  // ①通过添加访问器实现数据劫持
  observe(data)
  // ②把vm._data代理到vm
  for (let i in data) {
    Object.defineProperty(this, i, {
      enumerable: true,
      get () { return this._data[i] },
      set (newVal) {
        this._data[i] = newVal
      }
    })
  }
  //③初始化计算属性
  initComputed.call(this)

  // ④模板编译
  new Compile(options.el, this)
}
function initComputed () {
  let vm = this
  let computed = this.$options.computed
  Object.keys(computed).forEach(function (key) {
    Object.defineProperty(vm, key, {
      get: typeof computed[key] === 'function' ? computed[key] : computed[key].get,
      set () {

      }
    })
  })
}
// ④模板编译
function Compile (el, vm) {
  vm.$el = document.querySelector(el)
  let fragment = document.createDocumentFragment()
  while (child = vm.$el.firstChild) {
    fragment.appendChild(child)
  }
  let reg = /\{\{(.*)\}\}/ // 暂时不支持{{age}}{{age}}，会得到age}}{{age
  function replace (nodes) {
    Array.from(nodes.childNodes).forEach((node) => {
      let text = node.textContent
      if (node.nodeType === 3 && reg.test(text)) {
        //console.log(RegExp.$1)
        let exp = RegExp.$1
        let arr = exp.split('.')
        let val = vm
        arr.forEach((key) => {
          val = val[key]
        })
        node.textContent = text.replace(reg, val)
        // ⑤单向绑定[M→V]-watcher
        let watcher = new Watcher(vm, exp, function (newVal) {
          node.textContent = text.replace(reg, newVal)
        })
      }
      // ⑥双向绑定
      if (node.nodeType === 1) {
        let nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
          let name = attr.name
          let exp = attr.value
          if (name.indexOf('v-') == 0) {
            let val = vm
            let arr = exp.split('.')
            arr.forEach(key => {
              val = val[key]
            })
            node.value = val
            // ⑥双向绑定[M→V]
            new Watcher(vm, exp, function (newVal) {
              node.value = newVal
            })
            // ⑥双向绑定[V→M]
            node.addEventListener('input', function (e) {
              let newVal = e.target.value
              var modelTarget = vm
              let arr = exp.split('.')
              let last = arr.length - 1
              arr.forEach((key, index) => {
                if (last === index) {
                  modelTarget[key] = newVal
                } else {
                  modelTarget = modelTarget[key]
                }
              })

            })
          }
        })
      }
      if (node.childNodes) {
        replace(node)
      }
    })
  }
  replace(fragment)
  vm.$el.appendChild(fragment)
}

function Observe (data) {

  for (let i in data) {
    let val = data[i]
    // 递归观察成员子值
    observe(val)
    let dep = new Dep()
    Object.defineProperty(data, i, {
      enumerable: true,
      get: function () {
        // ⑤单向绑定[M→V]-订阅
        Dep.target && dep.addSub(Dep.target)
        return val
      },
      set (newVal) {
        if (newVal === val) return
        val = newVal
        // ⑤单向绑定[M→V]-通知
        dep.notify()
      }
    })
  }
}
// ①通过添加访问器实现数据劫持
function observe (data) {
  // 递归观察成员子值 无子值则忽略
  if (typeof data !== 'object') return
  return new Observe(data)

}


// 发布订阅模式，用于耦合get订阅 set通知 compile模板watcher
function Dep () { this.subs = [] }
Dep.prototype.addSub = function (sub) {
  this.subs.push(sub)
}
Dep.prototype.notify = function () {
  this.subs.forEach(sub => sub.update())
}

function Watcher (vm, exp, fn) {
  this.fn = fn
  this.vm = vm
  this.exp = exp
  Dep.target = this
  let val = vm\
  let arr = exp.split('.')
  arr.forEach(function (key) {
    val = val[key]
  })
  Dep.target = null
}
Watcher.prototype.update = function () {
  let newVal = this.vm
  let arr = this.exp.split('.')
  arr.forEach(key => {
    newVal = newVal[key]
  })
  console.log(this.exp)
  this.fn(newVal)
}



```