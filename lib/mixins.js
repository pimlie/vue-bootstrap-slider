export const props = {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    },
    step: {
      type: Number,
      default: 1
    },
    precision: {
      type: Number
    },
    orientation: {
      type: String,
      default: 'horizontal'
    },
    value: {
      type: [Number, Array],
      default: () => null
    },
    range: {
      type: Boolean,
      default: false
    },
    selection: {
      type: String,
      default: 'before'
    },
    tooltip: {
      type: String,
      default: 'show'
    },
    tooltipSplit: {
      type: Boolean,
      default: false
    },
    tooltipPosition: {
      type: String
    },
    handle: {
      type: String,
      default: 'round'
    },
    reversed: {
      type: Boolean,
      default: false
    },
    rtl: {
      type: String,
      default: 'auto'
    },
    formatter: {
      type: Function
    },
    naturalArrowKeys: {
      type: Boolean,
      default: false
    },
    ticks: {
      type: Array,
      default: () => []
    },
    ticksPositions: {
      type: Array,
      default: () => []
    },
    ticksLabels: {
      type: Array,
      default: () => []
    },
    ticksSnapBounds: {
      type: Number,
      default: 0
    },
    ticksTooltip: {
      type: Boolean,
      default: false
    },
    scale: {
      type: String,
      default: 'linear'
    },
    focus: {
      type: Boolean,
      default: false
    },
    labelledby: {
      type: [String, Array],
      default: () => null
    },
    rangeHighlights: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    triggerSlideEvent: {
      type: Boolean,
      default: false
    },
    triggerChangeEvent: {
      type: Boolean,
      default: false
    },
    debounce: {
      type: Number,
      default: 0
    }
  }
}

export const watch = {
  watch: {
    min (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('min', value)
        this.slider.refresh()
      }
    },
    max (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('max', value)
        this.slider.refresh()
      }
    },
    step (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('step', value)
        this.slider.refresh()
      }
    },
    precision (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('precision', value)
        this.slider.refresh()
      }
    },
    orientation (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('orientation', value)
        this.slider.refresh()
      }
    },
    range (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('range', value)
        this.slider.refresh()
      }
    },
    selection (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('selection', value)
        this.slider.refresh()
      }
    },
    tooltip (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('tooltip', value)
        this.slider.refresh()
      }
    },
    tooltipSplit (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('tooltipSplit', value)
        this.slider.refresh()
      }
    },
    tooltipPosition (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('tooltipPosition', value)
        this.slider.refresh()
      }
    },
    handle (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('handle', value)
        this.slider.refresh()
      }
    },
    reversed (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('reversed', value)
        this.slider.refresh()
      }
    },
    rtl (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('rtl', value)
        this.slider.refresh()
      }
    },
    formatter (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('formatter', value)
        this.slider.refresh()
      }
    },
    naturalArrowKeys (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('naturalArrowKeys', value)
        this.slider.refresh()
      }
    },
    ticks (value, oldValue) {
      if (this.slider) {
        this.slider.setAttribute('ticks', value)
        this.slider.refresh()
      }
    },
    ticksPositions (value, oldValue) {
      if (this.slider) {
        this.slider.setAttribute('ticksPositions', value)
        this.slider.refresh()
      }
    },
    ticksLabels (value, oldValue) {
      if (this.slider) {
        this.slider.setAttribute('ticksLabels', value)
        this.slider.refresh()
      }
    },
    ticksSnapBounds (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('ticksSnapBounds', value)
        this.slider.refresh()
      }
    },
    ticksTooltip (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('ticksTooltip', value)
        this.slider.refresh()
      }
    },
    scale (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('scale', value)
        this.slider.refresh()
      }
    },
    focus (value, oldValue) {
      if (this.slider && value !== oldValue) {
        this.slider.setAttribute('focus', value)
        this.slider.refresh()
      }
    },
    labelledby (value, oldValue) {
      if (this.slider) {
        this.slider.setAttribute('labelledby', value)
        this.slider.refresh()
      }
    },
    rangeHighlights (value, oldValue) {
      if (this.slider) {
        this.slider.setAttribute('rangeHighlights', value)
        this.slider.refresh()
      }
    },
    disabled (value) {
      if (value) {
        this.slider.disable()
      } else {
        this.slider.enable()
      }
    },
    value (value) {
      this.slider.setValue(value, this.triggerSlideEvent, this.triggerChangeEvent)
    }
  }
}

export default props
