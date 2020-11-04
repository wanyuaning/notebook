```block
SCENE(
  {"title":"验证策略", "flow":[]},
  {"title":"验证策略", "flow":[]},
  {"title":"验证策略", "flow":[]},
  {"title":"验证策略", "flow":[]}
)
```





<br>

```block store
 store
----------------------------------
{
  isCode: false,           // 是否开启了验证码
  verifyCodeTypeList: {
    SceneUserLogin: 0,     // 登录开启哪一种验证码
    SceneAgentPostUser: 0, // 代理开下级开启哪一种验证码
    SceneFindUserPwd: 0,   // 找回密码开启哪一种验证码
    SceneUserRegister: 0   // 注册开启哪一种验证码
  }
}
```
```block api
[API][/api/Api/][GetVerifyCodeNew]
----------------------------------
{
  state: "success",
  message: "NB103367 开启验证码",
  data: "1",
  type: {
    SceneUserLogin: 1,
    SceneAgentPostUser: 0,
    SceneFindUserPwd: 0,
    SceneUserRegister: 0,
    SceneUsdtDraw: -1,
  },
  msg: "0图形 1行为 2短信 3图形+短信,",
}
```


```block api
[API][/api/Act/][GetActWebActivityList]
----------------------------------
[
  {"ACT_TYPE_CD": "act_slyder_adventures"},
  {"ACT_TYPE_CD": "act_red_envelopes"}
]
```

