/*
 * @Author: zu1662
 * @LastEditor: zu1662
 * @Date: 2019-12-31 16:54:16
 * @LastEditTime: 2019-12-31 16:58:35
 * @Description: 自定义的一些插件，在这里引入
 */

import Vue from 'vue'

// errorLog
import '@/utils/errorLog'

// <row-transition> same as element-ui el-collspe-trasition
import RowTransition from '@/components/RowTransition'
Vue.component(RowTransition.name, RowTransition)
