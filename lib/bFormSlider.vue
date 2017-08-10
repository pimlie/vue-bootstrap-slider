<template>
  <div class="d-inline-block">
    <input ref="input" type="text" />
  </div>
</template>

<script>
import Slider from 'bootstrap-slider'
import { props, watch } from './mixins'

const snakeCase = (string) => {
  const find = /([A-Z])/g
  const convert = (matches) => {
    return '_' + matches.toLowerCase()
  }
  return string.replace(find, convert)
}

export default {
  mixins: [props, watch],

  data () {
    return {
      slider: null,
      lastEvent: {}
    }
  },

  mounted () {
    const props = {}
    for (var key in this.$props) {
      if (this.$props.hasOwnProperty(key)) {
        props[snakeCase(key)] = this.$props[key]
      }
    }
    props.enabled = !this.disabled

    this.slider = new Slider(this.$refs.input, props)

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
