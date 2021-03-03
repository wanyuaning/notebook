create-react-app + unt-design-mobile

##### 环境&应用
会自动安装运行环境，包括react react-dom等
```
npm install -g create-react-app // create-react-app --version 

npx create-react-app react-app
cd react-app
react-app > npm start // http://localhost:3000/
```

##### 项目管理
1. 登录平台创建仓库
2. git init
3. git remote add origin https://github.com/wanyuaning/react-app.git
4. git push -u origin master // 关联后无需add/commit 远程浏览时无项目文件 切换到正确的分支

##### VScode开发
Path Autocomplete 路径提示功能
One Dark Pro      Atom风格美化
Auto Close Tag
Simple React Snippets
React Component

##### 资源
图片：import logo from './logo.svg'; <img src={logo} />
元素：
  JSX语法：const ele = <h1>欢迎进入React的世界</h1>   脚本语法：const ele = React.createElement('h1', {className: 'blue', children: 'Hello, world'})
  插入元素：{ele}   渲染元素：ReactDOM.render( <Demo list={['张三', '李四', '王五']} />, document.getElementById('root') );
组件：
  function Demo(props) { return ( <div className="red"> { props.list.map(item => { return <span>{item}</span> }) } </div> ) }
  ReactDOM.render( <Demo list={['张三', '李四', '王五']} />, document.getElementById('root') );
实例和节点

##### 流程遍历
{ arr.map((item, index) => {
  return <span key={index}>{item}</span>
})}

##### 组件
  /////////////////////////////components/game.jsx
  import React from 'react'
  class Game extends React.Component { render() { return ( <div className="shopping-list"> <h1>Shopping List for {this.props.name}</h1> </div> ) } }
  export default Game;
  /////////////////////////////App.jsx
  import Game from './components/game'
  <Game name="ewan"></Game>
方法调用


##### React Devtools
https://www.gugeapps.net/webstore/category/extensions


































