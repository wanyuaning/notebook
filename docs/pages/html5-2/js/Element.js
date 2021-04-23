function n(){ return new Date().getTime() }

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
  constructor(name, stage){
    super('SCENE')
    delete this.parent
    delete this.data
    delete this.appendTo
    this.name = name 
    this.stage = stage
    this.mask = new Sprite({x:0, y:0, transform:{alpha: 0}, children:[{type:'Rect', data:{x:0, y:0, width:1000, height:400, options:{fillStyle:'#000'}}}]})
  }
  in(callback){
    this.mask.alphaTo(1)
    this.mask.alpha(-1, callback)
  }
  out(callback){
    this.mask.alphaTo(0)
    this.mask.alpha(1, callback)
  }
  update(){
    this.children.forEach(e => { e.type === 'Sprite' && e.update(); this.stage.draw(e) })
    this.mask.update()
    this.stage.draw(this.mask)
  }
}
 
/**
 * ▇精灵元素▇
 * 属性：type/children/parent/data
 * 方法：addChild/appendTo
 *      translate/translateTo/rotate/rotateTo/scale/scaleTo/update
 */
class Sprite extends Element{
  constructor({x, y, width, height, options, transform, config, children}){
    super('Sprite')
    transform = Object.assign({x, y, translateX: 0, translateY: 0, scaleX: 1, scaleY: 1, rotate: 0, alpha: 1, origin: 1}, transform || {})
    this.data = {x, y, width, height, options, transform, config, children: this.children}
    this.TRANSFORM = {
      transform, 
      transformOrigin: JSON.parse(JSON.stringify(transform)), 
      transformTarget: JSON.parse(JSON.stringify(transform)), 
      timerX: 0, 
      timerY: 0, 
      timerR: 0, 
      timerSX: 0, 
      timerSY: 0, 
      operateAlpha: {timer:0, callback:function(){}}
    }
    children && children.forEach(child => {
      if(child.type==='Rect') this.addChild(new Rect(child.data))
    })
  }
  
  translate (x, y){
    let T = this.TRANSFORM, {transform, transformOrigin, transformTarget} = T; 
    if (x) {transformTarget.translateX += x; T.timerX = n(); transformOrigin.translateX = transform.translateX }
    if (y) {transformTarget.translateY += y; T.timerY = n(); transformOrigin.translateY = transform.translateY }
  }
  translateX (x){ let T = this.TRANSFORM, {transform, transformOrigin, transformTarget} = T; if (x) { transformTarget.translateX += x; T.timerX = n(); transformOrigin.translateX = transform.translateX } }
  translateY (y){ let T = this.TRANSFORM, {transform, transformOrigin, transformTarget} = T; if (y) { transformTarget.translateY += y; T.timerY = n(); transformOrigin.translateY = transform.translateY } }
  translateTo(x, y){ let {transform, transformOrigin, transformTarget} = this.TRANSFORM; x && (transformOrigin.translateX = transform.translateX = transformTarget.translateX = x); y && (transformOrigin.translateY = transform.translateY = transformTarget.translateY = y) }  
 
  scale  (x, y){
    let T = this.TRANSFORM, {transform, transformOrigin, transformTarget} = T
    if (x) { transformTarget.scaleX += x; T.timerSX = n(); transformOrigin.scaleX = transform.scaleX }
    if (y) { transformTarget.scaleY += y; T.timerSY = n(); transformOrigin.scaleY = transform.scaleY }
  }
  scaleX  (x){ let T = this.TRANSFORM, {transform, transformOrigin, transformTarget} = T; if (x) { transformTarget.scaleX += x; T.timerSX = n(); transformOrigin.scaleX = transform.scaleX } }
  scaleY  (y){ let T = this.TRANSFORM, {transform, transformOrigin, transformTarget} = T; if (y) { transformTarget.scaleY += y; T.timerSY = n(); transformOrigin.scaleY = transform.scaleY } }
  scaleTo(x, y){ let {transform, transformOrigin, transformTarget} = this.TRANSFORM; x && (transformOrigin.scaleX = transform.scaleX = transformTarget.scaleX = x); y && (transformOrigin.scaleY = transform.scaleY = transformTarget.scaleY = y) }

