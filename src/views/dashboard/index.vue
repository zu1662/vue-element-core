<template>
  <div class="dashboard" :style="{backgroundImage: bgImg}">
  </div>
</template>
<script>
import BGImg from '@/assets/bg.png'
export default {
  name: 'HomeIndex',
  data () {
    return {
      bgImg: 'url(' + BGImg + ')'
    }
  }
}
</script>
<style lang="less" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
