// vue-ls setting
export const storageOptions = {
  namespace: 'core__', // 前缀
  name: 'ls', //  Vue.[ls] or this.[$ls]
  storage: 'local' // storage name session, local, memory
}

export const settings = {
  theme: '#409EFF', // 主题色
  showSettings: true, // 是否展示设置
  tagsView: true, // 多页签模式
  fixedHeader: true, // 固定头
  sidebarLogo: true, // 展示logo
  layoutType: 'sidebar' // 布局格式
}

// errorLog setting
export const errorLog = ['production', 'development']
