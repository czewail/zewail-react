# React 开发环境

## 主要包含

- Webpack 3
- Redux
- Redux-Saga
- React-Router 4
- Less


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
    ├── components // 组件库目录
    ├── constants // 常用其他文件目录
    │   └── RouteWithSubRoutes.js // 子路由包装方法
    ├── containers // 页面容器目录
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
