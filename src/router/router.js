/* Layout */
import Layout from '@/layout'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '@/views/user/Register')
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]

/**
 * 动态路由
 * @type { *[] }
 */
export const asyncRouterMap = [

  {
    path: '/',
    redirect: '/dashboard/index',
    component: Layout,
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/index',
        component: Layout,
        meta: { title: '主页', keepAlive: true, permissionCode: 'dashboard' },
        children: [
          {
            path: '/dashboard/index',
            name: 'index',
            component: () => import('@/views/dashboard/index'),
            meta: { title: '工作台', keepAlive: true, icon: 'dashboard', permissionCode: 'dashboard:index' }
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: Layout,
        redirect: '/exception/403',
        meta: { title: '异常页', icon: 'dashboard', permissionCode: 'exception' },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403', permissionCode: 'exception:403' }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404', permissionCode: 'exception:404' }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500', permissionCode: 'exception:500' }
          }
        ]
      }
    ]
  },

  {
    path: '*', redirect: '/404', hidden: true
  }

]