  alpha (a, callback){ let {transform, transformOrigin, transformTarget, operateAlpha} = this.TRANSFORM; transformTarget.alpha += a; operateAlpha.timer = n(); transformOrigin.alpha = transform.alpha; callback && (operateAlpha.callback = callback) }
  alphaTo (a){ let {transform, transformOrigin, transformTarget} = this.TRANSFORM; transformOrigin.alpha = transform.alpha = transformTarget.alpha = a }
  rotate (deg){ let T = this.TRANSFORM, {transform, transformOrigin, transformTarget, timerR} = T; transformTarget.rotate += deg; T.timerR = n(); transformOrigin.rotate = transform.rotate }
  rotateTo(deg){ let {transform, transformOrigin, transformTarget} = this.TRANSFORM; deg && (transformOrigin.rotate = transform.rotate = transformTarget.rotate = deg) }  
  
  update(){
    let T = this.TRANSFORM, {transform, transformOrigin, transformTarget, timerX, timerY, timerR, timerSX, timerSY, operateAlpha, cbAU, cbAD} = T, now = n();
    // 缩放
    if (transform.scaleX < transformTarget.scaleX) {
      transform.scaleX = tweens.runDefault(now - timerSX, transformOrigin.scaleX, transformTarget.scaleX, 2000) 
      transform.scaleX > transformTarget.scaleX && (transformOrigin.scaleX = transform.scaleX = transformTarget.scaleX)
    }
    if (transform.scaleX > transformTarget.scaleX) {
      transform.scaleX = tweens.runDefault(now - timerSX, transformOrigin.scaleX, transformTarget.scaleX, 2000) 
      transform.scaleX < transformTarget.scaleX && (transformOrigin.scaleX = transform.scaleX = transformTarget.scaleX)
    }
    if (transform.scaleY < transformTarget.scaleY) {
      transform.scaleY = tweens.runDefault(now - timerSY, transformOrigin.scaleY, transformTarget.scaleY, 2000) 
      transform.scaleY > transformTarget.scaleY && (transformOrigin.scaleY = transform.scaleY = transformTarget.scaleY)
    }
    if (transform.scaleY > transformTarget.scaleY) {
      transform.scaleY = tweens.runDefault(now - timerSY, transformOrigin.scaleY, transformTarget.scaleY, 2000) 
      transform.scaleY < transformTarget.scaleY && (transformOrigin.scaleY = transform.scaleY = transformTarget.scaleY)
    }
    // 位移
    if (transform.translateX < transformTarget.translateX) {
      transform.translateX = tweens.runDefault(now - timerX, transformOrigin.translateX, transformTarget.translateX, 2000) 
      transform.translateX > transformTarget.translateX && (transformOrigin.translateX = transform.translateX = transformTarget.translateX)
    }
    if (transform.translateX > transformTarget.translateX) {
      transform.translateX = tweens.runDefault(now - timerX, transformOrigin.translateX, transformTarget.translateX, 2000) 
      transform.translateX < transformTarget.translateX && (transformOrigin.translateX = transform.translateX = transformTarget.translateX)
    }
    if (transform.translateY < transformTarget.translateY) {
      transform.translateY = tweens.runDefault(now - timerY, transformOrigin.translateY, transformTarget.translateY, 2000) 
      transform.translateY > transformTarget.translateY && (transformOrigin.translateY = transform.translateY = transformTarget.translateY)
    }
    if (transform.translateY > transformTarget.translateY) {
      transform.translateY = tweens.runDefault(now - timerY, transformOrigin.translateY, transformTarget.translateY, 2000) 
      transform.translateY < transformTarget.translateY && (transformOrigin.translateY = transform.translateY = transformTarget.translateY)
    }
    // 旋转
    if (transform.rotate < transformTarget.rotate) {
      transform.rotate = tweens.runDefault(now - timerR, transformOrigin.rotate, transformTarget.rotate, 2000)
      transform.rotate > transformTarget.rotate && (transformOrigin.rotate = transform.rotate = transformTarget.rotate %= 360)
    }
    if (transform.rotate > transformTarget.rotate) {
      transform.rotate = tweens.runDefault(now - timerR, transformOrigin.rotate, transformTarget.rotate, 2000)
      transform.rotate < transformTarget.rotate && (transformOrigin.rotate = transform.rotate = transformTarget.rotate %= 360)
    }
    // 透明度
    if (transform.alpha < transformTarget.alpha) {
      transform.alpha = tweens.runDefault(now - operateAlpha.timer, transformOrigin.alpha, transformTarget.alpha, 2000)
      if (transform.alpha > transformTarget.alpha) {
        transformOrigin.alpha = transform.alpha = transformTarget.alpha
        operateAlpha.callback()
      }
    }
    if (transform.alpha > transformTarget.alpha) {
      transform.alpha = tweens.runDefault(now - operateAlpha.timer, transformOrigin.alpha, transformTarget.alpha, 2000)
      if (transform.alpha < transformTarget.alpha) {  
        transformOrigin.alpha = transform.alpha = transformTarget.alpha
        operateAlpha.callback()
      }
    }
  }
}

