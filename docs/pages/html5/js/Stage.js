class Stage{
  #canvas
  #context
  #width
  #height
  constructor(canvas, width, height){
    if (canvas) {
      this.#canvas = canvas
      this.#context = canvas.getContext("2d")
    }
    if (width && height) {
      this.#width = width
      this.#height = height
    }
  }
  beginPath(){this.#context.beginPath()}
  moveTo(x, y){this.#context.moveTo(x, y)}
  save(){this.#context.save()}
  restore(){this.#context.restore()}
  clean(){ this.#context .clearRect(0, 0, this.#width, this.#height) }

  setCanvas(canvas){
    this.#canvas = canvas
    this.#context = canvas.getContext("2d")
  }
  setStageSize(width, height){
    this.#width = width
    this.#height = height
  }
  showRuler(){
    let w = this.#width, h = this.#height, ctx = this.#context
    ctx.strokeStyle = '#ccc'
    ctx.beginPath()
    for(let i = 10; i < w; i += 10){ ctx.moveTo(i+0.5, 0); ctx.lineTo(i+0.5, 4) }
    for(let i = 10; i < h; i += 10){ ctx.moveTo(0, i+0.5); ctx.lineTo(4, i+0.5) }
    for(let i = 100; i < w; i += 100){ ctx.moveTo(i+0.5, 0); ctx.lineTo(i+0.5, 8) }
    for(let i = 100; i < h; i += 100){ ctx.moveTo(0, i+0.5); ctx.lineTo(8, i+0.5) }
    ctx.moveTo(0, h)
    ctx.lineTo(0, 0)
    ctx.lineTo(w, 0)
    ctx.stroke()
    ctx.beginPath()
  }
  // config{cellSize: 10}
  showGrid(config){
    let w = this.#width, h = this.#height, size = 20, color = '#eee', lineWidth = '1px', ctx = this.#context
    if(config) {
      config.cellSize && (size = config.cellSize)
      config.strokeStyle && (color = config.strokeStyle)
      config.lineWidth && (lineWidth = config.lineWidth)
    }
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.beginPath()
    for(let i = 0; i < w; i += size){ ctx.moveTo(i+0.5, 0); ctx.lineTo(i+0.5, h) }
    for(let i = 0; i < h; i += size){ ctx.moveTo(0, i+0.5); ctx.lineTo(w, i+0.5) }
    ctx.moveTo(w, 0)
    ctx.lineTo(w, h)
    ctx.lineTo(0, h)
    ctx.stroke()
    ctx.beginPath()
  }
      
  drawRect(x, y, width, height, options, config){ 
    if (!options) { console.error('Stage: drawRect(x, y, width, height, options), Please configure options'); return }
    Object.assign(this.#context, options || {})
    console.log(JSON.stringify(this.#context))
    this.#context.beginPath()
    options.fillStyle && this.#context.fillRect(x, y, width, height)
    options.strokeStyle && this.#context.strokeRect(x, y, width, height)
  }
  drawCircle(x, y, r, options, config){
    if (!options) { console.error('Stage: drawCircle(x, y, r, options), Please configure options'); return }
    Object.assign(this.#context, options || {})
    this.#context.beginPath()
    this.#context.arc(x, y, r, 0, 2*Math.PI, false);
    this.#context.closePath();
    options.fillStyle && this.#context.fill();
    options.strokeStyle && this.#context.stroke();
  }
  drawText(text, x, y, options, config){
    
    if (!options) { 
      console.error('Stage: drawText(text, x, y, options), Please configure options')
      console.info('For example: {fillStyle:"#999", strokeStyle:"#000", maxWidth:100, font:"20px Arial", textBaseline:"top", textAlign:"center"}')
      return 
    }
    if (options.font && options.font.indexOf(' ') < 0) options.font += ' Arial'
    Object.assign(this.#context, options)
    let maxWidth = options.maxWidth || this.#context.measureText(text).width
    this.#context.beginPath()
    options.fillStyle && this.#context.fillText(text, x, y, maxWidth)
    options.strokeStyle && this.#context.strokeText(text, x, y, maxWidth)
  }
  drawLine(start, end, options, config){
    if (!options) { 
      console.error('Stage: drawLine(start, end, options), Please configure options')
      console.info('For example: {strokeStyle:"#000", lineWidth:5, lineCap:"round"}')
      return 
    }
    Object.assign(this.#context, options)
    this.#context.beginPath();
    this.#context.lineTo(start[0], start[1]);
    this.#context.lineTo(end[0], end[1]);
    options.strokeStyle && this.#context.stroke();
  }

  /**
   * 多边形
   * [[0,0], [50,0]]
   * options{fillStyle:'#ccc', strokeStyle:'#000', lineWidth:5, lineCap:'round'}
   * config{closePath: true, startPosition: [0, 0]}
   */
  drawPolygon(pointsArr, options, config){
    let xPos = 0, yPos = 0, ctx = this.#context      
    Object.assign(ctx, options || {})
    console.log(ctx)
    ctx.beginPath()
    if (config && config.startPosition) {xPos = config.startPosition[0], yPos = config.startPosition[1]} 
    for(let i = 0, len = pointsArr.length; i < len - 1; i++){
      let start=pointsArr[i], end=pointsArr[i+1]
      ctx.lineTo(start[0] + xPos, start[1] + yPos)
      ctx.lineTo(end[0] + xPos, end[1] + yPos)
    }
    if(options.fillStyle) {
      ctx.closePath()
      ctx.fill()
    }
    config && config.closePath && ctx.closePath()
    options.strokeStyle && ctx.stroke()
  }
  /**
   * 图片
   * img	          规定要使用的图像、画布或视频。
     sx	sy	        可选。开始剪切的 xy 坐标位置。
     swidth sheight	可选。被剪切图像的宽度高度。
     x y	          在画布上放置图像的 xy 坐标位置。
     width height	  可选。要使用的图像的宽度高度。（伸展或缩小图像）
   * config{save: true, clip: true, transform:[{name:'translate', props:[10,10]}]}
   */
  drawImage(img, sx, sy, swidth, sheight, x, y, width, height, config){
    let ctx = this.#context;
    if(config) {
      config.save && ctx.save()
      config.clip && ctx.clip()
      config.transform && this.transform(config.transform)
    }
    ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
    config && config.save && ctx.restore()
  }
  /**
   * [
       {name:'translate', props:[x, y]},
       {name:'rotate', props:[5*Math.PI/180]},
       {name:'scale', props:[scalewidth,scaleheight]}
   * ]
   */
  transform(arr){
    let ctx = this.#context
    arr.forEach(item => {
      ctx[item.name].apply(ctx, item.props)
    })
  }
}