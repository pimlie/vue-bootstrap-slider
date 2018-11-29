import Slider from 'bootstrap-slider'
import snakeCase from 'lodash.snakecase'
import throttle from 'lodash.throttle'
import { props, watch } from './mixins'

// @vue/component
export default {
  name: 'FormSlider',
  mixins: [
    props,
    watch
  ],
  data() {
    return {
      slider: null,
      lastEvent: {}
    }
  },
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
      this.slider.refresh()
      this.bindEvents()
    }, 10),
    bindEvents() {
      const events = ['slide', 'slideStart', 'slideStop', 'change', 'slideEnabled', 'slideDisabled']
      events.forEach((event) => {
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
