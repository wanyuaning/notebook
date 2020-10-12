// 配置
const CONFIG = {
  URL_Video:       'videos/demo.mp4',                    // 视频源
  URL_Account:     'www.baidu.com',                      // 开户网址
  WX_GeneralAgent: ['12383345', '33883346', '7777747'],  // 总代理微信
  WX_Mentor:       ['55883345', '55883346', '55883347'], // 导师微信集
}

// 环境/工具
const clickEvent = 'ontouchstart' in document.documentElement === true ? 'touchstart' : 'click'
Element.prototype.addClass = function (cn) {
  let className = this.className
  if (className.indexOf(cn) > -1) return this
  className = (className + ' ' + cn).replace(/\s+/, ' ')
  this.className = className
  return this
}
Element.prototype.delClass = function (cn) {
  let className = this.className
  if (className.indexOf(cn) < 0) return this
  className = className.replace(cn, '')
  this.className = className
  return this
}
Element.prototype.hasClass = function (cn) {
  return this.className.indexOf(cn) > -1
}


function formatTime(seconds){
  let s = parseInt(seconds % 60)
  s < 10 && (s = '0' + s)
  let m = parseInt(seconds/60)
  let h = parseInt(m/60)
  h < 10 && (h = '0' + h)
  m = m%60
  m < 10 && (m = '0' + m)
  return h + ':' + m + ':' + s
}

/**
 * 播放抽象 
 * @selector {String}  Video选择器
 * @options  {Object}  配置项
 */
function Player(selector, options){
  const CONFIG = {
    poster: '',
    volume: 0.5,
    skipStepLength: 5 // 快进快退步长(单位秒)
  }
  Object.assign(CONFIG, options || {})

  const VIDEO = document.querySelector(selector)
  VIDEO.controls = false
  VIDEO.volume = CONFIG.volume
  CONFIG.poster && (VIDEO.poster = CONFIG.poster)

  this.video = VIDEO
  this.config = CONFIG
}
Player.prototype = {
  constructor: Player,
  hasBindControls: false, // 是否绑定过控制面板
  install: function (src) {

    const video = this.video
    const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    
    if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
      const mediaSource = new MediaSource()
      video.src = URL.createObjectURL(mediaSource) 
      mediaSource.addEventListener('sourceopen', sourceOpen)
    } else {
      video.src = src
      video.load();
    }
    
    function sourceOpen () {
      const mediaSource = this 
      let sourceBuffer = mediaSource.addSourceBuffer(mimeCodec) 
      //发起网络请求
      fetch(src)
      .then(res => res.arrayBuffer())
      .then((buf) => {
        sourceBuffer.addEventListener('updateend', function (_) {
          mediaSource.endOfStream()
          //video.play()
        })
        sourceBuffer.appendBuffer(buf)
      })
      .catch(e => console.log(e))
    } 

    video.addEventListener('play',       (e) => { this.handlePlay() })
    video.addEventListener('pause',      (e) => { this.handlePause() })
    video.addEventListener('progress',   (e) => { console.log('progress') })
    video.addEventListener('error',      (e) => { console.log('error') })
    video.addEventListener('ended',      (e) => { console.log('ended') })
    video.addEventListener('abort',      (e) => { console.log('abort') })
    video.addEventListener('empty',      (e) => { console.log('empty') })
    video.addEventListener('emptied',    (e) => { console.log('emptied') })
    video.addEventListener('waiting',    (e) => { console.log('waiting') })
    video.addEventListener('ended',      (e) => { this.handlePlayend() })
    video.addEventListener('timeupdate', (e) => { 
      let percentage = video.currentTime / video.duration
      percentage = percentage * 100 + '%'
      this.handlePlaying(video.currentTime, video.duration, percentage)
    })
    
  },
  init:   function () { /**实例重写**/      },
  play:   function () { this.video.play()  },
  pause:  function () { this.video.pause() },
  apace:  function (direction) {
    const step = this.config.skipStepLength
    this.video.currentTime += step * direction
  },
  toPlay: function (percentage) { 
    const video = this.video
    video.currentTime = percentage * video.duration 
    this.play()
  },
  fullscreen: function () { 
    const video = this.video
    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen()
    } else {
      // iOS进入全屏
      video.webkitEnterFullscreen()
      // 针对iOS监听不到webkitfullscreenchange事件做的兼容，感知退出全屏
      let timer = setInterval(() => {
        if (!video.webkitDisplayingFullscreen) {
          // 退出了全屏
          clearInterval(timer)
        }
      }, 1000);
    }
  },
  handlePlay:    function () { /**实例重写**/ },
  handlePause:   function () { /**实例重写**/ },
  handlePlaying: function () { /**实例重写**/ },
  handlePlayend: function () { /**实例重写**/ }
}

/**
 * 控制面板分离
 * @options {Object} 配置交互元素 
 */
