<template>
  <div class="slider-bar" :class="{'topmenu-bar': layoutMode === 'topmenu'}">
    <logo class="bar-logo" :collapse="false"/>
    <el-menu
      class="el-menu"
      :background-color="'#304156'"
      :text-color="'#fff'"
      active-text-color="#409EFF"
      :mode="layoutMode === 'sidebar' ? 'vertical' : 'horizontal'"
    >
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
    ])
  },
  props: {
    layoutMode: {
      type: String,
      default: 'sidebar'
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

  /deep/ .svg-icon {
      margin-right: 1rem;
    }
  /deep/ .nest-menu .el-menu-item {
    background-color: @sidebar-submenu-bg !important;
    &:hover {
      background-color: @sidebar-submenu-hover-bg !important;
    }
  }
  /deep/ .el-menu--horizontal {
    display: flex;
    .el-submenu__title,
    .el-menu-item{
      height: @header-height;
      line-height: @header-height;
    }
  }
</style>
