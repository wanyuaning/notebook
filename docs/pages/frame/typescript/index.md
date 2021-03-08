
基础类型 变量声明 接口 类 函数 泛型 类型推新 高级类型

管理版本和发布：Semantic release
单元测试：Jest
规范化的提交注释：Commitizen
打包构建项目：RollupJS
代码风格：TSLint
美化代码格式：Prettier

##### 安装
npm i -g typescript // tsc -V

typescript-demo/examples/greeter.ts
  // 定义对象
  class User{
      fullName: string
      firstName: string
      lastName: string
      constructor(firstName: string, lastName: string){
          this.firstName = firstName
          this.lastName = lastName
          this.fullName = firstName + lastName
      }
  }
  // 定义接口
  interface Person { firstName: string, lastName: string }

  function fnDemo(person: Person){
      return 'Hello ' + person.firstName + person.lastName
  }
  //var user = {firstName: 'W', lastName: 'Y'}
  var user = new User('W', 'Y')
  console.log(fnDemo(user))

  typescript-demo> tsc examples/greeter.ts
  typescript-demo> node examples/greeter.js
























单元测试










