
/**
   * @param image  资源图   loader.get('marry.png')
   * @param matrix 单元矩阵 [[1,1,1],[1,1,1]]
   * @param options {
   *     id: 'marry',                     查找与引用 ss.update('lefter') ss.draw('lefter')
   *     x:100, y:100,                    舞台位置(像素)
   *     duration:100,                    帧时长(毫秒)
   *     type: 'loop',                    循环/往复loop/bounce 默认loop
   *     children: [ {id:'righter', orders: [0,1,2]}, {id:'lefter', orders: [3,4,5]} ] 定义子动画
   * }
   * 编序规范：order
   *     0 1 2 -
   *     3 - 4 5
   **/
class SpriteSheet{
  
  #IMAGE
  #cellWidth
  #cellHeight
  #root = {id: '', x: 0, y: 0, duration: 100, type: 'loop', currentIndex: 0, now: new Date().getTime(), last: new Date().getTime()}
  #children = {} 
  #path = 1 // bounce运动模式下 转向因子
  
  constructor(image, matrix, options){
    Object.assign(this.#root, options || {})
    this.#IMAGE = image    
    this.#cellWidth = image.width/matrix[0].length
    this.#cellHeight = image.height/matrix.length
    console.log(this.#cellWidth, this.#cellHeight);
    
    
    let frames = [], count = 0 // 有效单元计数

    for(let y = 0; y < matrix.length; y++){
      let col = matrix[y]
      for(let x = 0; x < col.length; x++){
        let cell = col[x];
        if (cell) {
          let frame = {x: x*this.#cellWidth, y: y*this.#cellHeight}
          frames.push(frame)
          count++
        }
      }
    }
    let children = options.children
    if (children) {
      for(let i = 0, len = children.length; i < len; i++){
        let obj = Object.assign({}, this.#root), 
            child = children[i], 
            frames2 = []

        Object.assign(obj, child)
        child.orders.forEach(order => { 
          frames2.push(frames[order]) 
        })
        obj.frames = frames2
        this.#children[child.id] = obj
      }
    }
    this.#root.frames = frames
  }
  createChild(id, options){
    var obj = options, frames = [], _this = this
    obj.indexs.forEach(e => { frames.push(_this.FRAMES_MAP_ORDER[e]) })
    obj.frames = frames
    this.childFrames[id] = obj
  }
  index(index, id){
    var that = id ? this.childFrames[id] : this
    that.currentIndex = index;
    return that.frames[that.currentIndex];	
  }
  getCurrentFrames(id){
    let obj = id ? this.#children[id] : this.#root
    return obj.frames[obj.currentIndex];	
  }
  update(id){
    let obj = id ? this.#children[id] : this.#root             
    obj.now = new Date().getTime();
    var frames = obj.frames;
    
    if((obj.now - obj.last) > obj.duration){
      var cIndex = obj.currentIndex, len = obj.frames.length;
      obj.last = obj.now;
      
      if(cIndex >= len - 1){
          if (obj.type === 'loop'){	
              return frames[obj.currentIndex = 0];	
          } else if (obj.type !== 'bounce'){
              obj.onFinish && obj.onFinish();
              obj.onFinish = undefined;
              return frames[cIndex];
          }
      }
      if((obj.type === 'bounce') && ((cIndex>=len-1&&this.#path>0) || (cIndex<=0&&this.#path<0))) this.#path*=(-1);
      obj.currentIndex += this.#path;
    }
    return frames[obj.currentIndex];
  }
  draw(id){
    let obj = id ? this.#children[id] : this.#root,
        frame = obj.frames[obj.currentIndex]
    stage.drawImage(this.#IMAGE, frame.x, frame.y, this.#cellWidth, this.#cellHeight, obj.x, obj.y, this.#cellWidth, this.#cellWidth);
  }
}
  