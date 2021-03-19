function getParent(ele){
  let parent = ele.parent
  parent = parent ? getParent(parent) : ele
  return parent
}

class Element{  
  constructor(type){
    console.log('Element type', type)
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
  dataToScene(){
    if (!this.scene) {
      this.scene = getParent(this).dataList
      this.scene.push({type: this.type, data: this.data})
    }
  }
}

class Scene extends Element{
  constructor(){
    super('SCENE')
    this.dataList = []
    delete this.scene
    delete this.data
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
}

class Rect extends Element{
  constructor(x, y, width, height, options, config){
    super('Rect')
    this.data = [x, y, width, height, options, config]
  }
  
}


// 场景
let scene = new Scene()


// 演员
var sp = new Sprite(100, 100)
scene.addChild(sp)

let rt = new Rect(10, 10, 100, 50, {fillStyle:'#f00'})
sp.addChild(rt)
let rt2 = new Rect(100, 100, 50, 50, {fillStyle:'#0f0'})
rt2.appendTo(sp)


