const CONFIG = {
  URL_Video: 'videos/demo.mp4',                         // 视频源
  URL_Account: 'www.baidu.com',                         // 开户网址
  WX_GeneralAgent: ['12383345', '33883346', '7777747'], // 总代理微信
  WX_Mentor: ['55883345', '55883346', '55883347'],      // 导师微信集
}

;(function(C){

  const dom_account_url = document.querySelector('#account-url')
  const dom_wx_1 = document.querySelector('#wx-placeholder-1')
  const dom_wx_2 = document.querySelector('#wx-placeholder-2')
  const dom_mask = document.querySelector('#video-mask')
  const dom_video = document.querySelector('video')
  const dom_message = document.querySelector('#message')
  const btn_copy1 = document.querySelector('#copy1')
  const btn_copy2 = document.querySelector('#copy2')

  /** 偿试使用 mediaSource 源 */
  const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
    const mediaSource = new MediaSource()
    dom_video.src = URL.createObjectURL(mediaSource) 
    mediaSource.addEventListener('sourceopen', sourceOpen)
  } else {
    dom_video.src = C.URL_Video
    dom_video.load();
  }

  dom_video.controls = false
  dom_video.volume = 0.5
  dom_video.poster = "./images/banner.png"
  
  dom_video.addEventListener('ended', (e) => { dom_mask.className = 'mask' })

  function sourceOpen () {
    const mediaSource = this 
    let sourceBuffer = mediaSource.addSourceBuffer(mimeCodec) 
    //发起网络请求
    fetch(C.URL_Video)
    .then(res => res.arrayBuffer())
    .then((buf) => {
      sourceBuffer.addEventListener('updateend', function (_) {
        mediaSource.endOfStream()
        //dom_video.play()
      })
      sourceBuffer.appendBuffer(buf)
    })
    .catch(e => console.log(e))
  }

  const clickEvent = 'ontouchstart' in document.documentElement === true ? 'touchstart' : 'click'   
  dom_mask.addEventListener(clickEvent, (e) => {
    if (dom_video.paused) { 
      if (e.target.tagName !== 'IMG') return 
      dom_mask.className = 'mask close'
      dom_video.play()
    } else {
      dom_mask.className = 'mask'
      dom_video.pause()
    }
  })
    
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

  dom_account_url.innerText = C.URL_Account

  const index2 = parseInt(Math.random() * C.WX_GeneralAgent.length)
  dom_wx_1.innerText = C.WX_GeneralAgent[index2]
  
  const index = parseInt(Math.random() * C.WX_Mentor.length)
  dom_wx_2.innerText = C.WX_Mentor[index]

}(CONFIG))