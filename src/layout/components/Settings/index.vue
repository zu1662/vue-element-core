<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">Page style setting</h3>
      <div class="drawer-item layout-type">
        <el-tooltip content="侧边栏导航" placement="top">
          <div class="layout" :class="{'active': layoutType === 'sidebar'}" @click="handleSetLayout('sidebar')">
            <div class="layout-demo sidebar">
              <div></div>
              <div></div>
            </div>
            <i class="el-icon-check"></i>
          </div>
        </el-tooltip>
        <el-tooltip content="顶部栏导航" placement="top">
          <div class="layout" :class="{'active': layoutType === 'topmenu'}" @click="handleSetLayout('topmenu')">
            <div class="layout-demo topmenu">
              <div></div>
              <div></div>
            </div>
            <i class="el-icon-check"></i>
          </div>
        </el-tooltip>
      </div>
      <div class="drawer-item">
        <span>Theme Color</span>
        <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange" />
      </div>

      <div class="drawer-item">
        <span>Open Tags-View</span>
        <el-switch v-model="tagsView" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>Fixed Header</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>Sidebar Logo</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch" />
      </div>

    </div>
  </div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'

export default {
  components: { ThemePicker },
  data () {
    return {}
  },
  computed: {
    layoutType () {
      return this.$store.state.settings.layoutType
    },
    fixedHeader: {
      get () {
        return this.$store.state.settings.fixedHeader
      },
      set (val) {
        this.$store.dispatch('changeSetting', {
          key: 'fixedHeader',
          value: val
        })
      }
    },
    tagsView: {
      get () {
        return this.$store.state.settings.tagsView
      },
      set (val) {
        this.$store.dispatch('changeSetting', {
          key: 'tagsView',
          value: val
        })
      }
    },
    sidebarLogo: {
      get () {
        return this.$store.state.settings.sidebarLogo
      },
      set (val) {
        this.$store.dispatch('changeSetting', {
          key: 'sidebarLogo',
          value: val
        })
      }
    }
  },
  methods: {
    handleSetLayout (layout) {
      if (layout === 'topmenu') {
        this.$store.dispatch('openSideBar', false)
      }
      this.$store.dispatch('changeSetting', {
        key: 'layoutType',
        value: layout
      })
    },
    themeChange (val) {
      this.$store.dispatch('changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>

<style lang="less" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }

  .drawer-item.layout-type {
    display: flex;
    .layout {
      position: relative;
      width: 5rem;
      height: 4rem;
      margin-right: 3rem;
      cursor: pointer;
      .el-icon-check {
        display: none;
        position: absolute;
        top: 10%;
        left: 40%;
        color: @primary-color;
        font-size: 2rem;
        text-align: center;
        line-height: 4rem;
      }
      &.active .el-icon-check {
        display: block;
      }
      .layout-demo {
        display: flex;
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
        box-shadow: @shadow-card;
        overflow: hidden;
        &.sidebar {
          > div:first-child {
            width: 1rem;
            height: 100%;
            background-color: @sidebar-submenu-bg;
          }
          > div:last-child {
            flex: 1;
            height: 100%;
            background-color: @background-color;
          }
        }
        &.topmenu {
          flex-direction: column;
          > div:first-child {
            background-color: @sidebar-submenu-bg;
            height: 1rem;
            width: 100%;
          }
          > div:last-child {
            flex: 1;
            width: 100%;
            background-color: @background-color;
          }
        }
      }
    }
  }
}
</style>
