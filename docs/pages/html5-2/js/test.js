drawSprite({x, y, width, height, options, children, transform, config}){
    children = children || []
    options = options || {}
    const ctx = this.#context
    const deg = Math.PI/180
    let originX = 0, originY = 0 // 变换原点计算

    // 变换
    let {translateX, translateY, scaleX, scaleY, skewX, skewY, rotate, alpha, origin} = transform
    let a = 1, d = 1, b = 0, c = 0, e = x, f = y
    let isTansform = false
    if (alpha < 1) {ctx.globalAlpha = alpha; isTansform = true}
    if (Object.prototype.toString.call(origin) === '[object Array]') { originX = -origin[0]; originY = -origin[1]; e += origin[0]; f += origin[1]; isTansform = true }
    if (Object.prototype.toString.call(origin) === '[object Number]') {
      switch(origin){
        case 2: originX = -width/2; e += width/2; break
        case 3: originX = -width; e += width; break
        case 4: originY = -height/2; f += height/2; break
        case 5: originX = -width/2; originY = -height/2; e += width/2; f += height/2; break
        case 6: originX = -width; originY = -height/2; e += width; f += height/2; break
        case 7: originY = -height; f += height; break
        case 8: originX = -width/2; originY = -height; e += width/2; f += height; break
        case 9: originX = -width; originY = -height; e += width; f += height; break
        default: originX = 0; originY = 0
      }
      isTansform = true
    }
    if (rotate != 0){ a = Math.cos(deg*rotate); d = Math.cos(deg*rotate); b = Math.sin(deg*rotate); c = -Math.sin(deg*rotate); isTansform = true}
    if (scaleX != 1){ a *= scaleX; c *= scaleX; isTansform = true}   
    if (scaleY != 1){ d *= scaleY; b *= scaleY; isTansform = true}
    if (skewX) { c += skewX; isTansform = true}  
    if (skewY) { b += skewY; isTansform = true}
    if (translateX != 0) { e += translateX; isTansform = true}
    if (translateY != 0) { f += translateY; isTansform = true}

    if (isTansform) {
      
      ctx.save()
      ctx.transform(a, b, c, d, e, f)
    }
    
    children.forEach(({type, data, parent, config}) => { 
      !data.options && (data.options = options)
      let e = {type, data: {...data}, parent, config}
      // 变换原点非默认时(默认[0,0])
      if (originX || originY) {if (e.type === 'Polygon') {e.data.points.forEach(point => {point[0] += originX; point[1] += originY})} else {e.data.x += originX; e.data.y += originY}} 
      this.draw(e) 
    })

    isTansform && this.#context.restore()
    // 显示元素范围节点
    if (config && config.showRange) this.drawRangePointer({x, y, width, height}, config.rangeColor)
}