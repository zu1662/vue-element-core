/*
 * @Author: zu1662
 * @LastEditor: zu1662
 * @Date: 2019-12-31 16:54:16
 * @LastEditTime: 2020-01-08 11:30:36
 * @Description: 自定义的一些插件，在这里引入
 */

import Vue from 'vue'

// directives
import '@/directives/waves'

// filters
import './filters'

// errorLog
import '@/plugins/errorLog'

// log plugin
import LogPlugin from '@/plugins/log'

// svg icons
import '@/icons'

// img lazyload
import VueLazyload from 'vue-lazyload'

// <row-transition> same as element-ui el-collspe-trasition
import RowTransition from '@/components/RowTransition'

Vue.use(VueLazyload)
Vue.use(LogPlugin)
Vue.component(RowTransition.name, RowTransition)
