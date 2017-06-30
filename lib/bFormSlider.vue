<template>
  <div class="d-inline-block">
    <input ref="input" type="text" />
  </div>
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
    this.slider = new Slider(this.$refs.input, { ...this.$props, enabled: !this.disabled })

    const events = ['slide', 'slideStart', 'slideStop', 'change', 'slideEnabled', 'slideDisabled']
    events.forEach(event => {
      // only bind the event if the event is bound to us
      if (event === 'change' || this._events[event]) {
        this.slider.on(event, (value) => {
          if (this.debounce > 0) {
            const now = new Date().getTime()
            if (this.lastEvent[event] !== null && now <= this.lastEvent[event] + this.debounce) {
              return
            }

            this.lastEvent[event] = now
          }

          this.$emit(event, value)
          
          if (event === 'change') {
            this.$emit('input', value.newValue)
          }
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
