<template>
  <div>
    <water-mark content="huazite" spacing="6px" rotate="-30" opacity="0.5">
      <div style="line-height: 30px">
        <p>
          每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。
        </p> <p class="text">
          希望你可以记住我，记住我这样活过，这样在你身边待过。
        </p> <p class="text">
          少年时我们追求激情，成熟后却迷恋平庸。在我们寻找、伤害、背离之后，还能一如既往地相信爱情，这是一种勇气。
        </p>
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
