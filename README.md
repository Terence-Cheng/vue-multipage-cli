# vue-cli multipage脚手架

> 基于vue-cli脚手架修改的多页脚手架

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at http://localhost:8080/modules/test.html
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 开发指南

``` bash
# 页面目录
    webpack
      |---build
      |---config
      |---dist
      |---src
        |---assets 资源
        |---common 公共js/css资源目录
        |---components 公共组件
        |---mock mock数据
        |---modules 各个页面模块
          |---test    test模块
            |---component 组件
            |---store vuex目录
            |---router 路由文件
            |---test.html html模板
            |---test.js   入口文件（与目录文件名相同）
            |---APP.vue  vue组件的入口

在src/modules/目錄下建立xxx文件夾，在里面建立xxx.js与xxx.html，注意与目录名称相同，参考test文件路径的格式
有关mock数据，由于mock数据仅仅是在本地开发中用到，因此建立了一个全局变量IS_DEV来判断是否本地开发环境，进而决定是否加载mock数据，参考test/test.js
```
