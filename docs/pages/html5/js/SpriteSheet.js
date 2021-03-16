
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
  #dir = 1 // bounce运动模式下 转向因子
  
  constructor(image, matrix, options){
    Object.assign(this.#root, options || {})
    this.#IMAGE = image    
    this.#cellWidth = image.width/matrix[0].length
    this.#cellHeight = image.height/matrix.length
    
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
        let {x, y, duration, type} = this.#root, child = children[i], _frames = []
        this.#children[child.id] = Object.assign({id: child.id, x, y, duration, type, currentIndex: 0, now: new Date().getTime(), last: new Date().getTime(), frames: _frames}, child)
        child.orders.forEach(order => {_frames.push(frames[order])})
      }
    }
    this.#root.frames = frames
  }
  createChild(id, orders, options){
    let parent = this, {x, y, duration, type, frames} = this.#root, _frames = []
    this.#children[id] = Object.assign({id, x, y, duration, type, currentIndex: 0, now: new Date().getTime(), last: new Date().getTime(), frames: _frames}, options || {})
    orders.forEach(order => { _frames.push(frames[order]) })
    return {update(){parent.update(id)}, draw(){parent.draw(id)}}
  }
  goto(){}
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
    let obj = id ? this.#children[id] : this.#root, frames = obj.frames, index = obj.currentIndex, now = new Date().getTime(), d = now - obj.last  
    
    
    if (d >= obj.duration){
      obj.last = now
      let len = frames.length
      if(index >= len - 1){
          if (obj.type === 'loop'){	
              return frames[obj.currentIndex = 0];	
          } else if (obj.type !== 'bounce'){
              obj.onFinish && obj.onFinish(); obj.onFinish = undefined; return frames[index]
          }
      }
      if((obj.type === 'bounce') && ((index>=len-1&&this.#dir>0) || (index<=0&&this.#dir<0))) this.#dir*=(-1)
      obj.currentIndex += this.#dir
    } else {
      console.log('d', d);
    }
    return frames[index]
  }
  draw(id){
    let obj = id ? this.#children[id] : this.#root,
        frame = obj.frames[obj.currentIndex]
    stage.drawImage(this.#IMAGE, frame.x, frame.y, this.#cellWidth, this.#cellHeight, obj.x, obj.y, this.#cellWidth, this.#cellWidth);
  }
}
  