# Android开发环境搭建

JDK安装包 | Android SDK
Eclipse 或 Android Studio



1. 下载安装JDK包 (info h-ttp://w-ww.oracle.com/technetwork/java/javase/downloads/index.html) jdk-15.0.1_windows-x64_bin.exe  
2. 系统环境变量 
```
    JAVA_HOME:  C:\Program Files\Java\jdk-15.0.1                    可以 %JAVA_HOME% 作为JDK安装目录的统一引用路径
    Path:       ;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin                追加 
    CLASSPATH:  .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar  程序所需要的类或者包 "."表示当前目录
```
3. 下载安装Eclipse (info h-ttp://w-ww.eclipse.org/downloads/)
4. Android SDK  
```
    下载 (info h-ttp://w-ww.androiddevtools.cn/)  [Android SDK 工具 > SDK Tools] installer_r24.4.1-windows.exe
    安装 会自动关联JDK安装 安装地址: D:\sdk\ (新建了sdk文件夹)
    启动 SDK Manager 下载安装可选工具
    系统环境变量：
        ANDROID_SDK_HOME: D:\sdk\
        Path: 追加 ;% ANDROID_SDK_HOME%\platform-tools;% ANDROID_SDK_HOME%\tools
    命令检测Android SDK是否安装成功：adb version
```       
    
5. 为Eclipse安装ADT插件（Android Development Tools）以支持Android开发
    打开Eclipse软件
    Help > Install New Sofeware...
    [Add]  Name: ADT  Location: http://dl-ssl.google.com/android/eclipse/  [OK]
    勾选要安装的工具 [Next]

“adb”不是内部或外部命令: 
platform-tools/复制adb.exe，AdbWinApi.dll，AdbWinUsbApi.dll 到 C:\用户\new 目录下

启动 Android Studio 时，每次都 Missing SDK    
Android Studio安装目录/bin/idea.properties 末尾添加： disable.android.first.run=true 保存 重新Android Studio