
function handleDianzhui(data) {
  const REG_DZ = /\[\d\|?\s[^\]]+\]/g
  const Match_DZ_ARR = data.match(REG_DZ) || []
  Match_DZ_ARR.forEach(e => {
    const color = e.charAt(1)
    let content
    let tagStr
    if (e.charAt(2) === '|') {
      content = e.slice(4, e.length - 1)
      tagStr = `<span class="b cf bg${color}">${content}</span>`
    } else {
      content = e.slice(3, e.length - 1)
      tagStr = `<span class="b cl${color}">${content}</span>`
    }
    data = data.replace(e, tagStr)
  })
  return data
}
function handleTable(data) {
  const rows = data.split('\n') || []
  rows.forEach((e, i) => {
    const cols = e.split(/\s{2,}/) || []
    for (let j = 0; j < cols.length; j++) {
      data = data.replace(cols[j], `<span class="row${i} col${j}">${cols[j]}</span>`)
    }
  })
  return data
}
function handleLink(data) {
  const reg = /\[.+?\]\(.+?\)/g
  const linkMatchArr = data.match(reg) || []
  linkMatchArr.forEach(e => {
    const content = e.match(/\[.+?\]/)[0].replace('[', '').replace(']', '')
    const link = e.match(/\(.+?\)/)[0].replace('(', '').replace(')', '')
    data = data.replace(e, `<a href="#${link}">${content}</a>`)
  })
  return data
}
function handlePop(data) {
  const reg = /\(.+?\)\(.+?\)/g
  const Match_POP_ARR = data.match(reg) || []
  Match_POP_ARR.forEach(e => {
    const arr = e.split(')(')
    const content = arr[0].replace('(', '')
    const comment = arr[1].replace(')', '')
    data = data.replace(e, `<span class="pop" text="${comment}">${content}</span>`)
  })
  return data
}
function handleTitle(data) {
  const reg = /#{1,6}\|?\d?\d?(\s[\w-]+)+\s*?[\n<]/g
  const Match_TITLE_ARR = data.match(reg) || []
  Match_TITLE_ARR.forEach(e => {
    e = e.replace('<', '')
    const count = e.match(/#{1,6}/)[0].length
    const content = e.replace(/#{1,6}\|?\d?\d? /, '')
    const fst = e.charAt(count)

    if (fst === ' ') {
      data = data.replace(e, `<h${count}>${content}</h${count}>`)
    } else {
      const scd = e.charAt(count + 1)
      let classStr = '', bg = '', color = ''
      if (fst === '|') {
        if (scd.match(/\d/)) {
          bg = scd
          const thr = e.charAt(count + 2)
          thr.match(/\d/) && (color = thr)
        }
        classStr = `class="bg${bg} cl${color}"`
      } else {
        fst.match(/\d/) && (color = fst)
        classStr = `class="cl${color}"`
      }
      data = data.replace(e, `<h${count} ${classStr}>${content}</h${count}>`)
    }

  })
  return data
}
/**
 * 处理通用格式：注释
 * @param {string} data 
 */
function handleCommon(data) {
  const REG = /(\/\/|#)\s*.+?(\n|$|\s{3,})/g
  const Match_ARR = data.match(REG) || []
  Match_ARR.forEach(e => {
    data = data.replace(e, `<span class="cc">${e}</span>`)
  })
  return data
}

var HANDLER_MAP = {
  dianzhui: handleDianzhui, // 点缀
  table: handleTable,
  link: handleLink,
  popover: handlePop,
  title: handleTitle
}

/**
 * 代码块类型分发入口
 * 类型描述：```ornament  ```
 * 样式描述：.markdown-section pre>code[class~=lang-ornament]{ }
 * Ewan 2020-10-18 13:23
 */
function codeDistributeEntry(hook, vm) {
  let hasPanels = false;
  hook.beforeEach(function (content) {
    return content;
  });
  hook.afterEach(function (html, next) {
    html = html.replace(/h-t-t-p/g, 'http')
    html = html.replace(/h-ttp/g, 'http')
    html = html.replace(/w-w-w/g, 'www')
    html = html.replace(/w-ww/g, 'www')
    /**
     * 识别 <pre v-pre data-lang="tree link"></pre>
     * 正则 /<pre v-pre data-lang="[\w| ?|\w?]+">[\s\S]*?<\/pre>?/
     */
    const REG_PRE = /<pre v-pre data-lang="[\w| ?|\w?]+">[\s\S]*?<\/pre>?/gm
    const REG_CODE = /<code class="lang-[\w ?\w?]+">[\s\S]*?<\/code>?/gm
    const REG_LANG = /<pre v-pre data-lang="[\w| ?|\w?]+">/
    const Match_PRE_ARR = html.match(REG_PRE) || []
    Match_PRE_ARR.map(pre => {
      const langArr = pre.match(REG_LANG)[0].replace('<pre v-pre data-lang="', '').replace('">', '').split(' ') || []
      const Match_CODE_ARR = pre.match(REG_CODE) || []
      const Match_CODE = Match_CODE_ARR.length > 0 ? Match_CODE_ARR[0] : ''
      const Match_CODE_TEXT = Match_CODE.replace(/<code class="lang-[\w]+[ \w-]{0,}?">/, '').replace(/<\/code>/, '')
      console.log(Match_CODE_TEXT);
      
      let NEW_CODE_TEXT = handleCommon(Match_CODE_TEXT)// Match_CODE_TEXT
      
      langArr.forEach(lang => {
        if (HANDLER_MAP[lang]) {
          NEW_CODE_TEXT = HANDLER_MAP[lang](NEW_CODE_TEXT)
        }
      })
      html = html.replace(Match_CODE_TEXT, NEW_CODE_TEXT);
    })

    /**
     * 详情 <a href="#/pages/javascript/ecma">detail</a>
     */
    const REG_Detail = /<a href="[^"]+"\s?>detail\d?<\/a>/g
    const Match_Detail_Arr = html.match(REG_Detail) || []
    Match_Detail_Arr.forEach(e => {
      const level = e.match(/detail\d?/)[0].charAt(6)
      const className = 'ui-detail-' + (level || 6);

      const tag = e.replace(/>detail\d?/, ' class="' + className + '"><img src="../../../assets/icon/more2.svg" />')
      html = html.replace(e, tag)
    })

    /**
     * 信息 (info http://www.androiddevtools.cn/)
     */
    const REG_Info = /\(info\d?\s{1,2}[^)]+\)/g
    const Match_Info_Arr = html.match(REG_Info) || []
    Match_Info_Arr.forEach(e => {
      const level = e.match(/\(info\d?/)[0].charAt(5)
      const content = e.replace(/\(info\d?\s{1,2}/, '').replace(')', '')
      const className = 'ui-info-' + (level || 6);
      html = html.replace(e, `<span class="${className}" info="${content}"><img src="../../../assets/icon/info.svg?v=1" /></span>`)
    })

    /**
     * 补充 [!“adb”不是内部或外部命令](platform-tools/复制adb.exe，AdbWinApi.dll，AdbWinUsbApi.dll 到 C:\用户\new 目录下.)
     */
    const REG_Supplement = /\[[!?][^\]]+\]\([^\)]+\)/g
    const Match_Supplement_Arr = html.match(REG_Supplement) || []
    Match_Supplement_Arr.forEach(e => {
      const type = e.charAt(1)
      const title = e.match(/\[[!?][^\]]+\]/)[0].substr(2,).replace(']', '')
      const content = e.match(/\([^\)]+\)/)[0].replace('(', '').replace(')', '')
      html = html.replace(e, `<div class="ui-supplement"><h6>${title}</h6><p>${content}</p></div>`)
    })

    

    next(html);
  });
}

if (window) {
  window.$docsify = window.$docsify || {};
  // Init plugin
  window.$docsify.plugins = [].concat(
    codeDistributeEntry,
    (window.$docsify.plugins || [])
  );
}
