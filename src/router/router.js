/* Layout */
import Layout from '@/layout'
import PageView from '@/layout/PageView'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/components/Redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登陆' },
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '@/views/user/Register')
  },

  {
    path: '/404',
    name: '404',
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
    name: 'home',
    redirect: '/dashboard/index',
    component: Layout,
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/index',
        component: PageView,
        meta: { title: '主页', keepAlive: true, permissionCode: 'dashboard' },
        children: [
          {
            path: '/dashboard/index',
            name: 'index',
            component: () => import('@/views/dashboard/index'),
            meta: { title: '工作台', keepAlive: true, icon: 'dashboard', permissionCode: 'dashboard:index', affix: true }
          }
        ]
      },

      // components
      {
        path: '/components',
        name: 'components',
        component: PageView,
        redirect: '/components/watermark',
        meta: { title: '组件', icon: 'dashboard', permissionCode: 'components' },
        children: [
          {
            path: '/components/watermark',
            name: 'watermark',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/components/WaterMark.vue'),
            meta: { title: '水印', permissionCode: 'components:watermark' }
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: PageView,
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
