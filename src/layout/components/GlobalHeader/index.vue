<template>
  <transition name="showHeader">
    <div class="global-header">
      <svg-icon :name="collapsed ? 'menu-fold': 'menu-unfold'" class="menu-trigger"></svg-icon>
      <user-menu></user-menu>
    </div>
  </transition>
</template>
<script>
import UserMenu from './UserMenu'
export default {
  name: 'GlobalHeader',
  components: {
    UserMenu
  },
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
  .global-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: @header-height;
    line-height: @header-height;

    .menu-trigger {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }
</style>
