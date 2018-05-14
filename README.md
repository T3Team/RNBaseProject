

#### React Native版本说明 

```
"react": "16.3.1",
"react-native": "0.55.3",   
//iOS中文输入异常，待官方解决   https://github.com/facebook/react-native/pull/18456/files
```



####项目打开方式：

    推荐使用IDEA工具Open打开项目根目录即可，直接在IDEA中开发

####项目运行方式：
	1.以前的版本，先删除老的第三方组件：把node_modules这个目录删掉
	2.在项目根目录下运行yarn install
	3.npm start启动react native服务
	4.启动Android应用：使用appStart.sh脚本来运行安装
	5.启动iOS应用：使用xcode打开ios目录，点击运行即可

####js代码规范

```
//待完善
 IDEA导入根目录下cric_js.xml的js规范,操作如下：
    1.打开Preferences->Editor->Code Style->JavaScript
    2.点击Scheme右边设置按钮，import scheme来导入IDEA设置

```



####项目规范

```
0.本地静态图片统一放在src/resource/imgs文件夹中,同时在Images.js里面按模块统一管理文件的引用
```




####git规范
	1.同一分支内使用rebase操作，不同分支间合并使用merge操作。
	2.功能较复杂的项目单独拉取分支开发

####处理记录
	icon、启动页替换：
	    iOS:
	    icon替换Images.xcassets/AppIcon.appiconset中对应文件
	    启动页替换Images.xcassets/LaunchImage.launchimage中对应文件
	
	    android:
	    替换mipmap-hdpi、mipmap-xdpi、mipmap-xxdpi中文件

####关于项目打包


	打包版本号规则：
	
	版本号 eg：1.2.0 
	对应的版本code 10200 规则就是x.xx.xx,首位自然数记录 后面都是两位数标识（0对应是00,1对应是01） 

​		
####疑难问题汇总

###### iOS报clang-6.0: error: cannot specify -o when generating multiple output files
    原因：
    clang版本问题 https://github.com/realm/realm-js/issues/1593
    本地安装了clang的话会导致配置的PATH将Xcode中的PATH覆盖。导致版本不对应。
    本地clang -v后显示
               clang version 6.0.0 (tags/RELEASE_600/final)
               Target: x86_64-apple-darwin17.5.0
               Thread model: posix
               InstalledDir: /usr/local/bin
    
    解决：
    升级了clang也只是升级到了clang 6.0.0，需要修改将clang指向/Applications/Xcode.app中的clang
    配置完毕后命令行验证如下即可：
    $clang -v
         Apple LLVM version 9.0.0 (clang-900.0.39.2)
         Target: x86_64-apple-darwin17.3.0
         Thread model: posix
         InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin

###### iOS报React/RCTBundleURLProvider.h not found
    报config.h没有找到
    1.进入react-native/third-party/glogXXXX这个目录
    2.执行../../scripts/ios-configure-glog.sh
    
    https://github.com/facebook/react-native/issues/14382
    Running into the same issue here after upgrading from 0.44. None of the above solutions or clearing caches did the trick for me. Here's what I did to get things working again:
    In the Terminal, navigate to the react-native/third-party/glog folder inside node_modules (for me, this was cd node_modules/react-native/third-party/glog-0.3.4)
    Once actively in this folder, run ../../scripts/ios-configure-glog.sh
    Glog is configured and the required config.h header file is created for Xcode to find
    
    老报这问题 - -！
    建了个脚本：fix_config.h_not_found.sh 直接运行就好了

###### yarn install时慢或卡住了。使用淘宝镜像 
	获取yarn当前配置源地址：
	yarn config get registry
	设置为淘宝镜像
	yarn config set registry https://registry.npm.taobao.org
	恢复默认：
	yarn config set registry https://registry.npmjs.org
	注意：淘宝镜像有的包下载报404，说明没淘宝镜像上还没同步对应包。可以在http://npm.taobao.org/网站上搜索该包后同步，之后淘宝镜像上就有了

##### 删除引用的第三方库步骤说明

```
1.react-native unlink lib-name
2.yarn remove lib-name
```