[Android开发环境搭建](pages/platform/android.md) 

[IOS开发环境搭建](pages/platform/ios.md) 
```
[h3|描述文件] 可“iphone配置实用工具”生成
  设备安全策略
  配置信息
  Wi-Fi 设置
  APN 设置
  Exchange 帐户设置
  邮件设置
  允许 iPhone 和 iPod touch 与企业系统配合使用的证书

[h3|签名/加密]
  1 脚本签名。借助github上python脚本: https://github.com/nmcspadden/ProfileSigner clone  把要签名的文件mobileconfig放在与profile_signer.py同目录 命令行定位到该目录
    签名
    $ ./profile_signer.py -n "a" sign b.mobileconfig c.mobileconfig 
    加密
    ./profile_signer.py -n "a" encrypt b.mobileconfig c.mobileconfig
    签名&加密
    ./profile_signer.py -n "a" both b.mobileconfig c.mobileconfig

    注释：
    (1)."a" ：为你的证书在钥匙串中的全名,选择证书=>显示简介=>复制常用名称加上引号即可,比如："iPhone Developer: jakey.shao xxxx@xxx.com"。
    (2).b：为mobileconfig 的名称。
    (3).c：为签名后生成的mobileconfig文件名称
    做完这些之后：Safari安装描述文件，发现未签名变成了已签名,红色变成了绿色啦.安装的时候没有警告啦。


```