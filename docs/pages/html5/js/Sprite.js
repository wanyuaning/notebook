class Sprite{
  #CHILDREN   = {}
  #TRANSFORM  = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0}
  #TWEEN      = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0}
  #autoWidth  = true
  #autoHeight = true
  #startTimeX
  #startTimeY
  #startTimeSX
  #startTimeSY
  #startTimeR
  constructor(x, y, width, height, origin){
    this.x = x || 0
    this.y = y || 0
    this.width = width || 0                                                                                                     
    this.height = height || 0 
    this.origin = origin || [0, 0]
    width && (this.#autoWidth = false) 
    height && (this.#autoHeight = false)
  }
  addChild(name, child){
    let tf = this.#TRANSFORM
    this.#autoWidth && (this.width = Math.max(this.width, child.x + child.width))
    this.#autoHeight && (this.height = Math.max(this.height, child.y + child.height))
    this.#CHILDREN[name] = child
  }
  delChild(name){/*递归删除 之后补充*/delete this.#CHILDREN[name]}

  translate  (x, y){
    let T = this.#TRANSFORM; 
    if (x) {T.x += x; this.#startTimeX = new Date().getTime()}
    if (y) {T.y += y; this.#startTimeY = new Date().getTime()}
  }
  translateTo(x, y){
    let T = this.#TRANSFORM;  
    if (T.x !== x) {T.x = x; this.#startTimeX = new Date().getTime()}
    if (T.y !== y) {T.y = y; this.#startTimeY = new Date().getTime()}
  }
  rotate  (deg){this.#TRANSFORM.rotate += deg}
  rotateTo(deg){this.#TRANSFORM.rotate = deg}
  scale  (x, y){let T = this.#TRANSFORM; T.scale[0] += x; T.scale[1] += y}
  scaleTo(x, y){let T = this.#TRANSFORM; T.scale[0] = x; T.scale[1] = y}

  update(){
    let children = this.#CHILDREN, transform = this.#TRANSFORM, tween = this.#TWEEN, now = new Date().getTime()
    console.log(transform.x,'-', tween.x)
    transform.x !== tween.x && (tween.x = tweens.run(now - this.#startTimeX, 0, transform.x, 10000))
    transform.y !== tween.y && (tween.y = tweens.run(now - this.#startTimeY, 0, transform.y, 10000))
    transform.scaleX !== tween.scaleX && (tween.scaleX = tweens.run(now - this.#startTimeSX, 1, transform.scaleX, 1000))
    transform.scaleY !== tween.scaleY && (tween.scaleY = tweens.run(now - this.#startTimeSY, 1, transform.scaleY, 1000))
    transform.rotate !== tween.rotate && (tween.rotate = tweens.run(now - this.#startTimeR, 0, transform.scaleR, 1000))
  }
  draw(){
    //let {x, y, width, height, scale, rotate, translate} = this.#o
    //stage.drawRect(x + translate[0], y + translate[1], width * scale[0], height * scale[1],{fillStyle:'#f00'})
    let tween = this.#TWEEN
    stage.drawRect(this.x + tween.x, this.y + tween.y, 50, 50,{fillStyle:'#f00'})
  }
  addEventListener(event, fn){
    window.addEventListener(event, fn);
  }
}














