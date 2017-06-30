<template>
  <input type="text" />
</template>

<script>
import Slider from 'bootstrap-slider'
import { props, watch } from './mixins'

export default {
  mixins: [props, watch],

  data () {
    return {
      slider: null,
      lastEvent: {}
    }
  },

  mounted () {
    this.slider = new Slider(this.$el, { ...this.$props, enabled: !this.disabled })

    const events = ['slide', 'slideStart', 'slideStop', 'change', 'slideEnabled', 'slideDisabled']
    events.forEach(event => {
      // only bind the event if the event is bound to us
      if (this._events[event]) {
        this.slider.on(event, (value) => {
          if (this.debounce > 0) {
            const now = new Date().getTime()
            if (this.lastEvent[event] !== null && now <= this.lastEvent[event] + this.debounce) {
              return
            }

            this.lastEvent[event] = now
          }

          this.$emit(event, value)
        })
      }
    })
  },

  beforeDestroy () {
    if (this.slider) {
      this.slider.destroy()
      delete this.slider
    }
  }
}
</script>
