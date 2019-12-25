<template>
  <div class="slider-bar">
    <logo :collapse="false"/>
    <el-menu
      class="el-menu-vertical-demo"
      :background-color="'#304156'"
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
