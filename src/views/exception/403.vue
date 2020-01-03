<template>
  <div>
    <el-button @click="isSHow = !isSHow">aa</el-button>
    <zu-transition
      enterActiveClass="bounceInDown"
      leaveActiveClass="bounceOut"
    >
      <p v-if="isSHow">
        时针走到十二点，金属撞击的钟声在空荡的房间里回响，犹如山谷里的一声噙鸣，惊醒了整个冬天。房间不大，堂屋里陈列着旧式家具，漆面斑驳的长椅上拜了一尊菩萨，许久未受香烛的熏染，香炉里的烟灰落了实，硬得像是一块难啃的骨头。

妻子生前总向菩萨忏悔，说自己有罪。陈玉衡问妻子，你哪里有罪？她说，我上辈子恶业深重，贪嗔痴昧，只有祈求菩萨宽恕，才能如是忏悔。陈玉衡笑了，他说，若是谁心里没有罪了，那活着还有什么意思。

妻子白了他一眼，双手合十，嘴里呢喃道，切勿妄言，罪过罪过。

陈玉衡是个医生，无神论者，医院里的悲欢离合写尽了人间故事，看多了生离死别，在人生这件事上看得格外透彻，你说自己有罪那就是有罪，你说自己无罪，那便是无罪了，自己给圣人的定义便是：心中不存业障，人生就是羽升了。
      </p>
    </zu-transition>
  </div>
</template>

<script>
import ZuTransition from '@/components/AnTransition'
export default {
  data () {
    return {
      isSHow: false
    }
  },
  components: {
    ZuTransition
  },
  methods: {
    handleClick () {
      const a = 'aa'
      a.push(111)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
