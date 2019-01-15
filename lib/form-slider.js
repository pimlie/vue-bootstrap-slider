import Slider from 'bootstrap-slider'
import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import throttle from 'lodash/throttle'
import props from './properties'
import watch from './watchers'

// @vue/component
export default {
  name: 'FormSlider',
  props,
  data() {
    return {
      slider: null,
      lastEvent: {}
    }
  },
  watch,
  mounted() {
    const props = {}
    for (const key in this.$props) {
      if (this.$props.hasOwnProperty(key)) {
        const propskey = key === 'rangeHighlights' ? key : snakeCase(key)
        props[propskey] = this.$props[key]
      }
    }
    props.enabled = !this.disabled

    this.slider = new Slider(this.$refs.input, props)
    this.bindEvents()
  },
  beforeDestroy() {
    if (this.slider) {
      this.slider.destroy()
      delete this.slider
    }
  },
  methods: {
    refresh: throttle(function () {
      if (this.slider) {
        this.slider.refresh({ useCurrentValue: true })
        this.bindEvents()
      }
    }, 10),
    bindEvents() {
      const events = ['slide', 'slide-start', 'slide-stop', 'change', 'slide-enabled', 'slide-disabled']
      events.forEach((event) => {
        // only bind the event if the event is bound to us
        if (event === 'change' || this.$listeners[event]) {
          this.slider.on(camelCase(event), (value) => {
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
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'd-inline-block'
    }, [
      h('input', {
        ref: 'input',
        attrs: {
          type: 'text'
        }
      })
    ])
  }
}
