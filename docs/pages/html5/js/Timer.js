class Timer{
  #STOP = false
  constructor(fps){
    this.fps = fps
  }
  start(game){
    this.#STOP = false
    let timer = () => {
      if(this.#STOP) return
      game.draw()
      window.setTimeout(timer, this.fps);
    }
    timer()
  }
  stops(){
    this.#STOP = true
  }
}