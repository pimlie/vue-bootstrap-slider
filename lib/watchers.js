import props from './properties'

const ignoreProps = [
  'triggerSlideEvent',
  'triggerChangeEvent',
  'debounce'
]

const watchers = {
  disabled(value) {
    if (value) {
      this.slider.disable()
    } else {
      this.slider.enable()
    }
  },
  value(value) {
    this.slider.setValue(value, this.triggerSlideEvent, this.triggerChangeEvent)
  }
}

Object.keys(props).forEach((prop) => {
  if (!watchers[prop] && !ignoreProps.includes(prop)) {
    watchers[prop] = function (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute(prop, value)
        this.refresh()
      }
    }
  }
})

export default watchers
