<template>
  <el-container>
    <el-aside>
      <sidebar></sidebar>
    </el-aside>
  </el-container>
</template>
<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'Layout',
  components: {
    Sidebar
  },
  data () {
    return {
      fixedHeader: false,
      showTagsView: false
    }
  }
}
</script>
