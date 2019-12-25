<template>
  <el-container>
    <el-aside>
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <global-header></global-header>
      </el-header>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sidebar from './components/Sidebar'
import GlobalHeader from './components/GlobalHeader'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    GlobalHeader
  },
  data () {
    return {
      fixedHeader: false,
      showTagsView: false
    }
  }
}
</script>
<style lang="less" scoped>
  .header {
    box-shadow: @shadow-down;
  }
</style>
