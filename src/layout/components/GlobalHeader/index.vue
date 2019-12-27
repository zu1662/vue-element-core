<template>
  <transition name="showHeader">
    <div class="global-header" v-if="layoutMode === 'sidebar'">
      <div class="header-Hamburger" @click="handleSidebarToggle">
        <svg-icon :name="collapsed ? 'menu-unfold': 'menu-fold'" class="menu-trigger"></svg-icon>
      </div>
      <user-menu></user-menu>
    </div>
    <div class="global-header topmenu-header" v-else>
      <div class="menu-left">
        <sidebar :layoutMode="layoutMode"></sidebar>
      </div>
      <user-menu></user-menu>
    </div>
  </transition>
</template>
<script>
import UserMenu from './UserMenu'
import Sidebar from '../Sidebar/index'
export default {
  name: 'GlobalHeader',
  components: {
    UserMenu,
    Sidebar
  },
  props: {
    layoutMode: {
      type: String,
      default: 'sidebar'
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleSidebarToggle () {
      this.$emit('sidebarToggle')
    }
  }
}
</script>
<style lang="less" scoped>
  .showHeader-enter-active {
    transition: all 0.25s ease;
  }
  .showHeader-leave-active {
    transition: all 0.5s ease;
  }
  .showHeader-enter, .showHeader-leave-to {
    opacity: 0;
  }
  .global-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: @header-height;
    line-height: @header-height;
    &.topmenu-header {
      background-color: @sidebar-bg;
      color: #fff;
      /deep/ .el-dropdown {
        color: #fff;
      }
    }
    .header-Hamburger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: @header-height;
      height: 100%;
      cursor: pointer;
      .menu-trigger {
        width: 2rem;
        height: 2rem;
      }
    }
  }
</style>
