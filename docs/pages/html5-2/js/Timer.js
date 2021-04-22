
class Timer{
  #CONFIG = {FPS: 33.3333, duration:5000}
  constructor(options){
    Object.assign(this.#CONFIG, options)
    this.#CONFIG.FPS < 33.3333 && (this.#CONFIG.FPS = 33.3333)
    this.time = 0
    this.startTime = 0
    this.state = 0 // 0stop 1play 2pause
    this.duration = this.#CONFIG.duration
    this.game = this.#CONFIG.game || {draw:() => {console.log(this.time)}}
  }
  start(game){
    this.startTime = new Date().getTime()
    this.play()
  }
  play(){
    this.time > this.duration && (this.state = 0)
    this.state === 2 && (this.startTime = new Date().getTime() - this.time)
    this.state = 1
    let timer = () => {
      if(this.state === 0) return
      this.time = new Date().getTime() - this.startTime
      this.game.draw()
      window.setTimeout(timer, this.FPS)
    }
    timer()
  }
  pause(){this.state = 2}
  stop(){this.state = 0; this.time = 0}
}  