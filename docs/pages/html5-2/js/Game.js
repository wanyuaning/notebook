class Game{
  // 配置
  #CONFIG = {showGrid: false, showRuler: false, FPS: 33.3333, debug: false}
  constructor(options){
    Object.assign(this.#CONFIG, options)    
    // 舞台&设施
    this.stage = new Stage(document.getElementById("myCanvas"), 1000, 400)
    // 场景管理
    this.sceneMap = {'SCENE0': new Scene('SCENE0', this.stage)}
    this.sceneCurrent = this.sceneMap['SCENE0']
    // 帧率引擎
    this.timer = new Timer({FPS: this.#CONFIG.FPS, game: this, duration:10000})
  }
  setStage(stage){ this.stage = stage }
  setSceneTransition(){  }
  addScene(name){ this.sceneMap[name] = new Scene(name, this.stage)}
  getScene(name){return this.sceneMap[name]}
  addActor(actor){this.sceneCurrent.addChild(actor)}
  // 转场
  changeSceneTo(name){
    let nextScene = this.sceneMap[name]; 
    if(!nextScene) return; 
    this.sceneCurrent.out(() => { 
      console.log('SCENE0退场完成！')
      this.sceneCurrent = this.sceneMap[name]
      nextScene.in(function(){console.log('SCENE2入场完成！')})
    })
  }
  transform(name, transform){ for (let key in transform) {this.actorMap[name][key](transform[key])} }
  getActor(name){ return this.actorMap[name] }
  start(){this.timer.start(this)}
  draw(){
    let {showGrid, showRuler} = this.#CONFIG   
    this.stage.clean() // 1.清除画布    
    showGrid && this.stage.showGrid() // 2.公共设施
    showRuler && this.stage.showRuler()    
    this.sceneCurrent.update()
    //transition.active && this.stage.draw(transition.data)
  }  
}