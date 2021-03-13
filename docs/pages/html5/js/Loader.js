let tool = {
  bind: (() => window.addEventListener ? function (e, t, h) {e.addEventListener(t, h, false)} : function (e, t, h) {e.attachEvent("on" + t, h)} )(),
  unbind: (() => window.addEventListener ? function (e, t, h) {e.removeEventListerner(t, h, false)} : function (e, t, h) {e.detachEvent("on" + t, h)})()
}

class Loader{
  #resource = {}
  #total = 0
  #loaded = 0
  #handleProgram = function(rate, id){}
  #handleReady = function(){}
  load(arr){
    let root = this
    root.#total = arr.length
    arr.forEach(src => {
      let img = new Image()
      tool.bind(img, 'load', function(){
        this.onLoad = this.load = null
        root.#resource[this.id] = this
        root.#loaded++
        root.#handleProgram(root.#loaded/root.#total, this.id)
        root.#loaded >= root.#total && root.#handleReady()
      })
      img.id = img.src = src
    })
  }
  get(id){return this.#resource[id]}
  program(fn){this.#handleProgram = fn}
  ready(fn){this.#handleReady = fn}
}

