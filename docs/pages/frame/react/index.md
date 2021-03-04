create-react-app / unt-design-mobile
react / react-dom / react-router / redux / axios 



框架是  Create React App
UI库是Ant Design Mobile of React
yarn install
yarn start
yarn build
ui库文档 https://mobile.ant.design/docs/react/introduce-cn

##### 环境&应用
会自动安装运行环境，集成了react/react-dom/react-router等
```
npm install -g create-react-app  // create-react-app --version 

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
  静态
  function Demo(props) { return ( <div className="red"> { props.list.map(item => { return <span>{item}</span> }) } </div> ) }
  ReactDOM.render( <Demo list={['张三', '李四', '王五']} />, document.getElementById('root') );
实例和节点

##### 流程遍历
{ arr.map((item, index) => {
  return <span key={index}>{item}</span>
})}

##### 组件
  /////////////////////////////components/game.jsx 以类的形式可实现动态效果
  import React from 'react'
  class Game extends React.Component { render() { return ( <div className="shopping-list"> <h1>Shopping List for {this.props.name}</h1> </div> ) } }
  export default Game;
  /////////////////////////////App.jsx
  import Game from './components/game'
  <Game name="ewan"></Game>
方法调用


##### React Devtools
https://www.gugeapps.net/webstore/category/extensions







<Message style={{color:'red', groundbackColor: 'green'}}/>


性能检测工具 Web Vitals
src/index.js 最后一行末
reportWebVitals(console.log);

受控/非受控组件



事件
class Button extends Component{
    constructor(){
        super()
        this.state = {buttonText: 'on'}
    }
    handleClick = () => { this.setState({buttonText: 'off'}) } // 这个方法是按钮对象引用 要保持this不变
    render(){ return <button onClick={this.handleClick}>{this.state.buttonText}</button> }
}


默认属性&属性限制
import React, {Component} from 'react'
import PropTypes from 'prop-types' // 脚手架已经代为安装了
class Person extends Component{
    static defaultProps = { name: '无名' }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    render(){
        return <div>{this.props.name} {this.props.age}</div>
    }
}
<Person name="ewan" age={20} />
<Person />


状态管理
class Timer extends Component{
    constructor(){
        super()
        this.state = { time: new Date().toLocaleString() }
    }
    render(){
        return <h1>{this.state.time}</h1>
    }
    componentDidMount(){
        window.setInterval(() => {
            this.setState({ time: new Date().toLocaleString() })
        })
    }
}


组件生命周期
class Demo extends React.Component {
  componentWillMount(){}
  componentDidMount(){}
}

##### 路由(5.x)
1. npm install react-router-dom --save
2. src/App.js
    import { BrowserRouter, Route, Link } from 'react-router-dom';
    import Home from './pages/home';
    import Detail from './pages/detail';
    import Login from './pages/login';
    <BrowserRouter>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/detail/:id' exact component={Detail}></Route>
      <Route path='/' exact component={Home}></Route>                  
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/detail/5">Detail</Link>
    </BrowserRouter>
    脚本跳转：this.props.history.push({pathname:"/path/" + name});
    取参接收：this.props.match.params.name

    <Route path='/web/departManange ' component={DepartManange}/>
    <Link to="web/departManange?tenantId=12121212">xxx</Link>
    脚本跳转：this.props.history.push({pathname:"/web/departManange?tenantId" + row.tenantId});
    取参接收：this.props.location.search

    <Route path='/query' component={Query}/>
    <Link to={{ path : '/query' , query : { name : 'sunny' }}}>
    脚本跳转：this.props.history.push({pathname:"/query",query: { name : 'sunny' }});
    取参接收：this.props.location.query.name

    <Route path='/sort ' component={Sort}/>
    <Link to={{ path : ' /sort ' , state : { name : 'sunny' }}}> 
    脚本跳转：this.props.history.push({pathname:"/sort ",state : { name : 'sunny' }});
    取参接收：this.props.location.query.state 

##### 状态管理机
  单一数据源
  State 是只读的
  使用纯函数来执行修改

  reducers  描述action如何改变state tree

1. npm install redux react-redux --save
2. src/index.js




##### 坑
使用scss，遇上node-sass安装不上
  1. 下载 https://npm.taobao.org/mirrors/node-sass/v4.14.1/win32-x64-64_binding.node 下载完成放在如D:\；
  2. 运行命令： npm install node-sass -D --sass_binary_path=D:/win32-x64-64_binding.node

node_modules\node-sass\vendor 的报错解决方法
  Error: ENOENT: no such file or directory, scandir 'D:\Work\ybxzs\node_modules\node-sass\vendor'
  按提示创建vendor文件夹 ...\node_modules\node-sass\vendor
  yarn start
  这时报错：
  Error: Missing binding D:\Work\ybxzs\node_modules\node-sass\vendor\win32-x64-72\binding.node
  Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 12.x

  去 https://github.com/sass/node-sass/releases 跟据.node或.pdb下载对应版本的node-sass的binding,比如我这里就要下载: win32-x64-72_binding.node
  将该文件改名并放到相应目录： ...\node_modules\node-sass\vendor\win32-x64-47\binding.node










