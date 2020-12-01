

```
[CLASS none]
[MULU]


[h3 cg|Enter提交表单]
<input type="text" onchange="console.log(this.value);" />
<input type="text" onkeydown="handleKeydown(event)" />
function handleKeydown(e){ console.log(e.keyCode) }

# 重复字符串
'&nbsp;'.repeat(space[0].length)


[h3 ch|用户账户体系]

特性：纯js 无依赖
要求：通用性 兼容性 可靠性 封装性
架构：
    搭建es6+工程环境：webpack babel  
    模块：common 登录 注册 账号设置 密码找回




[h3 ci|场景]
MPA
SPA
Portal
### 身份验证
chrome 身份验证器 插件
身份验证器用以在浏览器中生成二步认证代码

[h3 cj|微前端架构]
微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用(Frontend Monolith)后，随之而来的应用不可维护的问题
##### 使用场景
- 项目很多，规模很大，都是每个项目独立使用git此类仓库维护的、技术栈为vue/react/angular的这类应用
- 需要整合到统一平台上，你正在寻找可能比iframe更合适的替代方案
- 项目A有功能A1、A2、A3,项目B有功能B1、B2、B3，产品经理要你把A2、B1、B3组合成一个包含这些功能的新项目
[single-spa](https://zh-hans.single-spa.js.org/docs/getting-started-overview)
[qiankun乾坤](https://github.com/umijs/qiankun)
[文档](https://qiankun.umijs.org/zh)


$ vue create qiankun-demo   # 新建项目
$ cd qiankun-demo
$ npm run serve    # 项目启动
$ npm run build    # 打包

$ yarn add qiankun # 或者 npm i qiankun -S





#################### 运行时
文件结构

配置列表
CONF_BW = {
  THEME:     '主题站点',
  SKIN:      '主题皮肤',
  TITLE:     '站点标题',
  COPYRIGHT: '备案信息',
}
RES_PUBLIC: 'static/'
RES_PRIVATE: CONF_BW.THEME + '/'


场景：
新增一个主题站点
新增一个主题皮肤
主题皮肤变更指引：资源变迁 

#### 构建时
CONF_THEME = {
  THEME: {
    SKIN:      '主题皮肤',
    // 私有资源注册Private Resource Registration
    PRR:{
      addr: THEME // 可自定义
      res: []
    }
  }
}
打包指定站点
打包配置列表
生成场景引导 新成员
开发规范说明 新成员
公共私有目录查询

初始：
生成 THEME:配置 映射表  依据THEME快速查询

解决方案：












# 人机验证
暴力破解密码  频繁操作导致服务器压力崩溃的恶意攻击
数字、字母、中文的组合 缺点：用户需要在鼠标-键盘、中英文之间切换，不具备任何趣味性
```

```plantuml
@startuml
start
:"获取网页";
:"用户请求验证码";
:"服务返回图形 设置cookie";
:"用户提交 打码&cookie";
:"服务对比 打码&cookie";

if ("对比结果") then (相同)
    :"验证成功";
    stop
else (异同)
    :"验证失败";
    stop
endif
@enduml
```