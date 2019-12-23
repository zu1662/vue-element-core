<template>
  <el-container class="login-container">
    <div class="login-header">
      <div class="logo">
        <svg-icon name="logo" class="" style="margin-right:10px"></svg-icon>
      </div>
      <div class="title">可复用的Vue基础 admin 框架</div>
    </div>
    <div class="login-panel">

    </div>
  </el-container>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style lang="less" scoped>
  @import '~@/styles/var.less';
  @max-width: 100%;
  @min-width: 90rem;

  .login-container {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-image: linear-gradient(-45deg,#409EFF 10%,#004eff);
    box-shadow: 0 6px 8px 0 rgba(0,0,0,.1);
  }
  .login-header {
    position: absolute;
    top: 0;
    max-width: @max-width;
    min-width: @min-width;
    height: 6rem;
  }
  .login-panel {
    z-index: 1000;
    max-width: @max-width;
    min-width: @min-width;
    height: 70%;
    border-radius: 10px;
    box-shadow: @shadow-card;
    background-color: #fff;
  }
</style>
