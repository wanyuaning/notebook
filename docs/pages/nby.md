```
[CLASS none]
[cf reverse|概念] 返水[HELPB/nby01(width:500px;left:-80px;top:10px)]

▉nby01▉为了鼓励玩家多玩而设置的一项优惠.根据玩家的有效投注额，按策略返回一些彩金
策略如：每周返点0.6%▉
```


# 全端构建
```

```

# PC端
```

```

# 移动端
```
[SEARCH]
应用


/ Index
    //洗码
    xima                    page/Xima                                    洗码
    zizhuxima               page/Xima/modules/zizhuxima                  自助洗码
    ximajilu                page/Xima/modules/ximajilu                   洗码记录
    ximabili                page/Xima/modules/ximabili                   洗码比例
    ximajiluDetail          page/Xima/modules/detail                     洗码记录详情
    /Lottery                /skin/sb/Lottery                             彩票游戏 props:type name
        /children           /skin/sb/Lottery/children  
    ''                      Home                                         首页
    vipzone                 page/Activity/VipZoneNew                     我的VIP 
    promoteDetail           page/Activity/PromoteDetail                  晋升说明 
    vipLink                 page/Activity/VipLink                        专属客服 
    gerenzhanji             page/Activity/gerenzhanji                    个人战绩 
    brandList               brandList                                    棋牌游戏 
    ReturnWaterRecord       page/Center/ReturnWaterRecord ${lib.isAgent === three ? 自动洗码 : 返水记录} 
    ReturnWaterDetail       page/Center/ReturnWaterDetail  ${lib.isAgent === three ? 自动洗码 : 返水明细} 
    TransactionRecord       page/Center/TransactionRecord                交易记录 
    AccountBalance          page/Center/AccountBalance                   账户余额 
    AccountInformation      page/Center/AccountInformation               账户信息 
    /newWithdrawMoney       DrawMoneyRoute                               取款 
    newpay                  RechargeRoute                                充值
        chongzhifangshi     page/Center/newPay/children/chongzhifangshi  充值方式
        /newWithdrawMoney   DrawMoneyRoute 取款
    online                  page/Center/newPay/children/online           充值 
    transfer                page/Center/newPay/children/transfer         充值 
    ReturnWaterRecord       page/Center/ReturnWaterRecord                返水记录 
    ReturnWaterDetail       page/Center/ReturnWaterDetail                返水明细 
    TransactionRecord       page/Center/TransactionRecord                交易记录 
    AccountBalance          page/Center/AccountBalance                   账户余额 
    AccountInformation      page/Center/AccountInformation               账户信息 
    QuotaConversion         page/Center/QuotaConversion                  额度转换 
    BindingBankCard         page/Center/BindingBankCard                  绑定银行卡 
    Center                  Center                                       个人中心 
    Login                   Login                                        登录 
    Download                /components/Download                         APP下载 
    DownloadApp             /components/DownloadApp                      App安装教程 
    Turntable               page/Activity/Turntable                     幸运转盘 
    Turntables              page/Activity/Turntableresult               抽奖记录 
    Handsel                 page/Center/Handsel                         聚宝彩金 
    AboutHandsel            page/Center/Handsel/About                   聚宝彩金 
    HandselDetail           page/Center/Handsel/Detail                  聚宝彩金 
    UserMsg                 page/Center/UserMsg                         个人资料 
    CellMe                  page/Center/CellMe                          联系我们 
    /Service                page/Center/template/Service                客服 
    EditAccount             page/Center/EditAccount                     修改账户 
    wechat                  page/Center/wechat                          微信联系 
    Complaint               page/Center/Complaint                       投诉建议 
    /AgencyDevelopCourseQB  page/Agency/AgencyDevelopCourseQB           QB面代理 
    /AgencyDevelopCourseB   page/Agency/AgencyDevelopCourseB            B面代理 
    /AgencyDevelopCourseA   page/Agency/AgencyDevelopCourseA            A面代理 
    Register                Register                                     注册 
    GetbackPwd              /components/GetbackPwd                       找回密码 
    BankCard                page/Center/BankCard                         添加银行卡 
    BettingRecord           page/Center/BettingRecord                    投注记录 
    BettingRecordDetail     page/Center/BettingRecordDetail              投注记录详情 
    AgentBetDetail          page/Center/BettingRecord                    下级注单 
    AgentRecordDetail       page/Center/BettingRecordDetail              投注记录详情 
    AgentCenter             page/ + agentType + /AgentCenter             代理中心 
    TeamAccount             page/ + agentType + /TeamAccount             团队账变 
    PersonAccount           page/ + agentType + /PersonAccount           财务变动 
    YueBao                  page/YueBao/YueBao                           余额宝 
    Calculator              page/YueBao/Calculator                       利息计算器 
    IncomeDetail            page/YueBao/IncomeDetail                     余额宝收支明细 
    IncomeList              page/YueBao/IncomeList                       收益时间 
    AboutYuebao             page/YueBao/AboutYuebao                      关于余额宝 
    ActivityDetail          page/Activity/ActivityDetail                 活动详情 
    RechageCode             page/ + agentType + /RechageCode             下级排行榜 
    SignList                page/Activity/SignList                       领取记录 
    SignMemberInfo          page/Activity/SignMemberInfo                 签到记录 
    SubDivided              page/ + agentType + /SubDivided              代理分润 
    Subreports              page/ + agentType + /Subreports              下级报表 
    SubFinance              page/ + agentType + /SubFinance              下级财务 
    Createsubordinate       page/ + agentType + /Createsubordinate       创建下级 
    Codemanagement          page/ + agentType + /Codemanagement          邀请码管理 
    /Flowdetails            page/Center/Flowdetails                     账务明细 
    Promotions              page/Center/Promotions                       优惠活动 
    PromotionsDtail         page/Center/PromotionsDtail                  优惠活动详情 
    Account                 page/Center/Account                          账户安全 
    ElectronicGame          page/Center/ElectronicGame                   电子游艺 
    fish                    page/Center/FishGame                         捕鱼游戏 
    FishGameDetail          FishGameDetail                               捕鱼游戏 
    hk6lobby                page/Center/hk6lobby                         六合彩大厅 
    SportsGame              page/Center/SportsGame                       体育赛事 
    VideoGame               page/Center/VideoGame                        真人视讯 
    LotteryGame             LotteryGame                                  彩票游戏 
    Brand                   page/Center/Brand                            棋牌游戏 
    esports                 page/Center/Esports                          电子竞技 
    Fishing                 page/Center/Fishing                          捕鱼王 
    ElectronicGameDtail     ElectronicGameDtail                          电子游艺 
    Information             page/Center/Information                      我的消息 
    Collect                 page/Center/Collect                          我的收藏 
    SearchRecord            page/ + agentType + /SearchRecord            账户记录 
    Aboutbk                 page/Center/Aboutbk                          关于我们 
    AboutUs                 page/Center/AboutUs                          关于我们 
    VipCenter               page/ + agentType + /VipCenter               下级列表 
    /CaptailDetail          page/Center/CaptailDetail                   账务明细  
    /Calculation            page/ + agentType + /Calculation            返点赔率  
    /SubDivided             page/ + agentType + /SubDivided             我的收益 
    /AgencyDevelopCourse    page/Agency/ + agencyType                   代理加盟 
    /GuildList              page/Agency/GuildList                       金字塔教程 
    /GuildSwiperList        page/Agency/GuildSwiperList                 金字塔教程
    /DiscountsActivity      page/Activity/DiscountsActivity             今日活动     
    /baijiale               page/Betting/baijiale                       游戏大厅   
    /Baccarat               page/Betting/Baccarat                       百家乐    
    /FishingGame            page/Center/FishingGame.vue                 捕鱼游戏   
    agencyPerformance       page/ + agentType + /agencyPerformance      代理业绩    
    agencyPerformanceDetail page/ + agentType + /agencyPerformanceDetail 代理业绩收益明细   
    task                    page/Center/TaskNew                         任务活动    
    taskNew                 page/Center/TaskNew                         任务活动   
    TaskDetail              page/Center/TaskDetail                      任务完成明细   
    TaskNewDetail           page/Center/TaskNewDetail                   任务奖励详情    
    SafeBox                 page/Center/template/SafeBox                保险箱    
    IntegralIndex           page/Activity/IntegralIndex                 钻石    
    yinShangPay             page/Center/Payment/yinShangPay             银商支付    
    IntegralRecord          page/Activity/Integral-record               活动记录   
    /GameStock              /skin/qq2/GameStock                          股市T+0    
    /GameStockHome          /skin/qq2/GameStockHome                      股市T+0

/Customerservice            /components/Customerservice 

/LotIndex                   page/Betting/LotIndex 
    /SSC                    page/Betting/SSC  
    /cp3                    page/Betting/Cp3  
    /cp11                   page/Betting/cp11  
    /gdklsf                 page/Betting/gdklsf  
    /qxc                    page/Betting/qxc  
    /pcdd28                 page/Betting/pcdd28   
    /pcdd                   page/Betting/pcdd28  
    /fc3d                   page/Betting/fc3d  
    /gxklsf                 page/Betting/gxklsf  
    /bjpk10                 page/Betting/Bjpk10  
    /HK6                    page/Betting/HK6  
        /TemaA              page/Betting/hk6/TemaA  
            /TeMaShengXiao  page/Betting/hk6/TeMaShengXiao  
            /HeXiao         page/Betting/hk6/HeXiao  
        /QuanBuZhong        page/Betting/hk6/QuanBuZhong  
        /ZhengMaTe          page/Betting/hk6/ZhengMaTe  
        /ZhengMa            page/Betting/hk6/ZhengMa  
        /ZongHe             page/Betting/hk6/ZongHe  
        /LianMa             page/Betting/hk6/LianMa  
        /YiXiaoWeiShu       page/Betting/hk6/YiXiaoWeiShu  
        /WeiShuLian         page/Betting/hk6/WeiShuLian  
        /ShengXiaoLian      page/Betting/hk6/ShengXiaoLian  
    /cqssc_rule             page/Betting/gameRule/cqssc_rule  
    /bjpk10_rule            page/Betting/gameRule/bjpk10_rule  
    /gdklsf_rule            page/Betting/gameRule/gdklsf_rule  
    /gxklsf_rule            page/Betting/gameRule/gxklsf_rule  
    /kuaisan_rule           page/Betting/gameRule/kuaisan_rule  
    /pcdd28_rule            page/Betting/gameRule/pcdd28_rule  
    /azpcdd_rule            page/Betting/gameRule/pcdd28_rule  
    /fc3d_rule              page/Betting/gameRule/fc3d_rule  
    /11x5_rule              page/Betting/gameRule/11x5_rule  
    /hk6_rule               page/Betting/gameRule/hk6_rule  
    /qxc_rule               page/Betting/gameRule/qxc_rule  
    /gameLong               page/Betting/gameDetails/gameLong  
    /OpenResult             page/Betting/gameDetails/OpenResult  
    /BetDetail              page/Betting/gameDetails/BetDetail  



router.beforeEach((to, from, next) => {
    // 游戏规则
    if (to.path.includes('rule')) {
        api.GetGameRole(to.query.id, data => {
            store.dispatch('GetGameRole', data)
        })
    }
    let LOGIN_USER_KEY = localStorage.getItem('LOGIN_USER_KEY')
    if (!LOGIN_USER_KEY && to.path !== '/Login' && to.path != '/Complaint' && to.path != '/GetbackPwd' && to.path != '/Register' && to.path != '/LotIndex') {
        api.WhetherGoLoginPage(res => {
            if (res.data === '1') {
                store.commit('setLoginPageStatus', res.data)
                next({
                    path: '/Login'
                })
            } else {
                next()
            }
        })
    } else {
        //测试账号路由处拦截权限
        if (store.state.userInfo.PLAY == 'play') {
            if (to.path == '/newpay' || to.path == '/newWithdrawMoney') {
                mui.alert('测试账号无此权限~，请注册正式会员！')
                next({
                    path: '/'
                })
            } else {
                next()
            }
        } else {
            next()
        }
    }

    //测试账号路由处拦截权限
    // if (store.state.userInfo.PLAY == 'play') {
    //     if (to.path == '/newpay' || to.path == '/newWithdrawMoney') {
    //         mui.alert('测试账号无此权限~，请注册正式会员！')
    //         next({ path: '/' })
    //     } else {
    //         next()
    //     }
    // } else {
    //     next()
    // }
})

export default router


API
䇿略：一键换肤[DETAILB/mobile01(width:800px;left:-120px;top:10px)]


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
  
▉mobile01▉
[ci b|color].[cj|fnColor]
Button[道奇蓝] 旺旺红 高贵紫 帝王黄 法拉利红 土豪金
computed [ci b|color]() { return this.$store.getters.getCurrentTheme }
methods changeColor(0, '道奇蓝', '[ch b|blue]') 
  store.dispatch('setCurrentTheme', '[ch b|blue]')
  action {[ch b|blue]: {Class: 'blue'...}, lightorange, lightviolet, lightyellow, lightred, yellow}['[ch b|blue]']
STORE{
    [ci b|CurrentTheme]: {
        Class: 'blue',
        [cj|fnColor]: '#3493ff',
        bgColor: '#f5f6f7',
        rgColor: 'rgba(25, 180, 245, 0.7)',
        rgbaColor: 'rgba(25, 180, 245, 0.1)',
        lnColor: 'linear-gradient(to bottom, #19b4f5 0%,#3493ff 100%)',
        yubColor: 'linear-gradient(to bottom, #3493ff 0%, #3b97ff 51%, #ffffff 91%, #f5f6f7 100%)'
    }
}
▉
```
# SVN文件
```
[CLASS none cc]
___base
  admin adminCDN adminCDN-fen AppPack hk6 hk6-m kaijiangwang kaijiangwang-m m3.0 new-kaijiang [c3|pc_m_2.17][cgHELPB/nbysvn01] Tools 
  v 
    downloadWeb OfficailSite OfficailSite申博 WebOfficial-VM [c3 b|会员中心站改造][ciDETAILB/nbysvn02] 会员中心站改造(首屏优化版) [c3 b|精简版会员中心][ciINFOB/nbysvn03] 客服 牛博官网 牛博官网新版 昇博官网
  开彩网-m [c3 b|新开发m站][ciLINK/nbysvn04]
Morocco
QQ推广
README
v2.13稳定版
Vue-Admin
彩票&&棋牌版本
试玩版本
NodeJsForWebUIBuild.exe
工作内容.xlsx

▉nbysvn01▉迭代开发▉
▉nbysvn02▉站点累积一，a-b▉
▉nbysvn03▉站点累积二，b-?▉
▉nbysvn04▉2.20版本▉
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