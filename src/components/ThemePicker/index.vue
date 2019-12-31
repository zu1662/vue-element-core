<template>
  <el-color-picker
    v-model="theme"
    @change="handleChange"
    :predefine="['#1890ff', '#67C23A','#E6A23C','#11a983', '#13c2c2', '#6959CD', '#f5222d', ]"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
  />
</template>

<script>
import ThemeChalk from '@/utils/themeChalk'
export default {
  data () {
    return {
      theme: '',
      themeChalk: undefined
    }
  },
  computed: {
    defaultTheme () {
      return this.$store.state.settings.theme
    }
  },
  created () {
    this.theme = this.defaultTheme
  },
  mounted () {
    this.themeChalk = new ThemeChalk(this.defaultTheme)
    this.themeChalk.setTheme(this.defaultTheme)
  },
  methods: {
    handleChange (val) {
      this.themeChalk.setTheme(val).then(res => {
        this.$emit('change', val)
      })
    }
  }
}
</script>

<style>
.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}

.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
