<template>
  <div class="navbar" :class="{'navbar-topmenu': !sidebarType}">
    <div class="left-menu">
      <template v-if="sidebarType">
        <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
        <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
      </template>
      <sidebar v-else class="sidebar-topmenu" :sidebarType="sidebarType"/>
    </div>

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <el-tooltip class="item" effect="dark" content="错误日志" placement="bottom">
          <error-log class="errLog-container right-menu-item hover-effect" />
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
          <screenfull id="screenfull" class="right-menu-item hover-effect" />
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="锁屏" placement="bottom">
          <set-locker class="right-menu-item hover-effect"/>
        </el-tooltip>
      </template>
      <user-menu></user-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SetLocker from '@/components/Locker/SetLocker.vue'
import UserMenu from '@/components/UserMenu/index'
import Sidebar from './Sidebar'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SetLocker,
    UserMenu,
    Sidebar
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  props: {
    sidebarType: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('toggleSideBar')
    },
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: @header-height;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  &.navbar-topmenu {
    background-color: @sidebar-bg;
    .right-menu {
      color: #fff;
    }
  }

  .left-menu {
    flex: 1;
    .hamburger-container {
      line-height:  @header-height;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }
  }
  .right-menu {
    display: flex;
    height: 100%;
    line-height:  @header-height;
    color: @subsidiary-color;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
