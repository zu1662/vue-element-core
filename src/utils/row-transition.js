import { addClass, removeClass } from './domUtil'
import Vue from 'vue'

class Transition {
  beforeEnter (el) {
    addClass(el, 'row-transition')
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingLeft = el.style.paddingLeft
    el.dataset.oldPaddingRight = el.style.paddingRight

    el.style.width = '0'
    el.style.paddingLeft = 0
    el.style.paddingRight = 0
  }

  enter (el) {
    el.dataset.oldOverflow = el.style.overflow
    if (el.scrollWidth !== 0) {
      el.style.width = el.scrollWidth + 'px'
      el.style.paddingLeft = el.dataset.oldPaddingLeft
      el.style.paddingRight = el.dataset.oldPaddingRight
    } else {
      el.style.width = ''
      el.style.paddingLeft = el.dataset.oldPaddingLeft
      el.style.paddingRight = el.dataset.oldPaddingRight
    }

    el.style.overflow = 'hidden'
  }

  afterEnter (el) {
    // for safari: remove class then reset width is necessary
    removeClass(el, 'row-transition')
    el.style.width = ''
    el.style.overflow = el.dataset.oldOverflow
  }

  beforeLeave (el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingLeft = el.style.paddingLeft
    el.dataset.oldPaddingRight = el.style.paddingRight
    el.dataset.oldOverflow = el.style.overflow

    el.style.width = el.scrollWidth + 'px'
    el.style.overflow = 'hidden'
  }

  leave (el) {
    if (el.scrollWidth !== 0) {
      // for safari: add class after set width, or it will jump to zero width suddenly, weired
      addClass(el, 'row-transition')
      el.style.width = 0
      el.style.paddingLeft = 0
      el.style.paddingRight = 0
    }
  }

  afterLeave (el) {
    removeClass(el, 'row-transition')
    el.style.width = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingLeft = el.dataset.oldPaddingLeft
    el.style.paddingRight = el.dataset.oldPaddingRight
  }
}

const RowTransition = {
  name: 'RowTransition',
  functional: true,
  render (h, { children }) {
    const data = {
      on: new Transition()
    }

    return h('transition', data, children)
  }
}

Vue.component(RowTransition.name, RowTransition)