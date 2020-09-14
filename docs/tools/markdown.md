# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题

**这是加粗的文字**<br>
*这是倾斜的文字*<br>
***这是斜体加粗的文字***<br>
~~这是加删除线的文字~~<br>

>这是引用的内容
>>这是引用的内容
>>>>>>>>>>这是引用的内容


---
----
***
*****


![图片alt](图片地址 ''图片title'')

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加

![blockchain](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541881081142&di=ef733b012d9bb4bb6bbff2201f332175&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Flib%2FuploadImg%2F20131020%2F20131020165030_497.jpg "图片名称")


[超链接名](超链接地址 "超链接title")<br>
[简书](http://jianshu.com)
[百度](http://baidu.com)<br>
<a href="http://baidu.com" target="_blank">新窗口百度</a>


- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格

1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格

- 列表内容
  - 列表内容
  - 列表内容
  - 列表内容
+ 列表内容
  - 列表内容
  - 列表内容
  - 列表内容


表头表头|表头|表头表头
:-----:|--|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。<br>
- 有一个就行，为了对齐，多加了几个<br>
文字默认居左<br>
-两边加：表示文字居中<br>
-右边加：表示文字居右<br>
注：原生的语法两边都要用 | 包起来。此处省略


代码块
`let i = 0`

```
function fun(){
    echo "这是一句非常牛逼的代码";
}
fun()

const name = 'ewan'
const age = 20
console.log(name)
console.log(age)
```

流程图
```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&
```



# Docsify 示例

<p align="center">
  <a href="https://docsify.js.org">
    <img alt="docsify" src="./docs/_media/icon.svg">
  </a>
</p>

<p align="center">
  A magical documentation site generator.
</p>

<p align="center">
  <a href="#backers"><img alt="Backers on Open Collective" src="https://opencollective.com/docsify/backers/badge.svg?style=flat-square"></a>
  <a href="#sponsors"><img alt="Sponsors on Open Collective" src="https://opencollective.com/docsify/sponsors/badge.svg?style=flat-square"></a>
  <a href="https://travis-ci.org/docsifyjs/docsify"><img alt="Travis Status" src="https://img.shields.io/travis/docsifyjs/docsify/master.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/docsify"><img alt="npm" src="https://img.shields.io/npm/v/docsify.svg?style=flat-square"></a>
  <a href="https://github.com/QingWei-Li/donate"><img alt="donate" src="https://img.shields.io/badge/%24-donate-ff69b4.svg?style=flat-square"></a>
  <a href="https://gitter.im/docsifyjs/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link"><img alt="gitter" src="https://img.shields.io/gitter/room/docsifyjs/docsify.svg?style=flat-square"></a>
</p>

<p align="center">Gold Sponsor via <a href="https://opencollective.com/docsify">Open Collective</a></p>

<p align="center">
  <a href="https://opencollective.com/docsify/order/3254">
    <img src="https://opencollective.com/docsify/tiers/gold-sponsor.svg?avatarHeight=36">
  </a>
</p>

## Links

- [Documentation](https://docsify.js.org)
- [CLI](https://github.com/docsifyjs/docsify-cli)
- CDN: [UNPKG](https://unpkg.com/docsify/) | [jsDelivr](https://cdn.jsdelivr.net/npm/docsify/) | [cdnjs](https://cdnjs.com/libraries/docsify)
- [Awesome docsify](https://github.com/docsifyjs/awesome-docsify)
- [Community chat](https://gitter.im/docsifyjs/Lobby)

## Features

- No statically built html files
- Simple and lightweight (~21kB gzipped)
- Smart full-text search plugin
- Multiple themes
- Useful plugin API
- Compatible with IE10+
- Support SSR ([example](https://github.com/docsifyjs/docsify-ssr-demo))
- Support embedded files

## Quick start

Look at [this tutorial](https://docsify.js.org/#/quickstart)

[![Edit 307qqv236](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/307qqv236)

## Showcase

These projects are using docsify to generate their sites. Pull requests welcome :blush:

Move to [awesome-docsify](https://github.com/docsifyjs/awesome-docsify)

## Similar projects

| Project                                          | Description                              |
| ------------------------------------------------ | ---------------------------------------- |
| [docute](https://github.com/egoist/docute)       | 📜 Effortlessly documentation done right |
| [docpress](https://github.com/docpress/docpress) | Documentation website generator          |

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Development

```bash
npm run bootstrap && npm run dev
```

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/docsify#backers)]

<a href="https://opencollective.com/docsify#backers" target="_blank"><img src="https://opencollective.com/docsify/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/docsify#silver-sponsors)]

<a href="https://opencollective.com/docsify/silver-sponsors/0/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/0/avatar.svg"></a>
<a href="https://opencollective.com/docsify/silver-sponsors/1/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/1/avatar.svg"></a>
<a href="https://opencollective.com/docsify/silver-sponsors/2/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/2/avatar.svg"></a>
<a href="https://opencollective.com/docsify/silver-sponsors/3/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/3/avatar.svg"></a>
<a href="https://opencollective.com/docsify/silver-sponsors/4/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/4/avatar.svg"></a>
<a href="https://opencollective.com/docsify/silver-sponsors/5/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/5/avatar.svg"></a>
<a href="https://opencollective.com/docsify/silver-sponsors/6/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/6/avatar.svg"></a>
<a href="https://opencollective.com/docsify/silver-sponsors/7/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/7/avatar.svg"></a>
<a href="https://opencollective.com/docsify/silver-sponsors/8/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/8/avatar.svg"></a>
<a href="https://opencollective.com/docsify/silver-sponsors/9/website" target="_blank"><img src="https://opencollective.com/docsify/silver-sponsors/9/avatar.svg"></a>

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/docsifyjs/docsify/graphs/contributors"><img src="https://opencollective.com/docsify/contributors.svg?width=890" /></a>

## License

[MIT](LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fdocsifyjs%2Fdocsify.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fdocsifyjs%2Fdocsify?ref=badge_large)
