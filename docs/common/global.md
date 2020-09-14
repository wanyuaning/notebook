### 文档
>$ sudo npm i docsify-cli -g<br>
>$ docsify init ./docs<br>
>$ docsify serve docs


### express(Web Back-End/node/express)
>$ sudo npm install express-generator -g<br>
>$ express --version<br>
>$ express projectname<br>
>$ cd projectname & npm install & npm start & http://localhost:3000/<br>
 开发工具 <br>
>$ sudo npm i -g nodemon cross-env  - package.json/scripts/"dev":"cross-env NODE_ENV=dev nodemon node ./bin/www"  - npm run dev


### cross-env

### nodemon
通过监视启动文件来监视node.js应用程序中的任何更改并自动重启服务
```全局
$ sudo npm install -g nodemon
$ cd 项目
$ nodemon bin/www.js
```
```本地
$ npm install --save-dev nodemon
{
"scripts": {
    "dev": "nodemon bin/www.js"
}
}
$ npm run dev
```

### nvm 
nodejs的版本管理工具

### nrm
+ sudo npm i nrm -g
+ nrm ls // 代理源列表
+ nrm use taobao 使用taobao源

### http-server
- sudo npm i http-server -g
- 项目目录 $ hs   
- 访问http://127.0.0.1:8080

### curl
客户端Web服务请求工具, mac机自带，curl --version
 * -d 参数用于发送POST请求时带参数据体 *
+ $ curl -d 'login=ewan＆password=123' -X POST https://google.com/login
+ $ curl -d 'login=ewan' -d 'password=123' -X POST https://google.com/login
+ $ curl -d '{"login":"ewan"}' -X POST https://google.com/login
 * -u 参数用来设置服务器认证的用户名和密码 *
+ $ curl -u 'ewan:123456' https://google.com/login   自动化构建时，配置为王
+ $ curl -u 'ewan' https://google.com/login  命令行交互时，后续有一步输入密码的交互
 * -X 参数指定 HTTP 请求的方法 *
+ $ curl -X POST https://google.com/login

### parcel-bundler
极速零配置Web应用打包工具
+ $ sudo npm i -g parcel-bundler
+ 项目目录 $parcel index.html


### VScode
+ auto close tag
+ auto rename tag
+ path-alias
+ 首选项／用户片断
+ koroFileHeader
+ code snippets
+ node readme
+ npm dependency links








































