import Mock from 'mockjs'
import { builder } from '../util'

const info = (options) => {
  console.log('options', options)
  const userInfo = {
    id: '4291d7da9005377ec9aec4a71ea837f',
    name: 'huazi',
    username: 'admin',
    password: '',
    avatar: '/avatar2.jpg',
    status: 1,
    telephone: '',
    lastLoginIp: '27.154.74.117',
    lastLoginTime: 1534837621348,
    creatorId: 'admin',
    createTime: 1497160610259,
    merchantCode: 'TLif2btpzg079h15bk',
    deleted: 0,
    roles: ['operator', 'admin'],
    permissions: [
      {
        id: 1,
        name: 'dashboard',
        code: 'dashboard',
        status: 1,
        type: 0,
        children: [
          {
            id: 11,
            name: 'dashboard index',
            code: 'dashboard:index',
            status: 1,
            type: 1,
            children: [
              {
                id: 111,
                name: 'list',
                code: 'dashboard:index:list',
                status: 1, // has permission
                type: 2
              },
              {
                id: 112,
                name: 'add',
                code: 'dashboard:index:add',
                status: 0, // no permission
                type: 2
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'exception',
        code: 'exception',
        status: 1,
        type: 0,
        children: [
          {
            id: 21,
            name: 'exception 403',
            code: 'exception:403',
            status: 1,
            type: 1
          },
          {
            id: 22,
            name: 'exception 404',
            code: 'exception:404',
            status: 1,
            type: 1
          },
          {
            id: 23,
            name: 'exception 500',
            code: 'exception:500',
            status: 1,
            type: 1
          }
        ]
      }
    ]
  }

  return builder(userInfo)
}

Mock.mock(/\/api\/user\/info/, 'get', info)
