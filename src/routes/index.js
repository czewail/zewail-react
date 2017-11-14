

import projectGroupRoutes from './Personnel'

/**
 * title  链接名称
 * iconName 链接图标样式名称
 * path 路由地址
 * exact  路由渲染完全匹配
 * linkExact  链接高亮完全匹配
 * component  路由组件
 * @type {[*]}
 */
const routes = [
  {
    title: '首页',
    iconName: 'fa fa-home',
    path: '/',
    exact: true,
    linkExact: true,
    component: PortalContainer
  },
  {
    title: '',
    iconName: 'fa fa-users',
    path: '/app/personnel',
    component: PersonnelContainer,
    routes: personnelRoutes
  }
]

export default routes
