function handleOrnament(codeStr) {
    const tagStartMatch = codeStr.match(/\(l\d+\)?/g)
    tagStartMatch.map((e, i) => {
        const level = e.replace('(l', '').replace(')', '')
        codeStr = codeStr.replace(e, `<span class="level-${level}">`);
    })
    const tagEndMatch = codeStr.match(/\(\/l\d+\)?/g)
    tagEndMatch.map((e, i) => {
        codeStr = codeStr.replace(e, `</span>`);
    })
    return codeStr
}
function handleTable(data) {
    const rows = data.split('\n') || []
    rows.forEach((e, i) => {
        const cols = e.split(/\s{2,}/) || []
        for (let j = 0; j < cols.length; j++) {
            data = data.replace(cols[j], `<span class="r${i} c${j}">${cols[j]}</span>`)
        }
    })
    return data
}
function handleLink(data){
    const reg = /\[.+?\]\(.+?\)/g
    const linkMatchArr = data.match(reg) || []
    linkMatchArr.forEach(e => {
        const content = e.match(/\[.+?\]/)[0].replace('[', '').replace(']', '')
        const link = e.match(/\(.+?\)/)[0].replace('(', '').replace(')', '')
        data = data.replace(e, `<a href="#${link}">${content}</a>`)
    })
    return data
}

var HANDLER_MAP = {
    ornament: handleOrnament,
    table: handleTable,
    link: handleLink
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
            const Match_CODE_TEXT = Match_CODE.replace(/<code class="lang-[\w]+">?/, '').replace(/<\/code>/, '')
            let NEW_CODE_TEXT = Match_CODE_TEXT
            langArr.forEach(lang => {
                if (HANDLER_MAP[lang]) {
                    NEW_CODE_TEXT = HANDLER_MAP[lang](NEW_CODE_TEXT)
                }
            })
            html = html.replace(Match_CODE_TEXT, NEW_CODE_TEXT);
        })
        
        // 自定义标题
        const titleMatch = html.match(/#{1,3}.+\n/) || []
        titleMatch.map((e, i) => {
            //console.log(e);

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
