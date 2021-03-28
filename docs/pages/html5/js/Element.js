function getParent(ele){
  let parent = ele.parent
  parent = parent ? getParent(parent) : ele
  return parent && parent.type === 'SCENE' ? parent : null
}
/**
 * ▇元素基类▇
 * 属性：type/children/parent/data
 * 方法：addChild/appendTo
 */
class Element{  
  constructor(type){
    this.type = type
    this.data = {}
    this.parent = null
    this.children = []
  }
  addChild(child){
    if (!(child instanceof Element)) {
      console.error(' Unknown parameter: child')
      return
    } 
    child.parent = this
    this.children.push(child)
  }
  appendTo(parent){
    this.parent = parent
    parent.children.push(this)
  }
}

/**
 * ▇场景▇
 * 属性：type/children/name
 * 方法：addChild
 *       update/in/out
 */
class Scene extends Element{
  constructor(name){
    super('SCENE')
    delete this.parent
    delete this.data
    delete this.appendTo
    this.name = name 
  }
  update(){
    this.children.forEach(e => {
    })
  }
  in(){}
  out(){}
}

/**
 * ▇精灵元素▇
 * 属性：type/children/parent/data
 * 方法：addChild/appendTo
 *      translate/translateTo/rotate/rotateTo/scale/scaleTo/update
 */
class Sprite extends Element{
  #TRANSFORM  = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0}
  #TWEEN      = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0}
  #timerX
  #timerY
  #timerR
  constructor(x, y, width, height, options, transform, config){
    super('Sprite')
    this.data = {x, y, width, height, options, transform, config}
    this.data.children = this.children
  }
  translate  (x, y){
    let T = this.#TRANSFORM; 
    if (x) {T.x += x; this.#timerX = new Date().getTime()}
    if (y) {T.y += y; this.#timerY = new Date().getTime()}
  }
  translateTo(x, y){
    let T = this.#TRANSFORM;  
    if (T.x !== x) {T.x = x; this.#timerX = new Date().getTime()}
    if (T.y !== y) {T.y = y; this.#timerY = new Date().getTime()}
  }
  rotate  (deg){this.#TRANSFORM.rotate += deg}
  rotateTo(deg){this.#TRANSFORM.rotate = deg}
  scale  (x, y){let T = this.#TRANSFORM; T.scale[0] += x; T.scale[1] += y}
  scaleTo(x, y){let T = this.#TRANSFORM; T.scale[0] = x; T.scale[1] = y}
  update(){
    let children = this.children, transform = this.#TRANSFORM, tween = this.#TWEEN, now = new Date().getTime()
    //console.log(transform.x,'-', tween.x)
    transform.x !== tween.x && (tween.x = tweens.runDefault(now - this.#timerX, 0, transform.x, 10000))
    transform.y !== tween.y && (tween.y = tweens.runDefault(now - this.#timerY, 0, transform.y, 10000))
    transform.scaleX !== tween.scaleX && (tween.scaleX = tweens.runDefault(now - this.#timerX, 1, transform.scaleX, 1000))
    transform.scaleY !== tween.scaleY && (tween.scaleY = tweens.runDefault(now - this.#timerY, 1, transform.scaleY, 1000))
    transform.rotate !== tween.rotate && (tween.rotate = tweens.runDefault(now - this.#timerR, 0, transform.scaleR, 1000))
    return children
  }
}

/**
 * ▇Shape元素▇
 * 属性：type/parent/data/config
 * 方法：appendTo
 */
class Rect extends Element{
  constructor(x, y, width, height, options, config){
    super('Rect')
    delete this.children
    delete this.addChild
    this.data = {x, y, width, height, options}
    this.config = config
  }  
}
class Circle extends Element{
  constructor(x, y, r, options, config){
    super('Circle')
    delete this.children
    delete this.addChild
    this.data = {x, y, r, options}
    this.config = config
  }  
}
class Polygon extends Element{
  constructor(points, options, config){
    super('Polygon')
    delete this.children
    delete this.addChild
    this.data = {points, options, config}
    this.config = config
  } 
}





