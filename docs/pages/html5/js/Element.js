function getParent(ele){
  let parent = ele.parent
  parent = parent ? getParent(parent) : ele
  return parent && parent.type === 'SCENE' ? parent : null
}

class Element{  
  constructor(type){
    this.type = type
    this.data = {}
    this.parent = null
    this.children = []
    this.scene = null
  }
  addChild(child){
    if (!(child instanceof Element)) {
      console.error(' Unknown parameter: child')
      return
    } 
    child.parent = this
    child.dataToScene()
    this.children.push(child)
  }
  appendTo(parent){
    this.parent = parent
    this.dataToScene()
    parent.children.push(this)
  }
  dataToScene(){
    if (!this.scene) {
      let scene = getParent(this)
      scene && (this.scene = scene.dataList)
    }
    this.scene && this.scene.push({type: this.type, data: this.data})
  }
}

class Scene extends Element{
  //#type // 过渡类型
  //#duration // 过渡时长
  //#mask = {fillStyle:'#000', image: '001.jpg'}     // 过渡遮罩 背景
  constructor(name){
    super('SCENE')
    delete this.scene
    delete this.data
    this.dataList = []
    this.name = name 
  }
  setTransition(options){
    
  }
  in(callback){
    
   
  }
  out(callback){
    //callback()
  }
  update(){
    this.children.forEach(e => {
      console.log('e type', e.type);
    })
  }
}

class Sprite extends Element{
  #TRANSFORM  = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0}
  #TWEEN      = {x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0}
  #timerX
  #timerY
  #timerR
  constructor(){
    super('SPRITE')
  }
  dataToScene(){
    this.children.forEach(child =>{
      child.dataToScene()
    })
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

class Rect extends Element{
  constructor(x, y, width, height, options, config){
    super('Rect')
    this.data = [x, y, width, height, options, config]
  }
  
}

class Circle extends Element{
  constructor(x, y, r, options, config){
    super('Circle')
    this.data = [x, y, r, options, config]
  }
  
}





