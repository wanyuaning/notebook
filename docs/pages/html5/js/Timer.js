class Timer{
  #STOP = false
  #GAME = null
  constructor(fps){
    this.fps = fps
  }
  start(game){
    this.#STOP = false
    this.#GAME = game
    let timer = () => {
      if(this.#STOP) return
      this.#GAME.draw()
      console.log(11111)
      window.setTimeout(timer, this.fps);
    }
    timer()
  }
  stops(){
    this.#STOP = true
  }
}