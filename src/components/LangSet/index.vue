<template>
  <div class="lang-set">
    <el-dropdown trigger="click" @command="handleLangCommand">
      <span class="el-dropdown-link">
        <svg-icon style="cursor: pointer;" name="language" class="lang-svg"></svg-icon>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh">{{$t('lang.zh')}}</el-dropdown-item>
        <el-dropdown-item command="en">{{$t('lang.en')}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'LangSet',
  methods: {
    handleLangCommand (command) {
      this.$store.dispatch('SetLang', command)
      this.$emit('setLang', command)
    }
  }
}
</script>
