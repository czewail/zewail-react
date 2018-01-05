
// 你也可以在第一层路由加载主布局容器，然后在子路由加载菜单和内容路由

import MainContainer from '@/containers/Main'

/**
 * title  链接名称
 * path 路由地址
 * exact  路由渲染完全匹配
 * component  路由组件
 * routes 子路由
 */
const routes = [
  {
    title: '首页',
    path: '/',
    exact: true,
    component: MainContainer,
    // routes: 子路由 格式和本文件一致
  }
]

export default routes
