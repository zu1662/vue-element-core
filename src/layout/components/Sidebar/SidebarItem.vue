<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
        <item :icon="onlyOneChild.meta.icon || (item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
      </el-menu-item>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :isNest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import Item from './Item'
export default {
  name: 'SidebarItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Item
  },
  data () {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    isExternal (path) {
      return /^(https?:|mailto:|tel:)/.test(path)
    },
    resolvePath (routePath) {
      if (this.isExternal(routePath)) {
        return routePath
      }
      if (this.isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
    hasOneShowingChild (children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })

      // 只有一个子路由，默认展示此子路由
      if (showingChildren.length === 1) {
        return true
      }

      // 不存在子路由，展示当前路由
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~@/styles/var.less';

  .svg-icon {
    margin-right: 1rem;
  }
  .nest-menu .el-menu-item {
    background-color: @sidebar-submenu-bg !important;
    &:hover {
      background-color: @sidebar-submenu-hover-bg !important;
    }
  }
</style>