```block api
[API][api/web/][GetAllBasicWebsiteConfiguration]
----------------------------------
[
  {"ENGLISH_NAME":"CUST_SERVICES_URI","CONTENT":"1","PICTURE_ADDRESS":"/1","JUMP_ADDRESS":"http://wpa.qq.com/msgrd?v=3&uin=2022222290&site=qq&menu=yes","IS_TRUE":"1","DESCRIPTION":null,"VERSION":"v2","WEB_TITLE":"在线客服","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"home_float_right","CONTENT":null,"PICTURE_ADDRESS":"/bb/20201023/17219db96f8a43c595ef5037e47a6ba8.gif","JUMP_ADDRESS":"/active_center_index","IS_TRUE":"1","DESCRIPTION":"pc端右下角浮窗","VERSION":"v2","WEB_TITLE":"7","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"weixinsacn","CONTENT":"0","PICTURE_ADDRESS":"/bb/20200729/99ca865b8b1c449abda880a4f295b40a.png","JUMP_ADDRESS":"0","IS_TRUE":"0","DESCRIPTION":"0","VERSION":"v2","WEB_TITLE":"-","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"home_float_m","CONTENT":"0","PICTURE_ADDRESS":"/bb/20200307/d8965d0232b34a87a861a340142abe34.gif","JUMP_ADDRESS":"/DiscountsActivity","IS_TRUE":"1","DESCRIPTION":"移动端左浮窗","VERSION":"v2","WEB_TITLE":"1","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_SERVICES_URI_2","CONTENT":null,"PICTURE_ADDRESS":"/bb/20201028/07ffad5d9ac64ee28b7f443a83bd54f9.jpg","JUMP_ADDRESS":"baidu456.com","IS_TRUE":"1","DESCRIPTION":"000","VERSION":"v2","WEB_TITLE":"在线客服2","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"download_a","CONTENT":"a面下载","PICTURE_ADDRESS":"/21321321321","JUMP_ADDRESS":"&nbsp;","IS_TRUE":"1","DESCRIPTION":"a面下载","VERSION":"v2","WEB_TITLE":null,"INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_QQ_Ios","CONTENT":"454564564","PICTURE_ADDRESS":"/0.0","JUMP_ADDRESS":"mqqwpa://im/chat?chat_type=wpa&uin=454564564&version=1&src_type=web&web_src=oicqzone.com","IS_TRUE":"1","DESCRIPTION":"苹果手机端在线QQ","VERSION":"v2","WEB_TITLE":"/","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_QQ_Android","CONTENT":"994914231","PICTURE_ADDRESS":"0","JUMP_ADDRESS":"http://wpa.qq.com/msgrd?v=3&uin=:505843333&site=qq&menu=yes","IS_TRUE":"1","DESCRIPTION":"安卓手机端在线QQ","VERSION":"v2","WEB_TITLE":"/","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"download_a","CONTENT":"0","PICTURE_ADDRESS":"0","JUMP_ADDRESS":"4545656132","IS_TRUE":"1","DESCRIPTION":"00230.","VERSION":"v2","WEB_TITLE":"下载","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_SERVICES_OTHER","CONTENT":"1","PICTURE_ADDRESS":"/bb/20200729/28e68614de82468eb584506f1a5ccf55.jpg","JUMP_ADDRESS":"baidu.com","IS_TRUE":"1","DESCRIPTION":"移动端在线客服配置2个","VERSION":"v2","WEB_TITLE":"其他客服","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"download_b","CONTENT":"12212","PICTURE_ADDRESS":"/2121","JUMP_ADDRESS":"2121212","IS_TRUE":"1","DESCRIPTION":"121212","VERSION":"v2","WEB_TITLE":"121212","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_SERVICES_EMAIL","CONTENT":"8008208820@qq.com","PICTURE_ADDRESS":"/","JUMP_ADDRESS":"www.baidu.com","IS_TRUE":"0","DESCRIPTION":"邮箱","VERSION":"v2","WEB_TITLE":"QQ邮箱","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"tp_stock","CONTENT":"0","PICTURE_ADDRESS":"0","JUMP_ADDRESS":"0","IS_TRUE":"0","DESCRIPTION":"0","VERSION":"v2","WEB_TITLE":"0","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"rightAgent","CONTENT":"0","PICTURE_ADDRESS":"0","JUMP_ADDRESS":"0","IS_TRUE":"1","DESCRIPTION":"代理微信","VERSION":"v2","WEB_TITLE":"1","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"download","CONTENT":"01222","PICTURE_ADDRESS":"/bb/20200302/63c6fbea49514e5185f85ff4974d3359.png","JUMP_ADDRESS":"http://news.baidu.com/","IS_TRUE":"1","DESCRIPTION":"APP下载链接","VERSION":"v2","WEB_TITLE":".","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_SERVICES_LINK","CONTENT":null,"PICTURE_ADDRESS":"/1","JUMP_ADDRESS":"Service","IS_TRUE":"1","DESCRIPTION":"客服中心","VERSION":"v2","WEB_TITLE":"1","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_SERVICES_QQ","CONTENT":"007","PICTURE_ADDRESS":"/bb/20200809/ac4dff771f6c40dda618382a942235b8.png","JUMP_ADDRESS":"https://baidu.com","IS_TRUE":"1","DESCRIPTION":"000","VERSION":"v2","WEB_TITLE":"QQ客服","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CustomerServiceTel","CONTENT":"10086","PICTURE_ADDRESS":"/221","JUMP_ADDRESS":"&nbsp;","IS_TRUE":"1","DESCRIPTION":"啊啊啊啊啊啊啊啊啊啊啊","VERSION":"v2","WEB_TITLE":"短信找回","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"home_float_m2","CONTENT":"/","PICTURE_ADDRESS":"/bb/20201104/ab1f38046eeb4192a61f1a82a81a319e.PNG","JUMP_ADDRESS":"www.baidu.com","IS_TRUE":"1","DESCRIPTION":"移动端右浮窗","VERSION":"v2","WEB_TITLE":"0","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"home_float_v","CONTENT":null,"PICTURE_ADDRESS":"/bb/20201023/ae3d7a5e11094bd7a07f2645ed80bed6.gif","JUMP_ADDRESS":"fishGame","IS_TRUE":"1","DESCRIPTION":"pc端左下角浮窗","VERSION":"v2","WEB_TITLE":"y","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_LoginContact","CONTENT":"0","PICTURE_ADDRESS":"/1","JUMP_ADDRESS":"Complaint","IS_TRUE":"0","DESCRIPTION":"登录页-联系我们","VERSION":"v2","WEB_TITLE":".","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"Agent_server_qq","CONTENT":"33241","PICTURE_ADDRESS":"/0001","JUMP_ADDRESS":"https://www.baidu.com/","IS_TRUE":"1","DESCRIPTION":"客服2","VERSION":"v2","WEB_TITLE":"代理QQ","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_SERVICES_VIP","CONTENT":"2","PICTURE_ADDRESS":"/2","JUMP_ADDRESS":"http://www.hao123.com","IS_TRUE":"1","DESCRIPTION":"www.hao123.com","VERSION":"v2","WEB_TITLE":"专属vip","INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"CUST_QQ_Android","CONTENT":"测测","PICTURE_ADDRESS":"/bb/20200501/25c2bc4b68b5417f99c6c6005aa3fedc.gif","JUMP_ADDRESS":"测测","IS_TRUE":"0","DESCRIPTION":"测测","VERSION":"v2","WEB_TITLE":null,"INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  },
  {"ENGLISH_NAME":"Pc_Logo_Mag","CONTENT":null,"PICTURE_ADDRESS":"/bb/20200804/9fd5e703cbe64b27b9d562652db8b60d.jpg","JUMP_ADDRESS":null,"IS_TRUE":"0","DESCRIPTION":null,"VERSION":"v2","WEB_TITLE":null,"INVITE_CODE_IND":"1","RE_ENTER_IND":"0","INVITATION_CODE":null  }
]
```

