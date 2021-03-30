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
    transform = transform || {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0}
    transform.x += x
    transform.y += y
    this.data = {x, y, width, height, options, transform, config}
    this.data.children = this.children
    this.TRANSFORM = {
      transform,
      transformCopy: JSON.parse(JSON.stringify(transform)),
      tween: Object.assign({x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0}, transform),
      timerX: null,
      timerY: null,
      timerR: null, rotatePointer: ''
    }
  }
  translate (x, y){
    let {tween, timerX, timerY} = this.TRANSFORM; 
    if (x) {tween.x += x; timerX = new Date().getTime()}
    if (y) {tween.y += y; timerY = new Date().getTime()}
  }
  translateTo(x, y){
    let {transform, tween} = this.TRANSFORM
    !transform && (transform = this.data.transform = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0})
    tween.x === transform.x && (tween.x = x)
    tween.y === transform.y && (tween.y = y)
    transform.x = x
    transform.y = y
  }
  rotate (deg){
    this.TRANSFORM.tween.rotate += deg
    this.TRANSFORM.timerR = new Date().getTime()
  }
  rotateTo(deg){
    let {transform, tween} = this.TRANSFORM
    !transform && (transform = this.data.transform = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0})
    tween.rotate === transform.rotate && (tween.rotate = deg)
    transform.rotate = deg
  }
  scale  (x, y){let {transform} = this.TRANSFORM; transform.scale[0] += x; transform.scale[1] += y}
  scaleTo(x, y){
    let {transform, tween} = this.TRANSFORM
    !transform && (transform = this.data.transform = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0})
    tween.scale[0] === transform.scale[0] && (tween.scale[0] = x)
    tween.scale[1] === transform.scale[1] && (tween.scale[1] = y)
    transform.scale[0] = x
    transform.scale[1] = y

  }
  update(){
    let T = this.TRANSFORM, {transform, transformCopy, tween, timerX, timerY, timerR, rotatePointer} = T, now = new Date().getTime();
    console.log(rotatePointer, transform.rotate, tween.rotate);
    
    rotatePointer == '+' && transform.rotate > tween.rotate && (transform.rotate = tween.rotate %= 360)
    rotatePointer == '-' && transform.rotate < tween.rotate && (transform.rotate = tween.rotate %= 360)
    // transform.x !== tween.x && (transform.x = tweens.runDefault(now - timerX, 0, transform.x, 10000))
    // transform.y !== tween.y && (tween.y = tweens.runDefault(now - timerY, 0, transform.y, 10000))
    // transform.scaleX !== tween.scaleX && (tween.scaleX = tweens.runDefault(now - timerX, 1, transform.scaleX, 1000))
    // transform.scaleY !== tween.scaleY && (tween.scaleY = tweens.runDefault(now - timerY, 1, transform.scaleY, 1000))
    if (transform.rotate < tween.rotate) {T.rotatePointer = '+'; transform.rotate = tweens.runDefault(now - timerR, transformCopy.rotate, tween.rotate, 1000)}
    if (transform.rotate > tween.rotate) {T.rotatePointer = '-'; transform.rotate = tweens.runDefault(now - timerR, transformCopy.rotate, tween.rotate, 1000)}
    
    
    //console.log('rotate', transform.rotate, tween.rotate);
    
    
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





