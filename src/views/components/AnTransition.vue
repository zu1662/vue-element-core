<template>
  <div class="an-transition-body">
    <div class="intro">
      <h2>使用 <el-link type="primary" href="https://daneden.github.io/animate.css/" target="_blank">animate.css</el-link> 设置 过渡效果。</h2>
      <p>name: 动画名称</p>
      <p>enterActiveClass: 进入动画</p>
      <p>leaveActiveClass: 离开名称</p>
    </div>
    <el-divider></el-divider>
    <an-transition
      :enterActiveClass="enterActiveClass"
      :leaveActiveClass="leaveActiveClass"
    >
      <div class="article" v-if="isShow">
        <p>时针走到十二点，金属撞击的钟声在空荡的房间里回响，犹如山谷里的一声噙鸣，惊醒了整个冬天。</p>
        <p>房间不大，堂屋里陈列着旧式家具，漆面斑驳的长椅上拜了一尊菩萨，许久未受香烛的熏染，香炉里的烟灰落了实，硬得像是一块难啃的骨头。 </p>
        <p>妻子生前总向菩萨忏悔，说自己有罪。陈玉衡问妻子，你哪里有罪？她说，我上辈子恶业深重，贪嗔痴昧，只有祈求菩萨宽恕，才能如是忏悔。</p>
        <p>陈玉衡笑了，他说，若是谁心里没有罪了，那活着还有什么意思。 妻子白了他一眼，双手合十，嘴里呢喃道，切勿妄言，罪过罪过。 </p>
        <p>陈玉衡是个医生，无神论者，医院里的悲欢离合写尽了人间故事，看多了生离死别，在人生这件事上看得格外透彻，你说自己有罪那就是有罪，你说自己无罪，那便是无罪了，自己给圣人的定义便是：心中不存业障，人生就是羽升了。</p>
      </div>
    </an-transition>
    <el-form>
      <el-form-item label="进入动画">
        <el-input v-model="enterActiveClass"></el-input>
      </el-form-item>
      <el-form-item label="离开动画">
        <el-input v-model="leaveActiveClass"></el-input>
      </el-form-item>
      <el-form-item label="动画展示">
        <el-button @click="isShow = !isShow">点我</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import AnTransition from '@/components/AnTransition'
export default {
  name: 'TransitionDemo',
  components: {
    AnTransition
  },
  data () {
    return {
      isShow: true,
      enterActiveClass: 'bounceInDown',
      leaveActiveClass: 'bounceOut'
    }
  }
}
</script>
<style lang="less" scoped>
  .intro {
    margin: 2rem 0;
    font-size: 1.5rem;
    line-height: 2.4rem;
    h2 {
      margin-bottom: 1rem;
      .el-link {
        font-size: 2rem;
      }
    }
  }
  .article {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    line-height: 2rem;
  }
</style>