```block api
[API][/api/api/][GetPlay]
----------------------------------
{
  data: "0",
  message: "关闭试玩账号",
  state: "success"
}
```

```block api
[API][/api/Web/][GetIndexBannerList]
----------------------------------
[
  {
    "ID": 1233,
    "BANNER_NAME": "0",
    "BANNER_PICURL": "/bb/20191224/b84dce16fcce4a6494327943c9ff282c.jpg",
    "BANNER_LINKURL": "PromotionsDtail?id=3315",
    "REMARK": "#/PromotionsDtail?id=2883",
    "SORT": 0,
    "CREATE_DTT": "2019-12-24 16:08:23"
  },
  {
    "ID": 1322,
    "BANNER_NAME": "666",
    "BANNER_PICURL": "/bb/20200723/83b46dbd9ef2429ca1892149b67b2a32.jpg",
    "BANNER_LINKURL": "vipzone",
    "REMARK": "测试",
    "SORT": 1,
    "CREATE_DTT": "2020-07-23 22:29:37"
  },
  {
    "ID": 1235,
    "BANNER_NAME": "2",
    "BANNER_PICURL": "/bb/20191224/49b858d8b04b4353b9d678c78b3c59c3.jpg",
    "BANNER_LINKURL": "http://www.4399.cpm",
    "REMARK": "&nbsp;",
    "SORT": 2,
    "CREATE_DTT": "2019-12-24 16:08:45"
  },
  {
    "ID": 1234,
    "BANNER_NAME": "2",
    "BANNER_PICURL": "/bb/20191224/95ed9b49aa3849d9922267f7294ef23a.jpg",
    "BANNER_LINKURL": "#https://weibo.com/hk",
    "REMARK": "&nbsp;",
    "SORT": 3,
    "CREATE_DTT": "2019-12-24 16:08:35"
  }
]
```

