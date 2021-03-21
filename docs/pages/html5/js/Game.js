class Game{
  #STAGE
  #SCENES_MAP = {}
  #CURRENT_SCENE = 'SCENE0'
  constructor(){
    this.scene = new Scene('SCENE0')
    this.scenes = [this.scene]
    this.#SCENES_MAP['SCENE0'] = this.scene
  }

  addActor(actor){this.scene.addChild(actor)}

  setStage(stage){ this.#STAGE = stage }
  // 场景
  addScene(scene){ this.scenes.push(scene); this.#SCENES_MAP[scene.name] = scene}
  changeSceneTo(name){
    let currentScene = this.#SCENES_MAP[this.#CURRENT_SCENE], nextScene = this.#SCENES_MAP[name]
    if(!nextScene) return
    
    currentScene.out(() => {
      nextScene.in()
      this.#CURRENT_SCENE = name
      
    })
  }
  setSceneTransition(){
    this.scenes.forEach(e => {
      e.setTransition('fade', {fillStyle: '#0f0'})
    })
  }
  update(){
    let scene = this.#SCENES_MAP[this.#CURRENT_SCENE]
    scene.update()
  }
  draw(){
    console.log('CURRENT_SCENE', this.#CURRENT_SCENE);
    
    this.#STAGE.clean()
    this.#STAGE.globalAlpha = 0.5
    let scene = this.#SCENES_MAP[this.#CURRENT_SCENE]
    let data = scene.dataList
    let transition = scene.transition
    
    data.forEach(e => {
      this.#STAGE.draw(e)
    })

    transition.active && this.#STAGE.draw(transition.data)
  }
}