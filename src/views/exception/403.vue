<template>
  <div>
    <el-input v-model="inputVal"></el-input>
    <count-up
      :start="0"
      :end="1390"
      :decimals="2"
      :duration="5"
      :options="{ separator: ','}"
    ></count-up>
  </div>
</template>

<script>
import CountUp from '@/components/CountUp'
export default {
  components: { CountUp },
  data () {
    return {
      inputVal: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
