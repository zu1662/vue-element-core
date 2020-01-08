<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import ThemeChalk from '@/utils/themeChalk'
export default {
  name: 'app',
  computed: {
    nowTheme () {
      return this.$store.state.settings.theme
    }
  },
  mounted () {
    this.$log.capsule('env', process.env.NODE_ENV)
    const themeChalk = new ThemeChalk()
    this.$nextTick(_ => {
      themeChalk.setTheme(this.nowTheme)
    })
  }
}
</script>
<style>
#app {
    height: 100%;
    width: 100%;
  }
</style>
