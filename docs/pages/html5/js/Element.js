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
 * ▇场景元素▇
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
  in(){}
  out(){}
  update(){
    this.children.forEach(e => {
    })
  }
}

/**
 * ▇精灵元素▇
 * 属性：type/children/parent/data
 * 方法：addChild/appendTo
 *      translate/translateTo/rotate/rotateTo/scale/scaleTo/update
 */
class Sprite extends Element{
  
  #timerX
  #timerY
  #timerR
  constructor(x, y, width, height, options, transform, config){
    super('Sprite')
    transform = Object.assign({x, y, translateX: 0, translateY: 0, scaleX: 1, scaleY: 1, rotate: 0, origin: 1}, transform || {})
    this.data = {x, y, width, height, options, transform, config}
    this.data.children = this.children
    this.TRANSFORM = {
      transform,
      _transform: JSON.parse(JSON.stringify(transform)),
      tween: JSON.parse(JSON.stringify(transform)),
      timerX: 0,
      timerY: 0,
      timerR: 0
    }
  }
  translate (x, y){
    let T = this.TRANSFORM, {transform, _transform, tween} = T; 
    if (x) {tween.translateX += x; T.timerX = new Date().getTime()}
    if (y) {tween.translateY += y; T.timerY = new Date().getTime()}
    Object.assign(_transform, transform)
  }
  rotate (deg){
    let T = this.TRANSFORM, {transform, _transform, tween, timerR} = T
    tween.rotate += deg
    T.timerR = new Date().getTime()
    Object.assign(_transform, transform)
  }
  scale  (x, y){let {transform} = this.TRANSFORM; transform.scale[0] += x; transform.scale[1] += y}
  translateTo(x, y){
    let {transform, tween} = this.TRANSFORM
    !transform && (transform = this.data.transform = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0})
    tween.x === transform.x && (tween.x = x)
    tween.y === transform.y && (tween.y = y)
    transform.x = x
    transform.y = y
  }  
  rotateTo(deg){
    let {transform, tween} = this.TRANSFORM
    !transform && (transform = this.data.transform = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0})
    tween.rotate === transform.rotate && (tween.rotate = deg)
    transform.rotate = deg
  }  
  scaleTo(x, y){
    let {transform, tween} = this.TRANSFORM
    !transform && (transform = this.data.transform = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0})
    tween.scale[0] === transform.scale[0] && (tween.scale[0] = x)
    tween.scale[1] === transform.scale[1] && (tween.scale[1] = y)
    transform.scale[0] = x
    transform.scale[1] = y

  }
  update(){
    let T = this.TRANSFORM, {transform, _transform, tween, timerX, timerY, timerR} = T, now = new Date().getTime();
    //console.log(transform);
    
    // transform.x !== tween.x && (transform.x = tweens.runDefault(now - timerX, 0, transform.x, 10000))
    // transform.y !== tween.y && (tween.y = tweens.runDefault(now - timerY, 0, transform.y, 10000))
    // transform.scaleX !== tween.scaleX && (tween.scaleX = tweens.runDefault(now - timerX, 1, transform.scaleX, 1000))
    // transform.scaleY !== tween.scaleY && (tween.scaleY = tweens.runDefault(now - timerY, 1, transform.scaleY, 1000))
    if (transform.translateX < tween.translateX) {
      transform.translateX = tweens.runDefault(now - timerX, _transform.translateX, tween.translateX, 2000) 
      transform.translateX > tween.translateX && (_transform.translateX = transform.translateX = tween.translateX)
      //console.log(transform.translateX);
    }
    if (transform.rotate < tween.rotate) {
      transform.rotate = tweens.runDefault(now - timerR, _transform.rotate, tween.rotate, 2000)
      if (transform.rotate > tween.rotate) {
        transform.rotate = tween.rotate %= 360; 
        Object.assign(_transform, transform)
      }
    }
    if (transform.rotate > tween.rotate) {
      transform.rotate = tweens.runDefault(now - timerR, _transform.rotate, tween.rotate, 2000)
      if (transform.rotate < tween.rotate) {
        transform.rotate = tween.rotate %= 360
        Object.assign(_transform, transform)
      }
    }
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





