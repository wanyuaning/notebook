class Game{
  // 配置
  #CONFIG = {
    showGrid: false,
    showRuler: false,
    FPS: 33.3333,
    debug: false
  }
  // 引擎
  #ENGINES = {
    stage: null,
    timer: null
  }

  #SCENES_MAP = {}
  #CURRENT_SCENE = 'SCENE0'
  
  constructor({showGrid, showRuler, FPS, debug}){
    showGrid && (this.#CONFIG.showGrid = true)
    showRuler && (this.#CONFIG.showRuler = true)
    debug && (this.#CONFIG.debug = true)
    FPS && (this.#CONFIG.FPS = FPS)
    
    // 舞台&设施
    let stage = new Stage()
    stage.setCanvas(document.getElementById("myCanvas"))
    stage.setStageSize(1000, 600)
    stage && (this.#ENGINES.stage = stage)
    
    // 场景管理
    this.scene = new Scene('SCENE0')
    this.scenes = [this.scene]
    this.#SCENES_MAP['SCENE0'] = this.scene
    // 帧率引擎
    this.#ENGINES.timer = new Timer({FPS: this.#CONFIG.FPS})
  }
  setStage(stage){ this.#ENGINES.stage = stage }
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
  addActor(actor){this.scene.addChild(actor)}
  start(){
    let {debug} = this.#CONFIG
    let {timer} = this.#ENGINES
    debug ? timer.testStart(this, {duration: 20000}) : timer.start(this)
  }

  draw(){
    
    
    let scene = this.#SCENES_MAP[this.#CURRENT_SCENE]
    let {showGrid, showRuler} = this.#CONFIG
    let {stage} = this.#ENGINES
    stage.clean()
    // 1.清除画布
    scene.update()
    // 2.公共设施
    showGrid && stage.showGrid()
    showRuler && stage.showRuler()

    scene.children.forEach(e => { 
      e.type === 'Sprite' && e.update()
      
      stage.draw(e) 
    })

    //transition.active && stage.draw(transition.data)
  }
  
}