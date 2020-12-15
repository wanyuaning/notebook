let GLOBAL_HTML = ''

/**
 * 代码块管理
 */
function CodeblockManager(){
  this.codeblock = {}
  // 场景列表
  this.SCENE = [
    //{title: '判断当前设备及获取设备', path: 'pages/javascript/bom?id=navigator', type: ''}  "◐判断当前设备及获取设备{path:'pages/javascript/bom?id=navigator',type:''}◑"
  ]      
}
CodeblockManager.prototype = {
  constructor: CodeblockManager,
  addCodeblock(id, content){
    this.codeblock[id] = {
      id,
      content
    }
  },
  search(id, keyword){
    const $code = document.querySelector('#CODE_'+id)
    const codeObj = this.codeblock[id]
    let content = codeObj.content
    const value = keyword || document.querySelector('#INPUT_'+id).value
    value.trim() && (content = content.replace(new RegExp(value, 'g'), `<span class="searched">${value}</span>`))
    $code.innerHTML = content
  },
  addScene(scene){ this.SCENE.push(scene)},
  createScene(){
    let content = ''
    this.SCENE.forEach(e => {
      console.log(e);
      
      content += `<a href="#/${e.path}">${e.title}</a>`
    })
    return `<div class="box-scene">${content}</div>`
  },
  // 聚合
  aggregate(type){
    alert(type)
    return `<ul class="no-list block-list"><li>标题</li><li><a href="#">子类一</a></li><li>子类二</li></ul> `
  }
}

const manager = new CodeblockManager()

function handleSitemap(data) {
  let matchStrong;
  while ((matchStrong = /█(.+)?█/.exec(data)) !== null) {
    data = data.replace(
      matchStrong[0],
      `<span class="c3 b">${matchStrong[1]}</span>`
    );
  }
  // 导航集
  let matchGroup;
  while ((matchGroup = /【([^\s】]+)-([^】]+)】/.exec(data)) !== null) {
    data = data.replace(
      matchGroup[0],
      `<span class="sitemap-group"><i class="t">${matchGroup[1]}</i><i class="l">${matchGroup[2]}</i></span>`
    );
  }
  // 表头
  let matchTable;
  while ((matchTable = /┣([^┫]+)┫/.exec(data)) !== null) {
    let html = matchTable[1];
    html =
      '<span class="sitemap-table"><span class="c">' + html + "</span></span>";
    html = html.replace(/┃/g, '</span><span class="c">');
    data = data.replace(matchTable[0], html);
  }
  // 按钮
  let matchButton;
  while ((matchButton = /►([^◄]+)◄/.exec(data)) !== null) {
    data = data.replace(
      matchButton[0],
      `<span class="button">${matchButton[1]}</span>`
    );
  }
  return data;
}

function handleTable(data) {
  const rows = data.split("\n") || [];
  let tableStr = ``;
  rows.forEach((e, i) => {
    let trStr = `<span class="row${i} col0">${e}</span>\n`;
    const spaceArr = trStr.match(/\s{2,}/) || [];
    spaceArr.forEach((space, j) => {
      trStr = trStr.replace(
        space,
        `</span>${space}<span class="row${i} col${j + 1}">`
      );
    });
    tableStr += trStr;
  });
  return tableStr;
}

function handlePop(data) {
  const reg = /\(.+?\)\(.+?\)/g;
  const Match_POP_ARR = data.match(reg) || [];
  Match_POP_ARR.forEach((e) => {
    const arr = e.split(")(");
    const content = arr[0].replace("(", "");
    const comment = arr[1].replace(")", "");
    data = data.replace(
      e,
      `<span class="pop" text="${comment}">${content}</span>`
    );
  });
  return data;
}

