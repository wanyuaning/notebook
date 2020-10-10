
> **Windows全局目录：C:\Users\new\AppData\Roaming\npm**

### nginx
windows: 
安装：http://nginx.org/en/download.html  
配置：c:\nginx\conf\nginx.conf
启动：c:\server\nginx-1.0.2 > start nginx 或 c:\server\nginx-1.0.2 > nginx.exe    
重启：c:\server\nginx-1.0.2 > nginx.exe -s reload  
停止：c:\server\nginx-1.0.2 > nginx.exe -s stop 或 c:\server\nginx-1.0.2 > nginx.exe -s quit
mac: 
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"  // 安装brew
如果卡住：Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
则：
cd /usr/local/Homebrew/Library/Taps/
mkdir homebrew
cd homebrew
git clone https://mirrors.ustc.edu.cn/homebrew-core.git
安装：brew install nginx   
配置：/usr/local/etc/nginx/nginx.conf
启动：nginx    重启：nginx -s reload  停止：nginx -s stop
```
http {
    server {
        listen 8080;
        server_name localhost;
        # 把默认location注释掉
        # 反向代理
        location / {
            proxy_pass http://localhost:8001;
        }
        location /api/ {
            proxy_pass http://localhost:8000;
            proxy_set_header Host $host;
        }
    }
}
```
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
### npm
npm config set registry https://registry.npm.taobao.org  添加镜像  npm config delete registry
npm view vue            更丰富 npm info vue        https://www.npmjs.com/
npm view vue version    服务器上包的最新的版本信息   https://www.npmjs.com/
npm view vue versions   服务器上包的所有的版本信息   https://www.npmjs.com/
npm ls vue              本地安装包版本信息          project/
npm ls vue -g           本地全局安装的pkg版本       全局

### nvm 
nodejs的版本管理工具
windows: https://github.com/coreybutler/nvm-windows/releases (nvm-setup.zip)下载安装
nvm install v8.16.0  
nvm use v8.16.0  
nvm list    

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








































