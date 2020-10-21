
function handleDianzhui(data){
    const REG_DZ = /\[\d\s[^\]]+\]/g
    const Match_DZ_ARR = data.match(REG_DZ) || []
    Match_DZ_ARR.forEach(e => {
        const color = e.charAt(1)
        const content = e.slice(3, e.length-1)
        data = data.replace(e, `<span class="b cl${color}">${content}</span>`)
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
            
            
            
            
            
            
            // // 背景策略
            // fst === '|' && (classStr = ' class="bg"') 
            // // 灰度策略 0 1 2 4 6 8 a c e f 九等级
            // let gray_bg = e.charAt(count + 1).match(/\d/)         
            // gray_bg = gray_bg ? gray_bg[0] : '3' 
            // const content = e.replace(/#{1,6}\|? /, '')
        }
                
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
            let NEW_CODE_TEXT = Match_CODE_TEXT
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
        const REG_Detail = /<a href="[^"]+"\s?>detail<\/a>/
        const Match_Detail_Arr = html.match(REG_Detail) || []
        Match_Detail_Arr.forEach(e => {
            console.log(e)
            const tag = e.replace('>detail', ' class="ui-detail"><img src="../../../assets/icon/more.svg" />')
            console.log(tag)
            html = html.replace(e, tag)
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
