

class Shape{
  #Element = function(type, data){
    this.type = type
    this.data = data
    this.appendTo()
  }
  constructor(){
    this.#Element.prototype.draw = function(){ return [this.type, this.data] }
  }  
  line(start, end, options, config){
    return new this.#Element('drawLine', [start, end, options, config])
  }
  rect(x, y, width, height, options, config){
    return new this.#Element('drawRect', [x, y, width, height, options, config])
  }
}