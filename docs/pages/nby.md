
# 全端构建
```

```

# PC端
```

```

# 移动端
```


Store{
  loginState
}
LotteryGame 【/page/Center/LotteryGame】

/LotIndex /page/Betting/LotIndex


  /HK6 /page/Betting/HK6
    检测登录信息 Store{loginState} Local{UserSession}
    query{token,code,id,name}
    异步 init
    initOddsLottery
      $router.push(TemaA) 

    init ?
      Active
      navActive
    mui.init
    mui.ready
      navActive
        运行父页面LotIndex hk6Active 方法
        $router.push
  



```
# SVN文件
```
[CLASS none cc]
___base
  admin adminCDN adminCDN-fen AppPack hk6 hk6-m kaijiangwang kaijiangwang-m m3.0 new-kaijiang [c3|pc_m_2.17][DETAIL ch/nby01] Tools 
  v 
    downloadWeb OfficailSite OfficailSite申博 WebOfficial-VM [c3 b|会员中心站改造][INFO cg/nby02] 会员中心站改造(首屏优化版) [c3 b|精简版会员中心][HELP/nby03] 客服 牛博官网 牛博官网新版 昇博官网
  开彩网-m [c3 b|新开发m站]
Morocco
QQ推广
README
v2.13稳定版
Vue-Admin
彩票&&棋牌版本
试玩版本
NodeJsForWebUIBuild.exe
工作内容.xlsx

[nby01][迭代开发]
[nby02][站点累积一，a-b]
[nby03][站点累积二，b-?]
```


# 后台管理
```sitemap
【●会员信息-查询账号 会员姓名 会员组别 真人账号 注册时间 注册IP 注册地址 推荐人 上级代理ID 是否代理创建 是否监控 是否代理 提示备注 备注原因】

会员管理
    会员信息管理 
        全部会员  
            ►上一层◄ ►刷新◄
            ┣邀请码┃注册时间┃█查询账号●█┃会员姓名┃会员组别┃VIP等级┃会员级别┃平台余额┃财务输赢┃总存款┃总取款┃总打码量┃打码量倍数┃当前打码量┃上级账号┃上级姓名┃代理┃异常┃上线提醒┃注册IP┫
                【操作-会员详情 账变记录 安全预警 赔率预览 抽点详情 邀请码详情 取消代理 █调整组别█ 资金回收】
        在线会员 
            邀请码  注册时间  查询账号  会员姓名  会员组别  钱包余额  返水账户  财务输赢  上级账号  上级姓名  存款  异常  上线提醒  登录地址  登录IP  登录网址  登录时间  设备
                【操作】踢线
        异常会员  
            注册时间  查询账号  会员姓名  会员组别  钱包余额  返水账户  财务输赢  上级代理  是否在线  操作人  备注  
        删除会员
            注册时间  查询账号  会员姓名  会员组别  钱包余额  返水账户  财务输赢  上级代理  删除时间  删除备注  
        会员变更上级
            邀请码  注册时间  查询账号  会员姓名  会员组别  钱包余额  财务输赢  上级代理  充值  监控  代理  注册IP  登录信息  
        █会员锁定名单█  
            邀请码  注册时间  查询账号  会员姓名  会员组别  会员级别  钱包余额  返水账户  财务输赢  上级账号  上级姓名  注册IP  最后登录时间  未登录天数  最后存款时间  最后取款时间
                【操作  锁定  解锁】
        禁用会员游戏 
            类型  查询账号 会员姓名  会员分组  游戏名称  创建时间  创建人  修改时间  修改人  
                【修改】查询账号  复选｜游戏列表  【删除】
        上线提醒  
        彩金会员  
        测试会员 
    关健信息管理
        修改会员姓名  
        修改收款介质  
        修改密码   
        登录账号列表  
        关健信息修改日志          
    会员资料管理 （清空日期）
        会员联系方式  
            查询账号  █手机号码█  QQ号码  微信账号  邮箱地址
        资料修改日志
财务管理 
    █加减款操作█     
        会员加款  会员减款  内部加减款  批量加款  调整所需打码量  优惠比例配置  
代理管理
    █创建代理会员█
权限管理
    登录账户管理
        █新建用户█
        用户列表 【操作  █修改用户█  删除用户  查看用户  █出款配置█  入款配置  密码重置  禁用  启用】
```