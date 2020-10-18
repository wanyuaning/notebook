function handleOrnament(codeStr) { 
    const tagStartMatch = codeStr.match(/\(l\d+\)?/g)
    tagStartMatch.map((e, i) => {
        const level = e.replace('(l', '').replace(')', '')
        console.log(level);
        codeStr = codeStr.replace(e, `<span class="level-${level}">`);
    })
    const tagEndMatch = codeStr.match(/\(\/l\d+\)?/g)
    tagEndMatch.map((e, i) => {
        codeStr = codeStr.replace(e, `</span>`);
    })
    return codeStr
}
function handleTable(data){
  const rows = data.split('\n') || []
  rows.forEach((e, i) => { 
    const cols = e.split(/\s{2,}/) || []
    for (let j = 0; j < cols.length; j++) {
      data = data.replace(cols[j], `<span class="r${i} c${j}">${cols[j]}</span>`)
    }
  })
  return data
}

var HANDLER_MAP = {
    'ornament': handleOrnament,
    'table': handleTable
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
        // <code class="lang-">   </code>
        const codeBlockMatch = html.match(/<code class="lang-[\w]+">[\s\S]*?<\/code>?/gm) || []
        codeBlockMatch.map((e, i) => {
            const type = e.match(/^<code class="lang-[\w]+">?/)[0].replace('<code class="lang-', '').replace('">', '')
            var dataStr = e.replace(/<code class="lang-[\w]+">?/, '').replace(/<\/code>/, '')
            if (HANDLER_MAP[type]) {
                var matchStr = HANDLER_MAP[type](dataStr)
                html = html.replace(dataStr, matchStr);
            }            
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