```block api
[API][/api/Web/][GetAppHomGame]
----------------------------------
{
  "HOT_GAME": [
    {"code":"fish","id":"8","type":"fish","img":"fish.png","desc":"捕鱼游戏","Content":null,"path":"fish","hot":"0"  },
    {"code":"cq_fish","id":"8050","type":"fish","img":"cq_fish.png","desc":"CQ捕鱼","Content":null,"path":"fish","hot":"0"  },
    {"code":"ky_fish","id":"8010","type":"fish","img":"ky_fish.png","desc":"开元捕鱼","Content":null,"path":"fish","hot":"0"  },
    {"code":"th_fish","id":"8020","type":"fish","img":"th_fish.png","desc":"天豪捕鱼","Content":null,"path":"fish","hot":"0"  },
    {"code":"bg_fish","id":"8030","type":"fish","img":"bg_fish.png","desc":"BG捕鱼","Content":null,"path":"fish","hot":"0"  },
    {"code":"th_brand","id":"srnn","type":"Brand","img":"srnn.png","desc":"抢庄牛牛","Content":null,"path":"th_brand","hot":"0"  },
    {"code":"ky_brand","id":"620","type":"Brand","img":"620.png","desc":"德州扑克","Content":null,"path":"ky_brand","hot":"0"  },
    {"code":"th_brand","id":"sr28g","type":"Brand","img":"sr28g.png","desc":"二八杠","Content":null,"path":"th_brand","hot":"0"  },
    {"code":"th_brand","id":"djnn","type":"Brand","img":"djnn.png","desc":"看牌抢牛","Content":null,"path":"th_brand","hot":"0"  },
    {"code":"th_brand","id":"TBSZ16","type":"Brand","img":"TBSZ16.png","desc":"16人急速三张","Content":null,"path":"th_brand","hot":"0"  },
    {"code":"th_brand","id":"brnn","type":"Brand","img":"brnn.png","desc":"百人牛牛","Content":null,"path":"th_brand","hot":"0"  },
    {"code":"th_brand","id":"jqnn","type":"Brand","img":"jqnn.png","desc":"通杀牛牛","Content":null,"path":"th_brand","hot":"0"  },
    {"code":"th_brand","id":"ddz5","type":"Brand","img":"ddz5.png","desc":"斗地主比赛","Content":null,"path":"th_brand","hot":"0"  },
    {"code":"stock","id":"2516","type":"stock","img":"stock.png","desc":"股票","Content":null,"path":"stock","hot":"0"  },
    {"code":"th_brand","id":"tbnn","type":"Brand","img":"tbnn.png","desc":"通比牛牛","Content":null,"path":"th_brand","hot":null  }
  ],
  "GAME_NAVIGATION": [
    {"code":"hgty","id":"1","type":"sportGame","img":"sport.png","desc":"体育赛事","Content":"1111111111","path":"SportsGame","hot":null  },
    {"code":"ky_fish","id":"8010","type":"fish","img":"ky_fish.png","desc":"开元捕鱼","Content":null,"path":"ky_fish","hot":null  },
    {"code":"th_fish","id":"8020","type":"fish","img":"th_fish.png","desc":"天豪捕鱼","Content":null,"path":"th_fish","hot":null  },
    {"code":"bg_fish","id":"8030","type":"fish","img":"bg_fish.png","desc":"BG捕鱼","Content":null,"path":"bg_fish","hot":null  },
    {"code":"sbqp_fish","id":"8040","type":"fish","img":"sbqp_fish.png","desc":"昇博捕鱼","Content":null,"path":"sbqp_fish","hot":null  },
    {"code":"cq_fish","id":"8050","type":"fish","img":"cq_fish.png","desc":"CQ捕鱼","Content":null,"path":"cq_fish","hot":null  },
    {"code":"tp_stock","id":"2517","type":"stock","img":"tp_stock.png","desc":"股市T+0","Content":null,"path":"tp_stock","hot":null  },
    {"code":"fish","id":"8","type":"fish","img":"fish.png","desc":"捕鱼游戏","Content":null,"path":"fish","hot":null  },
    {"code":"cpyx","id":"2","type":"lotGame","img":"lottery.png","desc":"彩票游戏","Content":"&nbsp;","path":"LotteryGame","hot":null  },
    {"code":"fish","id":"8","type":"fish","img":"fish.png","desc":"捕鱼游戏","Content":null,"path":"fish","hot":null  },
    {"code":"dzyy","id":"9","type":"electronic","img":"slot.png","desc":"电子游艺","Content":"sassdas","path":"ElectronicGame","hot":null  }
  ],
  "LOGIN_FAILURE_COUNT": 0,
  "LOGIN_FAILURE_TIME": 0,
  "ID": 0,
  "TEST_DEFAULT_NAME": null,
  "TEST_DEFAULT_PASSWORD": null,
  "PLATFORM_IDENT": null,
  "MANAGER_DIRECTORY": null,
  "OPEN_LOG_IND": null,
  "USER_MSG_TITLE": null,
  "USER_MSG_CONTENT": null,
  "USER_MSG_FROM": null,
  "GIFT_IND": null,
  "GIFT_AMT": 0,
  "BET_POINTS": 0,
  "RECHARGE_POINTS": 0,
  "MIN_EXCHANGE_POINTS": 0,
  "TEST_DEFAULT_AMOUNT": 0,
  "REC_INCOME_RATE": 0,
  "FRIST_REQUEST_PAGE_URL": null,
  "OPEN_SEND_REGMSG_IND": null,
  "BLACK_LIST_IND": null,
  "TEST_SHARE_CONFIG": null,
  "RATE_LIMIT_CONFIG": null,
  "HOT_GAME_DEL": "1",
  "LOGIN_LOCK_DAY": 0,
  "INT_TRANSFERUSER_COUNT": 0,
  "TEST_LOT_BETMONEY": 0,
  "IP_BLACK_DATA": 0,
  "IP_BLACK_COUNT": 0,
  "WARN_REPRAT_ORDER": null,
  "CAPTCHACONFIG": null,
  "CAPTCHACOMPLEX": null,
  "CAPTCHATYPE": null,
  "USER_DRAWAL_COUNT": 0,
  "LOT_SLEW_TYPE": null,
  "LOT_SLEW_RND": 0,
  "ENABLE_COUNTERS": null,
  "LOT_SLEW_BET": 0,
  "BACK_CARD_COUNT": 0,
  "UNLOGIN_DAY": 0,
  "REG_INVITE_URL": null,
  "LIMIT_ADD_AMT": 0,
  "APPROVE_TERM": 0,
  "PROFIT_MODE": null,
  "WORK_SHIFTS": null,
  "OPEN_WITHDRAW_COUNTERS": null,
  "RADIX_POINT_IND": null,
  "CAPTCHA_TYPE": 0,
  "GEETEST_ID": null,
  "GEETEST_PRIKEY": null,
  "OPEN_AUDIT": null,
  "WITHDRAWALS_LOCK": null,
  "WHETHERLOGIN_PAGE": null,
  "SPORT_COMPENSATE": null,
  "IP_IND": null,
  "SMS_CODE_CONFIG": null,
  "SMS_CODE_SCENE": null,
  "SMS_ERROR_CNT": 0,
  "SMS_LOGIN_IND": 0,
  "WEIMI_UID": null,
  "WEIMI_PAS": null,
  "WEIMI_CID": null,
  "WEIMI_URL": null,
  "SceneUserLogin": 0,
  "SceneUserRegister": 0,
  "SceneAgentPostUser": 0,
  "SceneFindUserPwd": 0,
  "SceneUsdtDraw": null
}
```

