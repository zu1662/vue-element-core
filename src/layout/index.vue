<template>
  <el-container>
    <el-aside width="256" v-if="layoutMode === 'sidebar'">
      <sidebar :layoutMode="layoutMode"></sidebar>
    </el-aside>
    <el-container>
      <el-header class="header" :class="{'topmenu-header': layoutMode === 'topmenu'}">
        <global-header :layoutMode="layoutMode"></global-header>
      </el-header>
      <el-main></el-main>
    </el-container>
    <right-panel>
      <setting/>
    </right-panel>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'

import Sidebar from './components/Sidebar'
import GlobalHeader from './components/GlobalHeader'
import Setting from './components/Settings'
import RightPanel from '@/components/RightPanel'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    GlobalHeader,
    Setting,
    RightPanel
  },
  computed: {
    ...mapState({
      layoutMode: state => state.app.layout || 'sidebar'
    })
  },
  data () {
    return {
      fixedHeader: false,
      showTagsView: false
    }
  }
}
</script>
<style lang="less" scoped>
  .header {
    box-shadow: @shadow-down;
    &.topmenu-header {
      height: @header-height !important;
      background-color: @sidebar-bg;
    }
  }
</style>
