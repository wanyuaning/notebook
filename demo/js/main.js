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

  dom_account_url.innerText = C.URL_Account

  const index2 = parseInt(Math.random() * C.WX_GeneralAgent.length)
  dom_wx_1.innerText = C.WX_GeneralAgent[index2]
  
  const index = parseInt(Math.random() * C.WX_Mentor.length)
  dom_wx_2.innerText = C.WX_Mentor[index]

}(CONFIG))