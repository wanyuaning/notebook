// let tool = {
//   bind: (() => window.addEventListener ? function (e, t, h) {e.addEventListener(t, h, false)} : function (e, t, h) {e.attachEvent("on" + t, h)} )(),
//   unbind: (() => window.addEventListener ? function (e, t, h) {e.removeEventListerner(t, h, false)} : function (e, t, h) {e.detachEvent("on" + t, h)})()
// }
/**
 * new Loader({publicPath:'../images/'})
 */

class Loader{
  #resource = {}
  #resourceArr = []
  #total = 0
  #loaded = 0
  #loaderror = 0
  #handleProgram = function(rate, id){}
  #handleReady = function(){}
  #handleError = function(err){console.log(err)}
  #publicPath = ''
  /**
   * {publicPath:'images/'}
   */
  constructor(options){
    options && options.publicPath && (this.#publicPath = options.publicPath)
  }
  load(arr){
    let root = this
    root.#total = arr.length
    arr.forEach(src => {      
      let img = new Image()      
      tool.bind(img, 'load', function(){
        console.log('加载完成',this);
        
        img.onLoad = img.load = null
        root.#resource[this.id] = this
        root.#loaded++
        root.#handleProgram((root.#loaded + root.#loaderror)/root.#total, this.id)
        root.#loaded + root.#loaderror >= root.#total && root.#handleReady(root.#resourceArr)
      })
      tool.bind(img, 'error', function(err){
        this.οnerrοr= this.error = null
        root.#loaderror++
        root.#handleProgram((root.#loaded + root.#loaderror)/root.#total, this.id)
        root.#loaded + root.#loaderror >= root.#total && root.#handleError(err)
      })      
      img.src = src.slice(0,4) == 'http' ? src : this.#publicPath + src
      //img.crossOrigin = 'anonymous'
      img.id = src
      root.#resourceArr.push(img)
    })
  }
  getBase64(url) {
    return new Promise((resolve, reject) => {
      //window.URL = window.URL || window.webkitURL
      const xhr = new XMLHttpRequest()
      xhr.open("get", url, true)    
      xhr.responseType = "blob" // 至关重要
      xhr.onload = function () {
        if (this.status == 200) {        
          const blob = this.response //得到一个blob对象        
          const oFileReader = new FileReader() // 至关重要
          oFileReader.onloadend = function (e) {
            const img = new Image()
            img.onload = function(){ resolve(this) }
            img.src = e.target.result
          }
          oFileReader.readAsDataURL(blob)
        }
      }
      xhr.send()
    })    
  }
  get(id){return this.#resource[id]}
  program(fn){this.#handleProgram = fn}
  ready(fn, err){
    fn && (this.#handleReady = fn)
    err && (this.#handleError = err)
  }
}