function handleBlock(data) {
  // API
  (data.match(/\[API\]\[[^\]]+\]\[[^\]]+\]/g) || []).forEach((e) => {
    let e2 = e
      .replace(/\[API\]/, '<i class="zhishi"></i>')
      .replace("[", '<i class="path">')
      .replace("]", "</i>")
      .replace("[", "<i>")
      .replace("]", "</i>");
    data = data.replace(e, e2);
  });
  // 场景
  // (data.match(/SCENE\(([^\)]+)\)/g) || []).forEach(e => {
  //   console.log('场景',e);

  // });
  let item;
  while ((item = /SCENE\(([^\)]+)\)/g.exec(data)) !== null) {
    const lists = JSON.parse(`[${item[1]}]`);
    let ulHTML = `<ul class="scene"><div>场景</div>`;
    lists.forEach((obj) => {
      ulHTML += `<li>${obj.title}</li>`;
    });
    ulHTML += `</ul>`;
    data = data.replace(item[0], ulHTML);
  }
  return data;
}
/**
 * 处理通用格式：注释
 * @param {string} data
 */
function handleCommon(data, dataid) {
  /**
   * 场景元素
   * 数据：◐判断当前设备及获取设备{'path':'pages/javascript/bom?id=navigator','type':''}◑
   * 匹配：[数据, 判断当前设备及获取设备, {'path':'pages/javascript/bom?id=navigator','type':''}]
   */
  //  
  let matchScene;
  while ((matchScene = /◐([^◑{]+)({[^◑}]+})◑/.exec(data)) !== null) {
    const sceneStr = matchScene[2].replace(/'/g, '"')
    const sceneObj = JSON.parse(sceneStr)
    sceneObj.title = matchScene[1]
    manager.addScene(sceneObj)
    data = data.replace(matchScene[0], `<span class="block-scene">${matchScene[1]}</span>`)
  }

  /**
   * 目录 [MULU]
   */
  const matchMulu = /\[MULU\]/.exec(data)
  if (matchMulu) {
    const titleArr = data.match(/\[[\w\- ]*h\d[\w\- ]*\|[^\]]+\]/g) || []
    const hash = location.hash.split('?')[0]
    let muluHTML = '目录：\n'
    let firstCount = 1
    titleArr.forEach((e, i) => {
      const matchArr = /\[[\w\- ]*h(\d)[\w\- ]*\|([^\]]+)\]/.exec(e)
      i === 0 && (firstCount = matchArr[1])
      
      let order  = matchArr[1] - firstCount
      order < 0 && (order = 0)
      const text = matchArr[2]
      muluHTML += `${' '.repeat(order*2)}<a href="${hash}?id=${text}">${text}</a>\n`
      data = data.replace(matchArr[0], '</code></pre><span id="'+matchArr[2]+'" class="noop"></span><pre v-pre class="none"><code>'+matchArr[0]);
    })
    data = data.replace('[MULU]', muluHTML);
  }

  // 水平线
  (data.match(/-+\n/g) || []).forEach((e) => {
    data = data.replace(e, '<div class="hr"></div>');
  });

  // 样式类：[s12 c0 b0 h1 b reverse inline|内容]
  let matchClass;
  while ((matchClass = /\[([^\|\[\]]+)\|([^\]]+)\]/.exec(data)) !== null) {
    data = data.replace(
      matchClass[0],
      `<span class="${matchClass[1]}">${matchClass[2]}</span>`
    );
  }

  /**链接
   * MATCH[[content](#), content, #]
   */ 
  let matchLink; 
  while ((matchLink = /\[([^\]]+)\]\(([^\)]+)\)/.exec(data)) !== null) {
    let linkTag = matchLink[2].includes('://') ? `<a target="_blank" href="${matchLink[2]}">${matchLink[1]}</a>` : `<a href="#${matchLink[2]}">${matchLink[1]}</a>`
    data = data.replace(matchLink[0], linkTag);
  }

  /** 如果使用 ｜ 分隔的话会和class冲突
   * [DETAIL/info01]    详情图标 提示 内容标识  ▉info01▉content▉
   * [INFO cg/info02]   信息图标 提示 内容标识  ▉info02▉content▉
   * [(cg)HELP>info03(width:100px;left:50px)]   (class)帮助图标 跳转 内容标识(content-stype)  [info03][content] 
   */
  let matchInfoLink;
  while ((matchInfoLink = /\[([\w\s-]*)(DETAIL|INFO|HELP|LINK|DETAILB|INFOB|HELPB)(\/|\>)([^\]\()]+)(\(([^\]\(\)]+)\))?\]/.exec(data)) !== null) {
    let cls  = matchInfoLink[1]
    let tag  = matchInfoLink[2].toLowerCase()    
    let type = matchInfoLink[3] 
    let id   = matchInfoLink[4]
    let contentStyle = matchInfoLink[6] ? ' style="'+matchInfoLink[6]+'"' : ''
    switch (type){
      case '>': // 跳转
        data = data.replace(matchInfoLink[0], `<a class="icon-${tag} ${cls}"></a>`);
        break;
      case '/': // 提示
          const matchContent = new RegExp(`▉${id}▉([^▉]*)▉`).exec(data)
          if (matchContent) {
            let match1 = matchContent[1]
            // HTML块暂存 ∵html∴
            let matchHTML, countHTML = 0, mapHTML = {};
            while ((matchHTML = /∵([^∴]+)∴/.exec(match1)) !== null) {
              const html = matchHTML[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>')
              const name = 'HTML_BLOCK_'+countHTML
              mapHTML[name] = html
              match1 = match1.replace(matchHTML[0], name)
              countHTML++
            }

            const lineArr = match1.split(/\n/)
            let maxLineLength = 0
            let content = ''
            lineArr.forEach((e, i) => {
              if(!!e || i!==0){
                maxLineLength = Math.max(maxLineLength, e.length)
                content += e + '<br>'
              }
            })
            // 转义空格
            let space
            while((space = /\s{2,}/.exec(content)) !== null){
              content = content.replace(space[0], '&nbsp;'.repeat(space[0].length))
            }

            // 如果没有样式匹配
            if(!contentStyle){
              let width = maxLineLength * 7
              width = width > 1000 ? 1000 : width
              contentStyle = ' style="width:'+width+'px;left:50px"'
            }   
            
            // HTML块回填
            for (let i in mapHTML) { content = content.replace(i, mapHTML[i]) }

            GLOBAL_HTML += `<span id="${id}" class="ewan-tips-content"><div${contentStyle}>${content}</div></span>`            
            data = data.replace(matchContent[0], ``); 
          }    
          data = data.replace(matchInfoLink[0], `<span class="ewan-tips icon-${tag} ${cls}" data-id="${id}"></span>`);
          break;
      default:
        data = data.replace(matchInfoLink[0], '')
    }
  }

  /**内容包裹 
   * [bg ciBOX content] 带CLASS
   * [BOX content]
   * [BOX 
   * content
   * ]
   */
  let matchBox
  while ((matchBox = /\[([\w\s-]*)BOX[\n\s]?([^\]]+)\n?\]/.exec(data)) !== null) {
    let arr = matchBox[2].split(/\n/)
    arr = arr.map(e => e.trim())
    const content = arr.join('\n')
    let className = 'box'
    matchBox[1] && (className += ' ' + matchBox[1])
    data = data.replace(matchBox[0], `<span class="${className}">${content}</span>`);
  }

  // 注释
  const REG = /(\/\/|#)\s.+?(\n|$)/g;
  const Match_ARR = data.match(REG) || [];
  Match_ARR.forEach((e) => {
    data = data.replace(e, `<span class="comment">${e}</span>`);
  });

  return data; 
}
function handleIcon(data) {
  data = data.replace(/[0-9a-z]{3,}/g, "");
  console.log(data);

  return data;
}