```block api
[API][/api/Act/][GetActImgList]
----------------------------------
{
  "rows": [],
  "total": 0,
  "page": 1,
  "records": 0
}
```

```block api
[API][/api/Web/][GetNotice?top=10&notice_type=1&window=0&code=0] 
----------------------------------
[
  {
    "SCROLLER": 10,
    "DEFAULT_SHOW_IND": "1",
    "ID": 1422,
    "NOTICES_TITLE": "笔笔送",
    "SORT": 1,
    "CREATE_DTT": "2020-11-03 21:26:58",
    "CONTENT": "<p><span style=\"color: rgb(255, 0, 0);\"><span style=\"font-size: 20px;\">【限时活动火热开启】</span><span style=\"color: rgb(255, 0, 0); font-size: 18px;\"><span style=\"color: rgb(255, 0, 0);\">即日起使用</span>【银联转账，云闪付转账，支付宝转银行，微信转银行】即赠<span style=\"background-color: rgb(0, 0, 0);\"></span>0.5%入款优惠</span><span style=\"background-color: rgb(255, 255, 255); font-size: 20px;\">笔笔存、笔笔送！自动派送，无需申请</span><span style=\"color: rgb(255, 0, 0); font-size: 18px;\">入</span><span style=\"color: rgb(255, 0, 0); font-size: 18px;\">款账户以网站公示为准</span></span></p>"
  }
]
```

```block api
[API][/api/User/][GetNoReadMessageCount]
----------------------------------
1
```

```block api
[API][/api/User/][CheckSession]
----------------------------------
{
  "state": "success",
  "message": "",
  "data": {
    "key": "bbv:user_session:273586",
    "value": "d2273188-ae48-8650-6613-8af51d9751ec"
  }
}

```

```block api
[API][/api/User/][GetUserGroup]
----------------------------------
{
  "COM_PROPORTION_RATE": 0,       // 汇款优惠比例
  "DEFAULT_IND": "0",             // 是否为默认分组 (0.否 1.是)
  "FREE_WITHDRAWALS3_CNT": 0,     // 免费取款次数
  "MAX_ZR_TRANSFORM_AMT": 10000,  // 最高转换额度
  "MIN_CP_AMT": 10,               // 最低彩票下注
  "MIN_DEPOSIT_AMT": 100,         // 最低充值金额
  "MIN_DRAW_AMT": 1000,           // 银行卡最低取款金额
  "MIN_RECHARGE_AMT": 1000,       // 最低汇款金额
  "MIN_VIRTUAL_DRAW_AMT": 200,    // 虚拟币最低取款金额
  "MIN_ZR_TRANSFORM_AMT": 1,      // 最低额度转换
  "ONL_PREFERENTIAL_RATE": null,  // 支付优惠比例
  "RADIX_POINT_IND": "0",         // 取款是否可以小数(0.否 1.是)
  "WITHDRAWAL_RATE": 0,           // 取款手续费比例 (0.01 => 1%)
  "WIT_ADMINISTRATIVE_AMT": 0,    // 取款固定手续费
}
```

