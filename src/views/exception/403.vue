<template>
  <div>
     <water-mark
      class="text-container"
      style="padding:30px;line-height: 30px;"
      spacing="10px"
      content="huazite"
    >
      <p class="text">
        通过<b>作用域插槽</b>的坐标属性(coord)可以对水印行列进行定制
      </p>
      <p class="text">
        通过<b>作用域插槽</b>的坐标属性(coord)可以对水印行列进行定制
      </p>
      <p class="text">
        通过<b>作用域插槽</b>的坐标属性(coord)可以对水印行列进行定制
      </p>
    </water-mark>
    <water-mark
      class="text-container"
      style="padding:30px;line-height: 30px;"
      spacing="10px"
      opacity="0.5"
    >
      <p class="text">
        通过<b>作用域插槽</b>的坐标属性(coord)可以对水印行列进行定制
      </p>
      <p class="text">
        通过<b>作用域插槽</b>的坐标属性(coord)可以对水印行列进行定制
      </p>
      <p class="text">
        通过<b>作用域插槽</b>的坐标属性(coord)可以对水印行列进行定制
      </p>
      <div slot="watermark" slot-scope="props">
        <span v-if="props.coord.row % 2 "> 奇数行</span>
        <span v-else>偶数行</span>
      </div>
    </water-mark>

    <el-button @click="handleClick">qaa</el-button>
  </div>
</template>

<script>
import WaterMark from '@/components/WaterMark'
export default {
  data () {
    return {
      value: true
    }
  },
  components: {
    WaterMark
  },
  methods: {
    handleClick () {
      const a = 'aa'
      a.push(111)
    }
  }
}
</script>

<style scoped>

</style>
