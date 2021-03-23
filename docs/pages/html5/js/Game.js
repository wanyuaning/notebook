class Game{
  #STAGE
  #TIMER
  #SCENES_MAP = {}
  #CURRENT_SCENE = 'SCENE0'
  constructor(){
    this.scene = new Scene('SCENE0')
    this.scenes = [this.scene]
    this.#SCENES_MAP['SCENE0'] = this.scene
    this.#TIMER = new Timer(33.3333)
  }

  addActor(actor){this.scene.addChild(actor)}

  setStage(stage){ this.#STAGE = stage }
  // 场景
  addScene(scene){ this.scenes.push(scene); this.#SCENES_MAP[scene.name] = scene}
  setSceneTransition(){
    this.scenes.forEach(e => {
      e.setTransition('fade', {fillStyle: '#0f0'})
    })
  }
  changeSceneTo(name){
    let currentScene = this.#SCENES_MAP[this.#CURRENT_SCENE], nextScene = this.#SCENES_MAP[name]
    if(!nextScene) return
    
    currentScene.out(() => {
      nextScene.in()
      this.#CURRENT_SCENE = name
      
    })
  }
  
  start(){
    this.#TIMER.start(this)
    setTimeout(() => {this.#TIMER.stops()}, 10000)
  }
  draw(){
    let scene = this.#SCENES_MAP[this.#CURRENT_SCENE]
    this.#STAGE.clean()
    scene.update()
    /*
    [
       {type:'Rect', data:[0,0,100,50,{fillStyle:'#f00'}]},
       {type:'Sprite', children:[], config:{}}
    ]
    */


    scene.dataList.forEach(e => { this.#STAGE.draw(e) })

    //transition.active && this.#STAGE.draw(transition.data)
  }
}