/**
 * ▇精灵列表▇
 */
class SpriteSheet extends Sprite{
  constructor({x, y, width, height, image, transform, config}){
    super({x, y, width, height, options:{}, transform})
    let {matrix, duration, children, defaultName} = config || {}
    let img = new Imagee(image, 0, 0, width, height, 0, 0, width, height)
    img.parent = this

    this.children.push(img)
    this._data = img.data
    this.duration = duration || 100 
    this.startTime = n()
    this.frames = []
    this.group = {
      'MAIN':[],
      'righter': [0,1,2],
      'lefter': [3,4,5]
    }
    this.index = 0
    this.defaultName = defaultName || 'MAIN'

    if (matrix) {
      let count = 0
      for(let y = 0; y < matrix.length; y++){
        let col = matrix[y]
        for(let x = 0; x < col.length; x++){
          let cell = col[x];
          if (cell) {
            this.frames.push([x*width, y*height]),
            this.group['MAIN'].push(count)
            count++
          }
        }
      }
    }
  }
  changeName(name){
    this.defaultName = name || 'MAIN'
  }
  update(){
    super.update()
    let now = n()
    
    if (now - this.startTime > this.duration) {
      this.startTime = now
      this.index++
      let currentFrames = this.group[this.defaultName]
      this.index >= currentFrames.length && (this.index = 0)
      let index = currentFrames[this.index], frame = this.frames[index]
      this._data.sx = frame[0]
      this._data.sy = frame[1]
    }
  } 
}

/**
 * ▇Shape元素▇
 * 属性：type/parent/data/config
 * 方法：appendTo
 */
class Rect extends Element{
  constructor({x, y, width, height, options, config}){
    super('Rect')
    delete this.children
    delete this.addChild
    this.data = {x, y, width, height, options}
    this.config = config
  }  
}
class Circle extends Element{
  constructor({x, y, r, options, config}){
    super('Circle')
    delete this.children
    delete this.addChild
    this.data = {x, y, r, options}
    this.config = config
  }  
}
class Polygon extends Element{
  constructor({points, options, config}){
    super('Polygon')
    delete this.children
    delete this.addChild
    this.data = {points, options, config}
    this.config = config
  } 
}
class Imagee extends Element{
  constructor(img, sx, sy, swidth, sheight, x, y, width, height){
    super('Imagee')
    delete this.children
    delete this.addChild
    this.data = {img, sx, sy, swidth, sheight, x, y, width, height}
  } 
}





