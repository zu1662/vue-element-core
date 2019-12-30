const settings = {
  state: {
    theme: '',
    showSettings: true,
    tagsView: true,
    fixedHeader: true,
    sidebarLogo: true
  },
  mutations: {
    CHANGE_SETTING: (state, { key, value }) => {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = value
      }
    }
  },
  actions: {
    changeSetting ({ commit }, data) {
      commit('CHANGE_SETTING', data)
    }
  }
}

export default settings
