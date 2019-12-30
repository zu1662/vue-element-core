<template>
  <div :class="{'has-logo': showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.sidebarBg"
        :text-color="variables.sideText"
        :unique-opened="false"
        :active-text-color="variables.sideActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/var.less'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'addRouters',
      'sidebar'
    ]),
    ...mapState({
      showLogo: state => state.settings.sidebarLogo
    }),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables () {
      return variables
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  created () {
    this.permission_routes = this.addRouters.find(item => item.path === '/').children
  }
}
</script>
