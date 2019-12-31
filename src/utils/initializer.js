import Vue from 'vue'
import store from '@/store/'
import {
  ACCESS_TOKEN,
  THEME_COLOR,
  SHOW_SETTINGS,
  TAGS_VIEW,
  FIXED_HEADER,
  SIDEBAR_LOGO,
  LAYOUT_TYPE
} from '@/config/variableInit'

import { settings } from '@/config/defaultSetting'

export default function Initializer () {
  // console.log(`API_URL: ${process.env.BASE_URL}`)

  store.commit('CHANGE_SETTING', { key: 'theme', value: Vue.ls.get(THEME_COLOR, settings.theme) })
  store.commit('CHANGE_SETTING', { key: 'showSettings', value: Vue.ls.get(SHOW_SETTINGS, settings.showSettings) })
  store.commit('CHANGE_SETTING', { key: 'tagsView', value: Vue.ls.get(TAGS_VIEW, settings.tagsView) })
  store.commit('CHANGE_SETTING', { key: 'fixedHeader', value: Vue.ls.get(FIXED_HEADER, settings.fixedHeader) })
  store.commit('CHANGE_SETTING', { key: 'sidebarLogo', value: Vue.ls.get(SIDEBAR_LOGO, settings.sidebarLogo) })
  store.commit('CHANGE_SETTING', { key: 'layoutType', value: Vue.ls.get(LAYOUT_TYPE, settings.layoutType) })

  store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
}
