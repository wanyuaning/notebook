class Game{
  #STAGE
  #SCENES = {}
  #CURRENT_SCENE = null

  setStage(stage){ this.#STAGE = stage }
  addScene(name, scene){ this.#SCENES[name] = scene; !this.#CURRENT_SCENE && (this.#CURRENT_SCENE = name) }
  setDefaultScene(name){this.#CURRENT_SCENE = name}
  setSceneTransition(){
    let scenes = this.#SCENES
    for (let i in scenes) {
      scenes[i].setTransition('fade', {fillStyle: '#0f0'})
      
    }
  }
  // 切换场景
  changeSceneTo(name){
    let currentScene = this.#SCENES[this.#CURRENT_SCENE], nextScene = this.#SCENES[name]
    if(!nextScene) return
    currentScene.out(() => {
      nextScene.in()
      this.#CURRENT_SCENE = name
    })
    
  }
  draw(){
    this.#STAGE.clean()
    let arr = this.#SCENES[this.#CURRENT_SCENE].draw()
    //console.log(arr)
    arr.forEach(e => {
      this.#STAGE.draw(e)
    })
  }
}