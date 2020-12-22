/**
 * 注册事件过程
 */
function EventCycle(){
  this.DRAGER_MAP = {}
  this.EL_COUNT = 0

  var mouse_ev_state = 0
  var mouse_init_position = {x: 0, y: 0}
  var current_iden = ''

  function handleMove(offset){
    var ev = this.DRAGER_MAP[current_iden]
    var el = ev.target || ev.el
    var ps = ev.position
    el.style.left = ps.x + offset.x + 'px'
    el.style.top = ps.y + offset.y + 'px'
  }
  function handleEnd(offset){
    var ev = this.DRAGER_MAP[current_iden]
    var el = ev.target || ev.el
    var ps = ev.position
    el.style.left = ps.x + offset.x + 'px'
    el.style.top = ps.y + offset.y + 'px'

    ps.x = ps.x + offset.x
    ps.y = ps.y + offset.y

    mouse_ev_state = 0
    current_iden = ''

    this.end(offset)
  }

  document.addEventListener('mousedown', e => {
    // 目标识别 依据 data-ev-iden
    var iden = e.target.getAttribute('data-ev-iden')
    if (!iden) return
    current_iden = iden
    mouse_ev_state = 1

    var e = e || window.event            // 兼容event事件  
    mouse_init_position.x = e.clientX             // 获取鼠标坐标
    mouse_init_position.y = e.clientY 
    
    this.start()
  })
  document.addEventListener('mousemove', e => {
    if (mouse_ev_state === 0) return
    var offset = {x: 0, y: 0}
    var e = e || window.event            // 兼容event事件  
    var x = e.clientX, y = e.clientY     // 获取鼠标坐标
    offset.x = x - mouse_init_position.x
    offset.y = y - mouse_init_position.y
    handleMove.call(this, offset)
    
  })
  document.addEventListener('mouseup', e => {
    if (mouse_ev_state === 0) return
    var offset = {x: 0, y: 0}
    var e = e || window.event            // 兼容event事件  
    var x = e.clientX, y = e.clientY     // 获取鼠标坐标
    offset.x = x - mouse_init_position.x
    offset.y = y - mouse_init_position.y
    handleEnd.call(this, offset)
  }) 
}  
EventCycle.prototype = {
  constructor: EventCycle,
  /**
   * @type   事件类型
   * @el     事件元素
   * @target 响应目标
   */
  register: function(type, el, target){
    if (el.getAttribute('data-ev-iden')) return
    var styleTarget = target || el    
    var style = window.getComputedStyle(styleTarget, null)
    var x = parseInt(style.left) || 0
    var y = parseInt(style.top) || 0
    el.style.cursor = 'move'
    var dragItem = {
      el,
      target: target || null,
      position: {x, y}
    }
    // 为元素添加标识 用于事件开始时目标识别
    var iden = "EL_EV_ID_" + this.EL_COUNT
    el.setAttribute("data-ev-iden", iden)
    this.DRAGER_MAP[iden] = dragItem
    this.EL_COUNT++
  },
  start: function(){},
  end: function(){}  
}

//module.exports = new EventCycle()