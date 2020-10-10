
const pkgVersion = '1.0.0'
const regex = {
    layoutWrapperMarkup: /[\r\n]*(\s*)(<!-+\s+layout:\s*?start[:]*(.*)\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+layout:\s*?end\s+-+>)/m,
    layoutTagMarkup: /<!-+\s+col:\s*([0-9]{1,2})\s+-+>[\r\n]+([\s\S]*?)[\r\n]*((?=<!-+\s+col:?)|(?=<!-+\s+layout?))/m,
};

/**
 * @param {string} content
 * @returns {string}
 */
function renderLayoutRow(content) {

    const codeBlockMatch = content.match(/```[\r\n]*[\s\S]*?```/gm)
    const codeBlockMap = codeBlockMatch.map((e, i) => {
        const codeMarker = `<!-- layout:replace CODEBLOCK${i} -->`;
        content = content.replace(e, codeMarker);
        return codeMarker;
    })
    //console.log(content)
    let wrapperMatch
    while ((wrapperMatch = regex.layoutWrapperMarkup.exec(content)) !== null) {
        console.log('-----')
        let blockStr = wrapperMatch[0]
        let tagMatch
        while ((tagMatch = regex.layoutTagMarkup.exec(blockStr)) !== null) {
            blockStr = blockStr.replace(tagMatch[0], `<div class="col col-${tagMatch[1]}">${tagMatch[2]}</div>\n`)
        }

        blockStr = blockStr.replace(wrapperMatch[2], `<div class="row ${wrapperMatch[3]}">`)
        blockStr = blockStr.replace(wrapperMatch[5], '</div>')

        content = content.replace(wrapperMatch[0], blockStr)
    }

    codeBlockMap.forEach((item, i) => {
        content = content.replace(item, codeBlockMatch[i]);
    });

    return content;
}

// Plugin
// =============================================================================
function docsifyPanels(hook, vm) {
    let hasPanels = false;
    hook.beforeEach(function (content) {
        hasPanels = regex.layoutWrapperMarkup.test(content);
        if (hasPanels) {
            content = renderLayoutRow(content);
        }

        return content;
    });
  hook.afterEach(function (html, next) {
    
      console.log(333)
      next(html);
    });
}


if (window) {
    window.$docsify = window.$docsify || {};

    // Add config object
    window.$docsify.panels = window.$docsify.panels || {};

    // Add plugin data
    window.$docsify.panels.version = pkgVersion;

    // Init plugin
    window.$docsify.plugins = [].concat(
        docsifyPanels,
        (window.$docsify.plugins || [])
    );
}
