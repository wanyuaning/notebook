// let tool = {
//   bind: (() => window.addEventListener ? function (e, t, h) {e.addEventListener(t, h, false)} : function (e, t, h) {e.attachEvent("on" + t, h)} )(),
//   unbind: (() => window.addEventListener ? function (e, t, h) {e.removeEventListerner(t, h, false)} : function (e, t, h) {e.detachEvent("on" + t, h)})()
// }
/**
 * new Loader({publicPath:'../images/'})
 */

class Loader{
  #resource = {}
  #total = 0
  #loaded = 0
  #loaderror = 0
  #handleProgram = function(rate, id){}
  #handleReady = function(){}
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
        img.onLoad = img.load = null
        root.#resource[this.id] = this
        root.#loaded++
        root.#handleProgram((root.#loaded + root.#loaderror)/root.#total, this.id)
        root.#loaded + root.#loaderror >= root.#total && root.#handleReady()
      })
      tool.bind(img, 'error', function(){
        this.οnerrοr= this.error = null
        root.#loaderror++
        root.#handleProgram((root.#loaded + root.#loaderror)/root.#total, this.id)
        root.#loaded + root.#loaderror >= root.#total && root.#handleReady()
      })
      img.src = this.#publicPath + src
      img.id = src
    })
  }
  get(id){return this.#resource[id]}
  program(fn){this.#handleProgram = fn}
  ready(fn){this.#handleReady = fn}
}

