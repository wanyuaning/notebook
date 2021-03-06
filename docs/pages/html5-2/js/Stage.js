class Stage{
  #canvas
  #context
  #width
  #height
  #scale = [1, 1]
  constructor(canvas, width, height){
    if (canvas) {
      this.#canvas = canvas
      this.#context = canvas.getContext("2d")
    }
    if (width && height) {
      this.#width = width
      this.#height = height
      if (canvas) {
        canvas.width = width
        canvas.height = height
      }
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
  setStageSize(width, height, styleWidth, styleHeight){
    this.#width = width
    this.#height = height
    this.#canvas.width = width
    this.#canvas.height = height
    if (styleWidth && styleHeight) {
      this.#canvas.style.width = styleWidth + 'px'
      this.#canvas.style.height= styleHeight + 'px'
    }
    //let style = tool.getStyle(this.#canvas)
  }
  showRuler(){
    let w = this.#width, h = this.#height, ctx = this.#context
    ctx.save()
    ctx.strokeStyle = '#ccc'
    ctx.lineWidth = '1px'
    ctx.beginPath()
    for(let i = 10; i < w; i += 10){ ctx.moveTo(i+0.5, 1); ctx.lineTo(i+0.5, 3) }
    for(let i = 10; i < h; i += 10){ ctx.moveTo(1, i+0.5); ctx.lineTo(3, i+0.5) }
    ctx.moveTo(0.5, h)
    ctx.lineTo(0.5, 0.5)
    ctx.lineTo(w, 0.5)
    ctx.stroke()
    ctx.beginPath()
    ctx.lineWidth = 2
    for(let i = 100; i < w; i += 100){ ctx.moveTo(i, 0); ctx.lineTo(i, 6) }
    for(let i = 100; i < h; i += 100){ ctx.moveTo(0, i); ctx.lineTo(6, i) }
    ctx.stroke()
    ctx.restore()
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
    ctx.save()
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.beginPath()
    for(let i = 0; i < w; i += size){ ctx.moveTo(i+0.5, 0); ctx.lineTo(i+0.5, h) }
    for(let i = 0; i < h; i += size){ ctx.moveTo(0, i+0.5); ctx.lineTo(w, i+0.5) }
    ctx.moveTo(w, 0)
    ctx.lineTo(w, h)
    ctx.lineTo(0, h)
    ctx.stroke()
    ctx.restore()
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
     save              缓存options
     restore           释放缓存
     beginPath         开启新路径
     clip: true,       通过save/restore做到撤消的效果
     showRange: true   显示范围
     rangeColor:'#0f0' 范围颜色 默认黑色
     ▇▇▇▇▇▇▇▇▇▇▇ transform ▇▇▇▇▇▇▇▇▇▇▇▇
     rotate: 45
     translate: [10, 10]
     scale: [2, 1.5]
     skew: [1, 1] [1=45度,直角锐角邻边与对边之比]
     origin: 5    [1/2/3/4/5/6/7/8/9]

     位移 ctx.transform(a,b,c,d,[e],[f])
     旋转 ctx.transform([a],[b],[c],[d],e,f)
     缩放 ctx.transform([a],b,c,[d],e,f)
                                 
  */
  draw({type, data, config}){ 
    this.#context.beginPath()
    if (config) {
      if (config.save || config.clip) {
        this.#context.save()
      }
    }
    this['draw'+type](data)
    if (config) {
      config.clip && this.#context.clip()
      if (config.restore || config.unclip) {
        this.#context.restore()
      }
    }
  }
  getOrigin(width, height, type){
    const origin = [0, 0]
    switch(type){
      case 2: origin[0] = -width/2; break
      case 3: origin[0] = -width; break
      case 4: origin[1] = -height/2; break
      case 5: origin[0] = -width/2; origin[1] = -height/2; break
      case 6: origin[0] = -width; origin[1] = -height/2; break
      case 7: origin[1] = -height; break
      case 8: origin[0] = -width/2; origin[1] = -height; break
      case 9: origin[0] = -width; origin[1] = -height; break
    }
    return origin
  }
  // 绘制精灵
  drawSprite({x, y, width, height, options, children, transform, config}){
    children = children || []
    options = options || {}
    const ctx = this.#context, deg = Math.PI/180
    let originX = 0, originY = 0 // 变换原点计算

    // 变换
    ctx.save()
    let {translateX, translateY, scaleX, scaleY, skewX, skewY, rotate, alpha, origin} = transform
    let a = 1, d = 1, b = 0, c = 0, e = x, f = y, isTansform = false    
    if (alpha < 1) {ctx.globalAlpha = alpha; isTansform = true}
    if (origin != 1){
      let type = Object.prototype.toString.call(origin)
      if (type === '[object Array]') { originX = -origin[0]; originY = -origin[1] }
      type === '[object Number]' && ([originX, originY] = this.getOrigin(width, height, origin))
      isTansform = true
    }        
    if (rotate != 0){ a = Math.cos(deg*rotate); d = Math.cos(deg*rotate); b = Math.sin(deg*rotate); c = -Math.sin(deg*rotate); isTansform = true}
    if (scaleX != 1){ a *= scaleX; c *= scaleX; isTansform = true}   
    if (scaleY != 1){ d *= scaleY; b *= scaleY; isTansform = true}
    if (skewX) { c += skewX; isTansform = true}  
    if (skewY) { b += skewY; isTansform = true}
    if (translateX != 0) { e += translateX; isTansform = true}
    if (translateY != 0) { f += translateY; isTansform = true}
    if (isTansform) { e -= originX; f -= originY; ctx.transform(a, b, c, d, e, f) } 
    
    children.forEach(({type, data, parent, config}) => { 
      !data.options && (data.options = options)
      let e = {type, data: {...data}, parent, config}
      // 变换原点非默认时(默认[0,0])
      if (originX || originY) {if (e.type === 'Polygon') {e.data.points.forEach(point => {point[0] += originX; point[1] += originY})} else {e.data.x += originX; e.data.y += originY}} 
      this.draw(e) 
    })

    ctx.restore()
    // 显示元素范围节点
    if (config && config.showRange) this.drawRangePointer({x, y, width, height}, config.rangeColor)
  }
  drawRangePointer({x, y, width, height}, color){
    let fillStyle = color || '#000'
    this.draw({type: 'Rect', data: {x:x-2, y:y-2, width:4, height:4, options:{fillStyle}}})
    this.draw({type: 'Rect', data: {x:x+width/2-2, y:y-2, width:4, height:4, options:{fillStyle}}})
    this.draw({type: 'Rect', data: {x:x+width-2, y:y-2, width:4, height:4, options:{fillStyle}}})
    this.draw({type: 'Rect', data: {x:x-2, y:y+height/2-2, width:4, height:4, options:{fillStyle}}})
    this.draw({type: 'Rect', data: {x:x+width/2-2, y:y+height/2-2, width:4, height:4, options:{fillStyle}}})
    this.draw({type: 'Rect', data: {x:x+width-2, y:y+height/2-2, width:4, height:4, options:{fillStyle}}})
    this.draw({type: 'Rect', data: {x:x-2, y:y+height-2, width:4, height:4, options:{fillStyle}}})
    this.draw({type: 'Rect', data: {x:x+width/2-2, y:y+height-2, width:4, height:4, options:{fillStyle}}})
    this.draw({type: 'Rect', data: {x:x+width-2, y:y+height-2, width:4, height:4, options:{fillStyle}}})
  }
  /**
   * drawRect(x, y, width, height, options)
   */    
  drawRect({x, y, width, height, options}){ 
    options = options || {}
    Object.assign(this.#context, options)
    this.#context.rect(x, y, width, height)
    options.fillStyle && this.#context.fill()
    options.strokeStyle && this.#context.stroke()
  }
  drawCircle({x, y, r, options}){
    options = options || {}
    Object.assign(this.#context, options)
    this.#context.arc(x, y, r, 0, 2*Math.PI, false);
    this.#context.closePath();
    options.fillStyle && this.#context.fill();
    options.strokeStyle && this.#context.stroke();
  }
  drawText({text, x, y, options}){
    options = options || {}
    Object.assign(this.#context, options)
    let maxWidth = options.maxWidth || this.#context.measureText(text).width
    this.#context.beginPath()
    options.fillStyle && this.#context.fillText(text, x, y, maxWidth)
    options.strokeStyle && this.#context.strokeText(text, x, y, maxWidth)
  }
  drawLine({start, end, options}){
    options = options || {}
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
  drawPolygon({points, options, config}){
    //console.log('11',points, options, config);
    
    options = options || {}
    config = config || {}
    let xPos = 0, yPos = 0, ctx = this.#context      
    Object.assign(ctx, options)
    ctx.beginPath()
    if (config && config.startPosition) {xPos = config.startPosition[0], yPos = config.startPosition[1]} 
    for(let i = 0, len = points.length; i < len - 1; i++){
      let start=points[i], end=points[i+1]
      ctx.lineTo(start[0] + xPos, start[1] + yPos)
      ctx.lineTo(end[0] + xPos, end[1] + yPos)
    }
    (options.fillStyle || config.closePath) && ctx.closePath()
    options.fillStyle && ctx.fill()
    options.strokeStyle && ctx.stroke()
  }
  /**
   * 绘制图片
   * img	          规定要使用的图像、画布或视频。
     sx	sy	        可选。开始剪切的 xy 坐标位置(图片定位)
     swidth sheight	可选。被剪切图像的宽度高度。
     x y	          在画布上放置图像的 xy 坐标位置(画布定位)
     width height	  可选。要使用的图像的宽度高度。（伸展或缩小图像）
   */
  drawImagee({img, sx, sy, swidth, sheight, x, y, width, height}){
    let ctx = this.#context;
    ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
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