function handleKeydown(e){ 
  if (e.keyCode == 13) {
    console.log(e.currentTarget.value);
    
  }
}

var HANDLER_MAP = {
  table: handleTable,
  popover: handlePop,
  block: handleBlock,
  sitemap: handleSitemap,
  icon: handleIcon,
};



/**
 * 代码块类型分发入口
 * 类型描述：```ornament  ```
 * 样式描述：.markdown-section pre>code[class~=lang-ornament]{ }
 * Ewan 2020-10-18 13:23
 */
function codeDistributeEntry(hook, vm) {
  let hasPanels = false;
  hook.init(function() {
    //console.log('-------1 init')
  });
  hook.mounted(function(){ 
    //console.log('-------2 mounted')
  })
  hook.beforeEach(function (content) {
    //console.log('-------3 beforeEach')
    return content;
  });
  hook.afterEach(function (html, next) {
    //console.log('-------4 afterEach')
    /**
     * 识别 <pre v-pre data-lang="tree link"></pre>
     * 正则 /<pre v-pre data-lang="[\w| ?|\w?]+">[\s\S]*?<\/pre>?/
     * <pre v-pre data-lang="" class="none"><code class="lang-"></code></pre>
     */
    const Match_PRE_ARR = html.match(/<pre v-pre data-lang="([^"]+)?"\s?(class="[0-9a-zA-Z_-\s]+")?>[\s\S]*?<\/pre>/gm) || []
      
    Match_PRE_ARR.map((block, index) => {
      const ID = 'CODEBLOCK_' + index
      const MATCH_PRE = /<pre v-pre data-lang="([^"]+)?"/.exec(block)
      const MATCH_CODE = /<code class="lang-[^"]*">([\s\S]*?)<\/code>/.exec(block)
      
      let pre = MATCH_PRE[0].replace('<pre', `<pre id="PRE_${ID}"`) // 添加标识
      let code = MATCH_CODE[0].replace('<code', `<code id="CODE_${ID}"`) // 添加标识
      let code_content = MATCH_CODE[1]

      // 搜索 [SEARCH]
      const MATCH_SEARCH = /\[SEARCH\]\n/.exec(code_content)
      if (MATCH_SEARCH) {
        code = `<div class="item-search"><input type="text" id="INPUT_${ID}" onkeydown="if(event.keyCode!==13) return; manager.search('${ID}', this.value)" /><span title="搜索" class="icon-search submit" onclick="manager.search('${ID}')"></span> <input type="checkbox" name="running" checked><span class="text">忽略大小写</span></div>${code}`
        code_content = code_content.replace(/\[SEARCH\]\n/, '')
      }

      // 切换开关 [SWITCH∨][SWITCH∧]
      const MATCH_SWITCH = /\[SWITCH([∧∨]?)\]\n/.exec(code_content)
      if (MATCH_SWITCH) {
        code = `<button class="icon-arrow-down switch"></button>${code}`
        code_content = code_content.replace(/\[SWITCH[∧∨]?\]\n/, '')
      }
     
      // 常规处理
      code_content = handleCommon(code_content, ID)
      // 格式语言
      const langArr = (MATCH_PRE[1] || '').split(" ")
      if (!langArr.includes('runtime')){
        langArr.forEach((lang) => {
          if (HANDLER_MAP[lang]) {
            code_content = HANDLER_MAP[lang](code_content);
          }
        });
        code = code.replace(MATCH_CODE[1], code_content);
        html = html.replace(MATCH_CODE[0], code);  
        manager.addCodeblock(ID, code_content)
      } 
      
    });

    /**
     * 详情 <a href="/pages/javascript/ecma">detail</a>
     */
    // const REG_Detail = /<a href="[^"]+"\s?>detail\d?<\/a>/g;
    // const Match_Detail_Arr = html.match(REG_Detail) || [];
    // Match_Detail_Arr.forEach((e) => {
    //   const level = e.match(/detail\d?/)[0].charAt(6);
    //   const className = "ui-detail-" + (level || 6);

    //   const tag = e.replace(
    //     />detail\d?/,
    //     ' class="' +
    //       className +
    //       '"><img src="../../../assets/icon/more2.svg" />'
    //   );
    //   html = html.replace(e, tag);
    // });

    /**
     * 信息 (info http://www.androiddevtools.cn/)
     */
    const REG_Info = /\(info\d?\s{1,2}[^)]+\)/g;
    const Match_Info_Arr = html.match(REG_Info) || [];
    Match_Info_Arr.forEach((e) => {
      const level = e.match(/\(info\d?/)[0].charAt(5);
      const content = e.replace(/\(info\d?\s{1,2}/, "").replace(")", "");
      const className = "ui-info-" + (level || 6);
      html = html.replace(
        e,
        `<span class="${className}" info="${content}"><img src="../../../assets/icon/info.svg?v=1" /></span>`
      );
    });

    /**
     * 补充 [!“adb”不是内部或外部命令](platform-tools/复制adb.exe，AdbWinApi.dll，AdbWinUsbApi.dll 到 C:\用户\new 目录下.)
     */
    const REG_Supplement = /\[[!?][^\]]+\]\([^\)]+\)/g;
    const Match_Supplement_Arr = html.match(REG_Supplement) || [];
    Match_Supplement_Arr.forEach((e) => {
      const type = e.charAt(1);
      const title = e
        .match(/\[[!?][^\]]+\]/)[0]
        .substr(2)
        .replace("]", "");
      const content = e
        .match(/\([^\)]+\)/)[0]
        .replace("(", "")
        .replace(")", "");
      html = html.replace(
        e,
        `<div class="ui-supplement"><h6>${title}</h6><p>${content}</p></div>`
      );
    });

    html = html.replace(/h-t-t-p/g, "http");
    html = html.replace(/h-ttp/g, "http");
    html = html.replace(/w-w-w/g, "www");
    html = html.replace(/w-ww/g, "www");
    html = html.replace(/-\/-\//g, "//");

    let title;
    if ((title = /<title>(.+?)<\/title>/.exec(html)) !== null) {
      setTimeout(function () {
        document.title = title[1];
        }, 0);
    }

    // 场景元素展示模块：[SCENE]
    matchScene = /\[SCENE\]/.exec(html)
    if(matchScene){
      const content = manager.createScene()
      html = html.replace(matchScene[0], content)
    }
    
  
    // 聚合：[SCENE_LIST]
    matchSceneList = /\[SCENE_LIST\]/.exec(html)
    if(matchSceneList){
      const content = manager.aggregate('SCENE')
      html = html.replace(matchSceneList[0], content)
    }

    next(html);
  });
  hook.doneEach(function() {
    
    const outHTMLContainer = document.createElement('div')
    outHTMLContainer.className = 'markdown-outer'    
    outHTMLContainer.innerHTML = GLOBAL_HTML
    console.log('content:',GLOBAL_HTML);
    document.body.appendChild(outHTMLContainer)

    mvvm.$init()
  });
  hook.ready(function(){
    const tipsMapId = {}      // 缓存tips内容元素
    let hasTipsActive = false // 是否有激活的Tips 用于排除多余的Document点处理

    const unboundForEach = Array.prototype.forEach
    const forEach = Function.prototype.call.bind(unboundForEach)
    forEach(document.querySelectorAll('.ewan-tips'), function (el) {
      el.addEventListener('click', function (e) {
        const id = e.currentTarget.getAttribute('data-id')
        console.log(id);
        if (tipsMapId[id]) {
          tipsMapId[id].target.style.display = 'block' 
        } else {
          const x = e.pageX//clientX
          const y = e.pageY//clientY
          const tar = document.querySelector('#'+id)
          tar.style.display = 'block'
          tar.style.left = x + 'px'
          tar.style.top = y + 'px'
          tipsMapId[id] = {
            target: tar,
            x,
            y
          }
        } 
        hasTipsActive = true           
      });
    })
    forEach(document.querySelectorAll('.ewan-search'), function (el) {
      el.addEventListener('click', function (e) {console.log(e);
        
      });
    })
    document.addEventListener('click', function(e){
      if (!hasTipsActive) return
      const className = e.target.className + e.target.parentNode.className
      if (!className.includes('tips')){
        for (i in tipsMapId) {
          tipsMapId[i].target.style.display = 'none'
        }
        hasTipsActive = false
      }
    })
  })
}
  
if (window) {
  window.$docsify = window.$docsify || {};
  // Init plugin
  window.$docsify.plugins = [].concat(
    codeDistributeEntry,
    window.$docsify.plugins || []
  );
}
