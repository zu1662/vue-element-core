<template>
  <div class="page-view">
    <router-view />
    <div class="footer">
      <div class="links">
        <a href="_self">帮助</a>
        <a href="_self">隐私</a>
        <a href="_self">条款</a>
      </div>
      <div class="copyright">
        Copyright &copy; 2018 白鹭学园技术组出品
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageView'
}
</script>

<style scoped>

</style>
