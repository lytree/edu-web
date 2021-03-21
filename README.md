<div align=center><img src="logo.jpg"/></div>

<h2 align=center>一个各行业都适用的分布式在线教育系统</h2>

##### 领课教育系统(roncoo-education)：[码云地址](https://gitee.com/roncoocom/roncoo-education) | [Github地址](https://github.com/roncoo/roncoo-education)
> roncoo-education是后台工程，核心框架：Spring Cloud  

##### 前端门户工程(roncoo-education-web)：[码云地址](https://gitee.com/roncoocom/roncoo-education-web) | [Github地址](https://github.com/roncoo/roncoo-education-web)
> roncoo-education-web是前端门户工程，核心框架：Vuejs + Nuxt.js  

##### 后台管理工程(roncoo-education-admin)：[码云地址](https://gitee.com/roncoocom/roncoo-education-admin) | [Github地址](https://github.com/roncoo/roncoo-education-admin)
> roncoo-education-admin是后台管理工程，核心框架：vue-element-admin

### 演示地址
##### 前端演示地址：[领课教育](http://edu.os.roncoo.com/) | 后台演示地址：[运营后台](http://edu.os.roncoo.com/admin)

### 使用文档
##### [项目介绍](https://blog.roncoo.com/article/1105321762337357826)  |  [部署文档](https://blog.roncoo.com/article/1103554925858197505)  |  [常见问题](https://blog.roncoo.com/article/1105309620724858882)

### 项目介绍（如果对你有用，请给个star！）
领课教育系统（roncoo-education）是基于领课网络多年的在线教育平台开发和运营经验打造出来的产品，致力于打造一个各行业都适用的分布式在线教育系统。系统采用前后端分离模式，前台采用vue.js为核心框架，后台采用Spring Cloud为核心框架。系统目前主要功能有课程点播功能，支持多家视频云的接入，课程附件管理功能，支持多家存储云的接入，讲师管理功能，支持讲师入驻功能，可以帮助个人或者企业快速搭建一个轻量级的在线教育平台。

* 系统功能通用，无论是个人还是企业都可以利用该系统快速搭建一个属于自己的在线教育平台。
* 系统采用MIT开源协议，可以在商业项目中免费使用或者二次开发而不必支付任何费用。
* 所有使用到的框架或者组件都是基于开源项目，代码保证100%开源。
* 如需商业技术服务支持，可使用[领课教育系统商业版](https://edu.roncoo.net/)，功能更丰富，全程指导，上线更快速。

### 前台主要功能介绍
* 首页功能，导航模块（自定义导航设置），广告模块（自定的轮播设置），课程模块（自定义课程设置）
* 列表功能，分类模块（自定义分类设置），搜索模块（自定义搜索设置）
* 课程详情页功能，课程介绍、目录的展示和购买、播放功能等
* 个人中心，具有个人信息设置、密码修改、订单管理、学习记录等功能
* 讲师中心，讲师信息管理、课程管理（课程的添加、修改）、收益管理等功能

### 后台主要功能介绍
* 权限管理功能，多角色多用户自定义配置
* 系统配置功能，自定义进行站点配置及第三方参数配置
* 讲师管理功能，讲师申请入驻，后台具有审核功能
* 课程管理功能，讲师管理自有课程，后台具有审核功能
* 用户登录功能，同一时间只允许同一个账号在同一个地方登录，防止账号共享
* 广告管理功能，后台自定义广告设置，增加营销效果
* 支付功能模块，可无缝对接[龙果支付系统](https://pay.roncoo.net/)商业版

### 官方QQ群（加群免费获取sql脚本）

<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=DOTD1t5YG-KYfi6JSW4Yms9XWFkNsya6&jump_from=webapi"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="在线教育系统-领课⑩" title="在线教育系统-领课⑩"> 703455569</a> 可加

> QQ群：1028579521(已满)
> QQ群：532451240(已满)  QQ群：903738971(已满)   QQ群：74876271 (已满)  
> QQ群：774890501(已满)   QQ群：702189511(已满)   QQ群：826617734(已满)
> QQ群：154407415(已满)   QQ群：284915592(已满)

### 商业合作
* 如果您想使用功能更完善的教育系统，我们有商业版！
* 如果您想基于教育系统进行定制开发，我们提供有偿服务支持！
* 如果您没有技术团队也想运营教育平台，我们提供有教育系统SaaS云服务！
* 其他合作模式不限，欢迎来撩！
* 商务合作联系方式1：18302045627（微信同号）
* 商务合作联系方式2：18027263931（微信同号）
* 官网地址：[https://edu.roncoo.net](https://edu.roncoo.net/index.html)

## 项目推荐
##### 龙果支付系统(roncoo-pay)：[码云地址](https://gitee.com/roncoocom/roncoo-pay) | [Github地址](https://github.com/roncoo/roncoo-pay)

#### 目录结构
``` 
roncoo-education-web/
├── api/ api接口列表目录
│   ├── method.js
│   ├── main.js
├── assets/ 公用的静态资源目录
│   ├── CSS/
│   ├── JS
│   ├── fonts
│   ├── image
├── component/ 
│   ├── 所有的自定义组件
├── config/ 配置文件目录
│   ├── conf.js  系统编译配置文件
│   ├── index.js  系统全局配置文件
│   ├── dev.env.js  开发模式的全局配置
│   ├── pro.env.js  生产模式的全局配置
│   ├── index.js  测试模式的全局配置
├── layouts/
│   ├── 布局目录
├── middleware/
│   ├── 中间件目录
├── pages/
│   ├── 页面目录
├── plugins/
│   ├── 所有的第三方或自定义插件的目录
├── static/
│   ├── 静态文件目录
├── store/
│   ├── actions.js
│   ├── getters.js
│   ├── index.js
│   ├── mutations.js
├── utils/
│   ├── 自定义工具类目录
└── next.config.js   nextjs 配置文件 
```

#### 编译使用
``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

```