```block api
[API][/api/User/][GetUserInfo]
----------------------------------
{
  "NEED_UPDPWD": false,
  "AUTHOR": null,
  "AGENT_TYPE": "0",
  "INVITE_CODE": 61013155,
  "LOGIN_ACCOUNT_COUNT": 0,
  "LOGIN_NAME": "137****9991",
  "HASANSWER": "1",
  "PLAY": null,
  "TEST_IND": "0",
  "ID": 273586,
  "PLATFORM_IDENT": "bb",
  "INVITE_URL": "",
  "ASK": "********",
  "ANSWER": "********",
  "REAL_NAME": "a",
  "QQ": "5********85",
  "WECHAT": "1********25",
  "USER_NAME": "bb273586",
  "MOBILE": "137****9991",
  "EMAIL": "a",
  "DRAW_PASSWORD": "Success",
  "SYS_USER_GROUP_ID": 1244,
  "AGENT_IND": "1",
  "CREATE_DTT": "2020-10-17 09:41:23",
  "AGENT_MENU_IND": "1"
}
```

```block api
[API][/api/YuBao/][GetTrsConfig]
----------------------------------
{
  "state": "success",
  "message": "查询成功",
  "data": {
    "ID": 21,
    "PLATFORM_IDENT": "bb",
    "OPEN_IND": "1",
    "TRS_IN_IND": "1",
    "TRS_OUT_IND": "1",
    "TRS_PROFIT": 0.02,
    "TRS_YEAR_PROFIT": 7.3,
    "TRS_CYCLE": "1",
    "TRS_POWER_IND": "0",
    "TRS_POWER_DTT": "00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,",
    "TRS_INSTRUCTIONS": "<p style=\"white-space: normal;\"><span style=\"font-family: quot;\">余额宝是一种资金管理服务。转入余额宝，即购买货币基金，可享货币基金收益；</span></p><p style=\"white-space: normal;\"><span style=\"font-family: quot;\">该服务由‘太阳城集团’成立，为您提供安全，高额的理财选择。 转入余额宝的资金不仅可以获得收益，还能随时进行娱乐，非常灵活便捷。让您赚钱娱乐两不误 。</span></p><p style=\"white-space: normal;\"><span style=\"font-family: quot;\">本服务为您提供随时随地的基金服务，不同于其他平台产品，我们随时存入随时就能产生收益，您最短在一小时内就能获得闲置资金收益；超高年化收益率，超越市面上所有理财产品；</span><span style=\"font-family: quot;\"></span></p><p><br/></p>",
    "TRS_TRANSFER_MIN": 100,
    "TRS_TRANSFER_MAX": 2147483647,
    "TRS_TURNOUT_MIN": 100,
    "TRS_TURNOUT_MAX": 2147483647,
    "CREATE_DTT": "2019-11-07 17:11:23",
    "LAST_MODFIY_USER_ID": 1043,
    "LAST_MODFIY_DTT": "2020-10-30 11:05:46",
    "TRS_REGULATION": "<p><span style=\"font-size:16px;\">余额宝是一种资金管理服务, 转入余额宝, 即购买理财产品, 可享利息收益; 余额宝产品销售服务将由太阳城提供支持, 提供客户更多理财选择;</span> </p><p><span style=\"font-size:16px;\">货币基金主要用于投资理财, 获取利息收益. 存款立即计息, 资金自由存取, 即存即取.</span> </p>",
    "TRS_ACC_BAL": 0,
    "ACC_BAL_PROFIT": "0.0000",
    "ACC_BAL_PROFIT_SUM": "0.0000",
    "TRS_ACCOUNT": "0",
    "TRS_PROFIT_BAL": "730.00%",
    "SYS_USER_GROUP_NAME": "0",
    "STATE_IND": "1"
  }
}
```

```block api
[API][/api/act/][GetActLogInInd]
----------------------------------
{
  "state": "error",
  "message": "温馨提示(NB102116):获取参数配置失败!",
  "data": 0
}
```

```block api
[API][/api/][getCaptcha]
----------------------------------
{
  success: 1,
  gt: "0c58edeb1076ecaf53943d16cd906b69",
  challenge: "2d5fcd7ce40cdaf1f398df769de42ef8",
  new_captcha: true,
}
```

```block api
[API][][]
----------------------------------

```

```block api
[API][][]
----------------------------------

```