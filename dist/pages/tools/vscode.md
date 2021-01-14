```
[h4|禁止运行脚本]
以管理员身份打开VScode，
执行 Set-ExecutionPolicy RemoteSigned

```

### settings

```O
{
  "editor.detectIndentation": false,     // 默认启用了根据文件类型自动设置tabSize
  "editor.tabSize": 4,                   // 设置缩进不生效时关闭editor.detectIndentation 插件设置优先
  "editor.fontFamily": "monospace",      // windows下IDE正常："consolas"
  "editor.formatOnSave": false,          // 保存时格式化文档

  "editor.minimap.enabled":   false,     // 迷你地图
  "editor.mouseWheelZoom":     true,     // 滚轮缩放字号大小
  "editor.rulers":       [100, 150],     // 在一定数量的等宽字符后显示垂直标尺

  // 格式 依赖Prettier 可搜esbenp关键词
  "vetur.format.defaultFormatter.html": "prettier",
  "[javascript]": {"editor.defaultFormatter": "esbenp.prettier-vscode"},
  "[vue]":        {"editor.defaultFormatter": "esbenp.prettier-vscode"},
  "[html]":       {"editor.defaultFormatter": "esbenp.prettier-vscode"},

  // 插件 koroFileHeader
  "fileheader.customMade": {             // 头部注释
    "autoAdd":              false,       // 关闭自动添加头部注释
    "Description": "file content",
    "Version":              "2.0",
    "Author":              "Ewan",
    "Date":         "Do not edit",
    "LastEditors":         "Ewan",
    "LastEditTime": "Do not edit"
  },
  "fileheader.cursorMode": {             // 函数注释
    "description":             "",
    "param":                   "",
    "return":                  "",
    "author":              "Ewan"
  }

  // 调试 通常以launch.json形式
  "launch": {
    "configurations":          [],
    "compounds":               []
  }
}
```

### 功能

对比<br>
![对比](../../assets/images/compare.jpg "ctrl+点选 右键[将已选项进行比较]")<br>
注释：<br>
   选中文本： shift+alt+a<br>

### 插件

```O table link
[h2 reverse|JSON Tools]
Ctrl(Cmd)+Alt+M    格式化代码
Alt+M              紧凑化代码

[h2 reverse|koroFileHeader]
ctrl + Alt + i     文件头部注释 [fileheader.customMade](pages/tools/vscode.md?id=settings)
ctrl + Alt + t     在鼠标位置插入相应的注释 [fileheader.cursorMode](pages/tools/vscode.md?id=settings)
```

### 用户片段

```O popover
---------------------
文件 > 首选项 > 用户片段
{
  "[0 Print to console]": {
    "(prefix)(触发快捷提示的字符串前缀)": "[cg b|log]",
    "(body)(代码片段主体)": [
      "console.log('$1');",
      "$2"
    ],
    "description": "打印到控制台"
  },
  "[0 Add format comment]": {
    "prefix": "[cg b|comment]",
    "body": [
      "/**",
      " * ",
      " * Ewan $(l3)CURRENT_YEAR(/l3)-$CURRENT_MONTH-$(l4)CURRENT_DATE(/l4) $CURRENT_HOUR:$(l5)CURRENT_MINUTE(/l5)",
      " */"
    ],
    "description": "添加注释"
  }
}
```

```table
[h2|变量] 调用: $变量名
---------------------------------------------------
TM_FILENAME               当前文件名
TM_FILENAME_BASE          当前文件名，不带扩展名
CURRENT_YEAR              当前年份
CURRENT_YEAR_SHORT        当前年份，最后两位数字
CURRENT_MONTH             当前月份数字形式，两位表示
CURRENT_MONTH_NAME        当前月份英文形式，如 July
CURRENT_MONTH_NAME_SHORT  当前月份英文缩写形式，如 Jul
CURRENT_DATE              当前日
CURRENT_DAY_NAME          当前星期，如 Monday
CURRENT_DAY_NAME_SHORT    当前星期缩写形式，如 Mon
CURRENT_HOUR              当前小时，24小时格式，两位表示
CURRENT_MINUTE            当前分钟，两位表示
CURRENT_SECOND            当前秒，两位表示
TM_DIRECTORY              当前文件所属目录的绝对路径
TM_FILEPATH               当前文件的绝对路径
```
