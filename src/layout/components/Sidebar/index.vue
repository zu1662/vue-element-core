<template>
  <div class="slider-bar" :class="{'topmenu-bar': layoutMode === 'topmenu', 'collapse': collapsed}">
    <el-menu
      class="el-menu"
      :default-active="activeMenu"
      :background-color="'#304156'"
      :text-color="'#fff'"
      active-text-color="#409EFF"
      :collapse="collapsed"
      :collapse-transition="false"
      :mode="layoutMode === 'sidebar' ? 'vertical' : 'horizontal'"
    >
      <logo class="bar-logo" :collapsed="collapsed"/>
      <sidebar-item
        v-for="route in permissionRoutes"
        :key="route.path"
        :item="route"
        :basePath="route.path"
      />
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import Logo from './Logo.vue'
import SidebarItem from './SidebarItem'
export default {
  name: 'SideBar',
  components: {
    Logo,
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'routers'
    ]),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
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
  data () {
    return {
      permissionRoutes: []
    }
  },
  created () {
    this.permissionRoutes = this.routers.find(item => item.path === '/').children
  }
}
</script>
<style lang="less" scoped>
  .slider-bar {
    height: 100%;
    &.topmenu-bar {
      display: flex;
      .bar-logo {
        font-size: 1.4rem;
        font-weight: normal;
        background-color: @sidebar-bg;
      }
    }
    .bar-logo {
      font-weight: 600;
      font-size: 2rem;
      background-color: @sidebar-submenu-bg;
    }
  }

  /deep/ .el-menu {
    &.el-menu--horizontal {
      display: flex;
      .el-submenu__title,
      .el-menu-item{
        height: @header-height;
        line-height: @header-height;
      }
    }

    &.el-menu--collapse {
      width: @sidebar-collapse-width;
      .el-submenu {
        & > .el-submenu__title {
          & > span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
          }
          & > i {
            visibility: hidden;
          }
        }
      }
    }

    .nest-menu .el-menu-item {
      background-color: @sidebar-submenu-bg !important;
      &:hover {
        background-color: @sidebar-submenu-hover-bg !important;
      }
    }
    .el-submenu__title,
    .el-menu-item {
      & > span {
        margin-left: 1rem;
      }
    }
  }
</style>
