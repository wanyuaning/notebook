// let tool = {
//   bind: (() => window.addEventListener ? function (e, t, h) {e.addEventListener(t, h, false)} : function (e, t, h) {e.attachEvent("on" + t, h)})(),
//   getEventObj: e => e || win.event
// }

class Input{

  #subscribe = {}
  #DragEvent = new CustomEvent('drag', { 
      detail: { title: '自定我拖动事件'},
  })

  constructor(){

    // 键盘按键编码和键名
    let keyboardMap = {
      8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 
      37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "delete", 91: "leftwindowkey", 92: "rightwindowkey", 93: "selectkey", 106: "multiply", 107: "add", 109: "subtract", 
      110: "decimalpoint", 111: "divide", 144: "numlock", 145: "scrollock", 186: "semicolon", 187: "equalsign", 188: "comma", 189: "dash", 190: "period", 191: "forwardslash", 
      192: "graveaccent", 219: "openbracket", 220: "backslash", 221: "closebracket", 222: "singlequote"
    };
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach((key, i) => { keyboardMap[48 + i] = key });
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].forEach((key, i) => { keyboardMap[65 + i] = key });
    ["numpad1", "numpad2", "numpad3", "numpad4", "numpad5", "numpad6", "numpad7", "numpad8", "numpad9"].forEach((key, i) => { keyboardMap[96 + i] = key });
    ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9"].forEach((key, i) => { keyboardMap[112 + i] = key });
    
    tool.bind(window, "keydown", e => { e = tool.getEvent(e); let key = keyboardMap[e.keyCode], sub = this.#subscribe; sub[key] && sub[key].down.forEach(handler => handler()) });
    tool.bind(window, "keyup", e => { e = tool.getEvent(e); let key = keyboardMap[e.keyCode], sub = this.#subscribe; sub[key] && sub[key].up.forEach(handler => handler()) });
    tool.bind(window, "mousedown", e => {
     let sub = this.#subscribe; sub['mousedown'] && sub['mousedown'].forEach(handler => handler()) })
    tool.bind(window, "mousemove", e => { 
      window.dispatchEvent(this.#DragEvent)
      //let sub = this.#subscribe; sub['mousemove'] && sub['mousemove'].forEach(handler => handler()) 
    })
		tool.bind(window, "mouseup", e => { let sub = this.#subscribe; sub['mouseup'] && sub['mouseup'].forEach(handler => handler()) })
  }
  keydown(key, handler){ let sub = this.#subscribe; !sub[key] && (sub[key] = {down: [], up: []}); sub[key].down.push(handler) }
  keyup(key, handler){ let sub = this.#subscribe; !sub[key] && (sub[key] = {down: [], up: []}); sub[key].up.push(handler) }
  mousedown(target, handler){
    // e = tool.getEventObj(e)
    // console.log('e',e);
    
    
  }
  mousemove(){}
  mouseup(){}
}