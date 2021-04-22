
class Timer{
  #CONFIG = {FPS: 33.3333}
  constructor(options){
    Object.assign(this.#CONFIG, options)
    this.#CONFIG.FPS < 33.3333 && (this.#CONFIG.FPS = 33.3333)
    this.time = 0
    this.stop = true

  }
  testStart(game, {FPS, duration}){
    this.stop = false
    duration && setTimeout(()=>{this.stop = true}, duration)
    
    let timer = () => {
      if(this.stop) return
      game.draw()
      window.setTimeout(timer, FPS || this.FPS)
      
    }
    timer()
  }
  start(game){
    this.stop = false
    let timer = () => {
      if(this.stop) return
      game.draw()
      this.time = new Date().getTime() - this.startTime
      window.setTimeout(timer, this.FPS)
      
    }
    timer()
  }
  pause(){this.stop = true}
  stops(){this.stop = true; this.time = 0}
}  