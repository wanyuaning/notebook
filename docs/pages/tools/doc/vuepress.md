【demo】npm init -y<br>
【demo】npm install -D vuepress

#### 部署
1. demo/docs/README.md
    ```
    # Hello VuePress
    ```
2. demo/package.json
    ```
    "scripts": {
      "docs:dev": "vuepress dev docs",
      "docs:build": "vuepress build docs"
    }
    ```
3. npm run docs:dev

#### 配置
```
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     ├─ config.js
│     └─ enhanceApp.js 应用
└─ package.json
```

``` 
配置 **demo/docs/.vuepress/config.js**
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/bar/', // 当站点被部署到一个非根路径
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  // 被注入页面 HTML <head> 额外的标签
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  port: '8080',           // 指定用于dev服务器的端口
  dest: '.vuepress/dist', // 指定vuepress build的输出目录
}

应用 **demo/docs/.vuepress/enhanceApp.js**
export default ({
  Vue,      // VuePress 正在使用的 Vue 构造函数
  options,  // 附加到根实例的一些选项
  router,   // 当前应用的路由实例
  siteData, // 站点元数据
  isServer  // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // 做一些其他的应用级别的优化
}

导航 **demo/docs/.vuepress/themeConfig.nav**

```

#### 开发