function PlayerControl(options){
  const CONFIG = {
    btn_play:       null, // 播放、暂停(CLASSNAME start/pause)
    btn_fullscreen: null, // 全屏
    btn_forward:    null, // 快进
    btn_back:       null, // 快退
    progress_outer: null, // 进度条Wrapper
    progress_inner: null, // 进度条Percentage
    current_time:   null  // 已播时长
  }
  Object.assign(CONFIG, options || {})

  this.player = null
  this.config = CONFIG
}
PlayerControl.prototype = {
  constructor: PlayerControl,
  hasBindPlayer: false, // 是否绑定过播放器
  bindPlayer: function (player) {
    if (player.hasBindControls) return // 播放器已绑定了控制面板

    const {btn_play, btn_fullscreen, btn_forward, btn_back, progress_outer, progress_inner, current_time} = this.config    
    const controls = this
    
    player.handlePlay = function () {
      btn_play && btn_play.addClass('start').delClass('pause')
      controls.playerPlay() 
    }
    player.handlePause = function () { 
      btn_play && btn_play.addClass('pause').delClass('start')
      controls.playerPause() 
    }
    player.handlePlaying = function (currentTime, duration, percentage) { 
      progress_inner && (progress_inner.style.width = percentage)
      current_time   && (current_time.innerText = formatTime(currentTime))
    }
    player.handlePlayend = function () { 
      controls.playerPlayend() 
    }
  
    btn_play       && btn_play.addEventListener(clickEvent,       (e) => { player.play()       })
    btn_fullscreen && btn_fullscreen.addEventListener(clickEvent, (e) => { player.fullscreen() })
    btn_forward    && btn_forward.addEventListener(clickEvent,    (e) => { player.apace(1)     })
    btn_back       && btn_back.addEventListener(clickEvent,       (e) => { player.apace(-1)    })
    progress_outer && progress_outer.addEventListener(clickEvent, (e) => {
      const dom_width = parseInt(getComputedStyle(e.currentTarget).width)
      player.toPlay(e.layerX/dom_width)
    })
    this.hasBindPlayer = true
    this.player = player
  },
  playerPlay:    function () { /**实例重写**/ },
  playerPause:   function () { /**实例重写**/ },
  playerPlayend: function () { /**实例重写**/ }
}


;(function(C){

  const dom_account_url = document.querySelector('#account-url')
  const dom_wx_1        = document.querySelector('#wx-placeholder-1')
  const dom_wx_2        = document.querySelector('#wx-placeholder-2')
  const dom_mask        = document.querySelector('#video-mask')
  const dom_message     = document.querySelector('#message')


  /**
   * 播放器实例
   */
  const player = new Player('video', {
    //poster: './images/banner.png', // 海报取消
    skipStepLength: 5
  })
  player.install(C.URL_Video)
  
  
  /**
   * 控制面板实例
   */
  const controlOptions = {
    btn_play: document.querySelector('#play'),
    btn_fullscreen: document.querySelector('#fullscreen'),
    btn_forward: document.querySelector('#forward'),
    btn_back: document.querySelector('#back'),
    progress_outer: document.querySelector('#progress-outer'),
    progress_inner: document.querySelector('#progress-inner'),
    current_time: document.querySelector('#current-time')
  }
  const controls = new PlayerControl(controlOptions)
  controls.bindPlayer(player)
  controls.playerPlay = () => {
    controlOptions.btn_play.style.display = 'none'
    dom_mask.className = 'mask close'
  }
  controls.playerPause = () => {
    controlOptions.btn_play.style.display = 'inline-block'
    dom_mask.className = 'mask'
  }
  // dom_mask.addEventListener(clickEvent, (e)=>{
  //   if (!dom_mask.hasClass('close')) return
  //   player.play()
  // })
 

  /**
   * 拷贝
   */
  // 公共消息
  function handleMessage(content){
    dom_message.className = 'message active'
    dom_message.innerText = content
    setTimeout(function(){
      dom_message.className = 'message'
    }, 2500)
  }  
  const clipboard = new ClipboardJS('#copy1')
  clipboard.on('success', function(e) {
    handleMessage('总代理微信已复制到剪贴板！')
    e.clearSelection();
  })
  clipboard.on('error', function(e) {
    handleMessage('复制失败！')
  })

  const clipboard2 = new ClipboardJS('#copy2')
  clipboard2.on('success', function(e) {
    handleMessage('导师微信已复制到剪贴板！')
    e.clearSelection();
  })
  clipboard2.on('error', function(e) {
    handleMessage('复制失败！')
  })

  const clipboard3 = new ClipboardJS('#copy3')
  clipboard3.on('success', function(e) {
    handleMessage('网址已复制到剪贴板！')
    e.clearSelection();
  })
  clipboard3.on('error', function(e) {
    handleMessage('复制失败！')
  })


  /**
   * 动态文本
   */
  dom_account_url.innerText = C.URL_Account

  const index2 = parseInt(Math.random() * C.WX_GeneralAgent.length)
  dom_wx_1.innerText = C.WX_GeneralAgent[index2]
  
  const index = parseInt(Math.random() * C.WX_Mentor.length)
  dom_wx_2.innerText = C.WX_Mentor[index]

}(CONFIG))