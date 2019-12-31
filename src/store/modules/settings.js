import Vue from 'vue'
import {
  THEME_COLOR,
  SHOW_SETTINGS,
  TAGS_VIEW,
  FIXED_HEADER,
  SIDEBAR_LOGO,
  LAYOUT_TYPE
} from '@/config/variableInit'

const mapping = {
  theme: THEME_COLOR,
  showSettings: SHOW_SETTINGS,
  tagsView: TAGS_VIEW,
  fixedHeader: FIXED_HEADER,
  sidebarLogo: SIDEBAR_LOGO,
  layoutType: LAYOUT_TYPE
}

const settings = {
  state: {
    theme: '#409EFF',
    showSettings: true,
    tagsView: true,
    fixedHeader: true,
    sidebarLogo: true,
    layoutType: 'sidebar'
  },
  mutations: {
    CHANGE_SETTING: (state, { key, value }) => {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = value
        Vue.ls.set(mapping[key], value)
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
