<template>
  <div class="sidebar-logo-container" :class="{'collapsed':collapsed}">
    <router-link class="sidebar-logo-link" tag="div" :to="{name:'dashboard'}">
      <div class="icon-box">
        <svg-icon name="vue"></svg-icon>
      </div>
      <transition name="fade">
        <span v-if="!collapsed" class="title">{{ title }}</span>
      </transition>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Logo',
  props: {
    collapsed: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: 'Vue element core'
    }
  }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height:@header-height;
  line-height: @header-height;
  background: @sidebar-bg;
  text-align: center;

  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    line-height: @header-height;
    text-align: center;
    cursor: pointer;
    color: #fff;
    overflow: hidden;

    .icon-box {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: @sidebar-collapse-width;;
      height: @header-height;
      .svg-icon {
        margin-right: 0;
        width: 3rem;
        height: 3rem;
      }
    }
    span {
      margin-right: 1rem;
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
      vertical-align: top;
    }
  }
  &.collapsed {
    padding: 0;
  }
}
</style>
