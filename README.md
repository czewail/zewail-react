# React 开发环境

整合React全家桶，简化开发前期准备（这并不是一个框架），适用于对react技术栈有一定了解得开发人员使用

支持热更新

#### 整合包含react全家桶包含

- redux：状态管理
- redux-saga：redux中间件，用来处理异步方法
- react-router 4：路由管理
- redux-persist：redux中间件，用来处理本地存储数据


#### 其他相关工具

- webpack 3：打包工具
- less：css预处理器

## 使用

使用 [zewail-react-cli](https://github.com/czewail/zewail-react-cli)工具来管理你的项目

## 目录结构
```txt
.
├── config	// webpack配置目录
│   ├── webpack.config.dev.js // 用于开发环境的webpack配置文件
│   └── webpack.config.pro.js // 用于生产环境的webpack配置文件
├── package.json
├── server // 本地开发web服务器目录
│   ├── index.html // 主文件
│   └── server.js // 本地开发web服务器node启动文件，也用于热更新
└── src // 源文件目录
    ├── index.js // 入口文件
    ├── App.js // 应用主文件
    ├── components // 组件库目录，存放项目独立组件
    ├── constants // 常用其他文件目录
    │   └── RouteWithSubRoutes.js // 子路由包装方法
    ├── containers // 页面容器目录，一般存放用来做数据交互的页面
    │   └── Main.js // 主页面示例
    ├── reducers // reducer 目录
    │   └── index.js // reducer 整合文件
    ├── routes // 路由配置目录
    │   └── index.js // 主路由配置示例
    ├── sagas // saga 目录
    │   └── index.js // saga 整合文件
    ├── store // store 目录
    │   └── index.js // 生成store的文件
    └── styles // 样式目录
        └── less // less 文件目录
            └── index.less // 示例文件

```

### 其他说明

- 代码检测使用eslint工具，相关规则使用：https://github.com/czewail/zewail-eslint
- reducers与sagas的存放目录已做自动加载文件处理，reducer的状态键名为文件名，如果实二级目录，以下划线分隔，如src/reducers/main/menus.js文件，获取redux的state的键值为main_menus

