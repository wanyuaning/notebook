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
  /* 
    ▇▇▇▇▇▇▇▇▇▇▇▇▇ options ▇▇▇▇▇▇▇▇▇▇▇▇▇
    ▯fillStyle                填充颜色、模式或渐变。值：字符串、CanvasGradient 对象或 CanvasPattern 对象
    ▯strokeStyle              描边颜色、模式和渐变。值：字符串、CanvasGradient 对象或 CanvasPattern 对象
    ▮lineCap                  线条末端形状：butt  round/square (平直/圆形/夌形)
    ▮lineJoin                 线条连接形式：miter round/bevel
    ▮miterLimit               当lineJoin 为miter时，这个属性指定斜连接长度和线条宽度的最大比率
    ▮lineWidth                线条宽度：1.0 及大于0.0 线条在路径上居中 每边有线条宽的一半
    ▯shadowBlur               指定羽化阴影的程度。默认值是 0
    ▯shadowColor              把阴影颜色指定为CSS字符串或Web样式字符串，且可包含alpha部分来表示透明度。默认值是 black
    ▯shadowOffsetX            指定阴影水平和垂直偏移。较大值使得阴影化对象漂浮在背景较高位置上。 默认值是 0
    ▯shadowOffsetY  
    ▮font
    ▮textBaseline             文本基线：alphabetic top/middle/bottom/hanging/ideographic 普通的字母基线/em方框的顶端/em方框的正中/em方框的底端/悬挂基线/表意基线
    ▮textAlign                文本对齐：start end/center/left/right
    ▮maxWidth                 文本域宽
    ▯globalAlpha              不透明度 1.0 及0.0-1.0
    ▯globalCompositeOperation 新图像如何覆盖旧图像
    ▇▇▇▇▇▇▇▇▇▇▇▇▇ config  ▇▇▇▇▇▇▇▇▇▇▇▇▇
     save      缓存options
     restore   释放缓存
     beginPath 开启新路径
     
     位移 ctx.transform(a,b,c,d,[e],[f])
     旋转 ctx.transform([a],[b],[c],[d],e,f)
     缩放 ctx.transform([a],b,c,[d],e,f)
                                 
  */
  test(){
    
    
    
    // skew 30deg
    
    
    
    let [x, y, w, h] = [100, 100, 100, 50], 
      {rotate, translate, scale, origin} = {rotate: 0, translate:[0, 0], scale: [1, 1], skew: 30, origin:5}
    let deg = Math.PI/180, ctx = this.#context

    let a = Math.cos(deg*rotate)*scale[0],  // X缩放
        d = Math.cos(deg*rotate)*scale[1],  // Y缩放
        b = Math.sin(deg*rotate)*scale[1],  // Y斜切 一个为零一个非零 得到斜切 / b负c正 旋转方向逆时针
        c = -Math.sin(deg*rotate)*scale[0], // X斜切        
        e = x + translate[0],               // X位移 元素定位 + 位移因子
        f = y + translate[1],               // Y位移
        startX = 0,                         // 元素原点与画布原点对齐 原点策略config.origin
        startY = 0
c += 1
    ctx.save()
    this.#context.fillStyle = '#f00'
    switch(origin){
      case 2: startX = -w/2; e += w/2; break
      case 3: startX = -w; e += w; break
      case 4: startY = -h/2; f += h/2; break
      case 5: startX = -w/2; startY = -h/2; e += w/2; f += h/2; break
      case 6: startX = -w; startY = -h/2; e += w; f += h/2; break
      case 7: startY = -h; f += h; break
      case 8: startX = -w/2; startY = -h; e += w/2; f += h; break
      case 9: startX = -w; startY = -h; e += w; f += h; break
      default: startX = 0; startY = 0
    }
    ctx.transform(a, b, c, d, e, f);
    ctx.fillRect(startX, startY, w, h)
    ctx.restore()




    this.#context.fillStyle = '#0f0'
    ctx.fillRect(99, 99, 3, 3)
    ctx.fillRect(148, 99, 3, 3)
    ctx.fillRect(199, 99, 3, 3)
    ctx.fillRect(99, 124, 3, 3)
    ctx.fillRect(148, 124, 3, 3)
    ctx.fillRect(199, 124, 3, 3)
    ctx.fillRect(99, 149, 3, 3)
    ctx.fillRect(148, 149, 3, 3)
    ctx.fillRect(199, 149, 3, 3)

  }
  draw({type, data, config}){ 
    /*
    [
       {type:'Rect', data:[0,0,100,50,{fillStyle:'#f00'}]},
       {type:'Sprite', children:[], config:{}}
    ]
    图层结构
    {
       0:{type:'Rect', data:[0,0,100,50,{fillStyle:'#f00'}]},
       1:{type:'Sprite', children:[], config:{}}
    }
    */
    
    if (config) {
      if (config.alpha) {
        this.#context.save(); this.#context.globalAlpha = config.alpha
      }
    }
    
    this['draw'+type].apply(this, data) 

    if (config) {
      if (config.alpha) {
        this.#context.restore(); 
      }
    }
  }
  drawSprite(x, y, children, ){}
  /**
   * drawRect(x, y, width, height, options)
   */    
  drawRect(x, y, width, height, options, config){ 
    options = options || {}
    Object.assign(this.#context, options)
    this.#context.beginPath()
    options.fillStyle && this.#context.fillRect(x, y, width, height)
    options.strokeStyle && this.#context.strokeRect(x, y, width, height)
    
  }
  /**
   * drawCircle(x, y, r, options)
   */
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
   * 绘制图片
   * img	          规定要使用的图像、画布或视频。
     sx	sy	        可选。开始剪切的 xy 坐标位置。
     swidth sheight	可选。被剪切图像的宽度高度。
     x y	          在画布上放置图像的 xy 坐标位置。
     width height	  可选。要使用的图像的宽度高度。（伸展或缩小图像）
   * config{save: true, clip: true, transform:[]}
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