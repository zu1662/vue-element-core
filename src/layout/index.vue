<template>
  <section class="app-container">
    <div class="app-aside" :class="{'collapse': collapsed}" v-if="layoutMode === 'sidebar'">
      <sidebar :collapsed="collapsed" :layoutMode="layoutMode"></sidebar>
    </div>
    <div class="app-container">
      <div class="app-header" :class="{'topmenu-header': layoutMode === 'topmenu'}">
        <global-header :collapsed="collapsed" :layoutMode="layoutMode" @sidebarToggle="sidebarToggle"></global-header>
      </div>
      <div class="app-main">

      </div>
    </div>
    <right-panel>
      <setting/>
    </right-panel>
  </section>
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
      layoutMode: state => state.app.layout || 'sidebar',
      collapsed: state => state.app.collapsed
    })
  },
  data () {
    return {
      fixedHeader: false,
      showTagsView: false
    }
  },
  methods: {
    sidebarToggle () {
      this.$store.dispatch('setSidebarType', !this.collapsed)
    }
  }
}
</script>
<style lang="less" scoped>
  .app-container {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;

    .app-aside {
      flex-shrink: 0;
    }
    .app-header {
      flex: 1;
      height: @header-height;
      box-shadow: @shadow-down;
    }
  }
</style>
