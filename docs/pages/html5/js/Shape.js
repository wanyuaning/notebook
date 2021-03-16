class Shape{
  #Element = function(type, data){
    this.type = type
    this.data = data
  }
  constructor(){
    this.#Element.prototype.draw = function(){ return [this.type, this.data] }
  }  
  line(start, end, options, config){
    return new this.#Element('drawLine', [start, end, options, config])
  }
}