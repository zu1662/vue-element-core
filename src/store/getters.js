const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  nickname: state => state.user.name,
  permissions: state => state.user.permissions,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
  lang: state => state.i18n.lang
}

export default getters
