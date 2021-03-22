class Timer{
  #STOP = false
  constructor(fps){
    this.fps = fps
  }
  start(game){
    this.#STOP = false
    let count = 0
    let timer = () => {
      if(this.#STOP) return
      console.log(count);
      game.draw()
      window.setTimeout(timer, this.fps)
      count++
    }
    timer()
  }
  stops(){
    this.#STOP = true
  }
}