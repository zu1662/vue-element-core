<template>
  <div class="setting-body">
    <div class="drawer-item layout-type">
      <el-tooltip content="侧边栏导航" placement="top">
        <div class="layout" :class="{'active': layoutMode === 'sidebar'}" @click="handleSetLayout('sidebar')">
          <div class="layout-demo sidebar">
            <div></div>
            <div></div>
          </div>
          <i class="el-icon-check"></i>
        </div>
      </el-tooltip>
      <el-tooltip content="顶部栏导航" placement="top">
        <div class="layout" :class="{'active': layoutMode === 'topmenu'}" @click="handleSetLayout('topmenu')">
          <div class="layout-demo topmenu">
            <div></div>
            <div></div>
          </div>
          <i class="el-icon-check"></i>
        </div>
      </el-tooltip>
    </div>
    <div class="drawer-item">
      <span>Theme Color</span>
      <el-color-picker></el-color-picker>
    </div>

    <div class="drawer-item">
      <span>Open Tags-View</span>
      <el-switch class="drawer-switch" />
    </div>

    <div class="drawer-item">
      <span>Fixed Header</span>
      <el-switch class="drawer-switch" />
    </div>

    <div class="drawer-item">
      <span>Sidebar Type</span>
      <el-switch class="drawer-switch" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Setting',
  computed: {
    ...mapState({
      layoutMode: state => state.app.layout || 'sidebar',
      primaryColor: state => state.app.color,
      fixedHeader: state => state.app.fixedHeader,
      fixSiderbar: state => state.app.fixSiderbar,
      autoHideHeader: state => state.app.autoHideHeader,
      sidebarOpened: state => state.app.sidebar,
      multiTab: state => state.app.multiTab
    })
  },
  data () {
    return {
      drawerFlag: true
    }
  },
  methods: {
    isTopMenu () {
      return this.layoutMode === 'topmenu'
    },
    isSideMenu () {
      return !this.isTopMenu()
    },
    showDrawer () {
      this.drawerFlag = true
    },
    onClose () {
      this.drawerFlag = false
    },
    toggle () {
      this.drawerFlag = !this.drawerFlag
    },
    handleSetLayout (layout) {
      this.$store.dispatch('ToggleLayoutMode', layout)
    },
    onMultiTab (checked) {
      this.$store.dispatch('ToggleMultiTab', checked)
    },
    handleMenuTheme (theme) {
      this.$store.dispatch('ToggleTheme', theme)
    }
  }
}
</script>
<style lang="less" scoped>
  .setting-body {
    padding: 1rem;
    width: 30rem;
    .drawer-item {
      margin: 1rem 0;
      &.layout-type {
        display: flex;
        .layout {
          position: relative;
          width: 5rem;
          height: 4rem;
          margin-right: 3rem;
          cursor: pointer;
          .el-icon-check {
            display: none;
            position: absolute;
            top: 10%;
            left: 40%;
            color: @primary-color;
            font-size: 2rem;
            text-align: center;
            line-height: 4rem;
          }
          &.active .el-icon-check {
            display: block;
          }
          .layout-demo {
            display: flex;
            width: 100%;
            height: 100%;
            border-radius: 0.2rem;
            box-shadow: @shadow-card;
            overflow: hidden;
            &.sidebar {
              > div:first-child {
                width: 1rem;
                height: 100%;
                background-color: @sidebar-submenu-bg;
              }
              > div:last-child {
                flex: 1;
                height: 100%;
                background-color: @background-color;
              }
            }
            &.topmenu {
              flex-direction: column;
              > div:first-child {
                background-color: @sidebar-submenu-bg;
                height: 1rem;
                width: 100%;
              }
              > div:last-child {
                flex: 1;
                width: 100%;
                background-color: @background-color;
              }
            }
          }
        }
      }
    }
  }
</style>
