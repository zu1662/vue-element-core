<script>
import 'animate.css'
export default {
  name: 'AnTransition',

  functional: true,

  render (h, context) {
    const { props = '' } = context
    const data = {
      attrs: {
        name: props.name,
        'enter-active-class': 'animated ' + props.enterActiveClass,
        'leave-active-class': 'animated ' + props.leaveActiveClass
      }
    }
    return h('transition', data, context.children)
  }
}

</script>
