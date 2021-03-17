class Sprite{
  #CHILDREN   = {}
  #TRANSFORM  = {x: 0, y: 0, scale: [1, 1], rotate: 0}
  #TWEEN      = {x: 0, y: 0, scale: [1, 1], rotate: 0}
  #autoWidth  = true
  #autoHeight = true
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

  translate  (x, y){let T = this.#TRANSFORM; T.x += x; T.y += y}
  translateTo(x, y){let T = this.#TRANSFORM; T.x = x; T.y = y}
  rotate  (deg){this.#TRANSFORM.rotate += deg}
  rotateTo(deg){this.#TRANSFORM.rotate = deg}
  scale  (x, y){let T = this.#TRANSFORM; T.scale[0] += x; T.scale[1] += y}
  scaleTo(x, y){let T = this.#TRANSFORM; T.scale[0] = x; T.scale[1] = y}

  update(){

  }
  draw(){
    let {x, y, width, height, scale, rotate, translate} = this.#o
    stage.drawRect(x + translate[0], y + translate[1], width * scale[0], height * scale[1],{fillStyle:'#f00'})
  }
  addEventListener(event, fn){
    window.addEventListener(event, fn);
  }
}