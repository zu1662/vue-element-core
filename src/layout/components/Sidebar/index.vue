<template>
  <div class="slider-bar">
    <div>{{variables['sidebar-menu-bg']}}</div>
    <logo :collapse="false"/>
    <el-menu
      class="el-menu-vertical-demo"
      :background-color="variables['sidebar-menu-bg']"
      :text-color="'#fff'"
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
import variables from '@/styles/var.less'

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
    variables () {
      return variables
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
