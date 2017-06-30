import bSlider from './slider.vue'

const VuePlugin = {
  install: function (Vue) {
    if (Vue._vue_bootstrap_slider_installed) {
      return
    }

    Vue._vue_bootstrap_slider_installed = true

    Vue.component('bSlider', bSlider)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePlugin)
}

export default VuePlugin
