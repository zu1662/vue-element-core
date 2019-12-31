<template>
  <div>
    <el-switch
      v-model="value"
    >
    </el-switch>
    <el-button @click="clickaa('222')">aaa</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true
    }
  },
  methods: {
    clickaa (val) {
      val.forEach(item => {})
    }
  }
}
</script>

<style scoped>

</style>
