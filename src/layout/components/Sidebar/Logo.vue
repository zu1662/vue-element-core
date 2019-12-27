<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link class="sidebar-logo-link" tag="div" :to="{name:'dashboard'}">
        <svg-icon name="vue"></svg-icon>
        <h1 v-if="!collapse">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Logo',
  props: {
    collapse: {
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
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height:@header-height;
  line-height: @header-height;
  background: @sidebar-bg;
  text-align: center;
  overflow: hidden;

  .sidebar-logo-link {
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    color: #fff;

    .svg-icon {
      margin-right: 1.5rem;
      width: 3.5rem;
      height: 3.5rem;
    }
    h1 {
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
      vertical-align: middle;
    }
  }
}
</style>
