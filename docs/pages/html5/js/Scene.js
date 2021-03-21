// 依赖 模式对象 Pattern.js
let transitions = new StateAndStrategy()
transitions.setData({
  fade: (t,b,c,d) => c * t / d + b
})
// 指针
// transitions.setDefault('fade')
// 策略使用
// transitions.run(t - startTime, startPos, endPos, duration)

class Scene{
  #STILL_LIFE = []
  #ACTORS = []
  #Transition = null
  setTransition(transitionKey, options){
    options.key = transitionKey
    this.#Transition = options
    let sp = new Sprite(0, 0), rect = shape.rect(0, 0, 200, 100, {fillStyle: '#00f'})
    sp.addChild(rect)
    this.addActor(sp)
  }
  // 场景元素
  addActor(actor){
    actor.parent = this
    actor.appendTo(this.#ACTORS)
  }
  // 场景过渡
  in(){
    let transition = this.#Transition
    if (!transition) return
  }
  out(){
    let transition = this.#Transition
    if (!transition) return
  }
  // 运行帧
  draw(){
    return this.#ACTORS
  }
}

//[{"type": "Rect", "data": [0, 0, 200, 100, {"fillStyle": "#00f"}, null]}]