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

    this.transition = {active: false, data: {}}
    this.mask = new Sprite()
    this.mask.addChild(new Rect(0, 0, 1000, 600, {fillStyle: '#000'}))
  }
  setTransition(options){
    this.transition.data = {type: 'Rect', data:[], undefined}
  }
  in(callback){
    this.transition.active = true
    //let transition = this.#Transition
    //if (!transition) return
  }
  out(callback){
    this.transition.active = true
    
    //callback()
    //let transition = this.#Transition
    //if (!transition) return
  }
  update(){
    this.children.forEach(e => {
      console.log('e type', e.type);
    })
    this.transition.active && this.mask.update()
  }
}

class Sprite extends Element{
  constructor(){
    super('SPRITE')
  }
  dataToScene(){
    this.children.forEach(child =>{
      child.dataToScene()
    })
  } 
  update(){
    
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





