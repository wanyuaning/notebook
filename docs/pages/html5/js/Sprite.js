class Sprite{
  #o = {x:0, y:0, width: 0, height: 0, scale: [1, 1], rotate: 0, translate:[0, 0]}
  constructor(options){
    Object.assign(this.#o, options || {})
    
    
  }
  translate(x, y){}
  translateTo(x, y){let arr = this.#o.translate; arr[0] = x; arr[1] = y}
  rotate(deg){this.#o.rotate += deg; if(this.#o.rotate >= 360) this.#o.rotate -= 360}
  rotateTo(deg){this.#o.rotate = deg}
  draw(){
    let {x, y, width, height, scale, rotate, translate} = this.#o
    stage.drawRect(x + translate[0], y + translate[1], width * scale[0], height * scale[1],{fillStyle:'#f00'})
  }
  addEventListener(event, fn){
    window.addEventListener(event, fn);
  }
}