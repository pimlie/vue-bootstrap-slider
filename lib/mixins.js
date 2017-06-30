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
    min () {
      if (this.slider) {
        this.slider.setAttribute('min', this.min)
      }
    },
    max () {
      if (this.slider) {
        this.slider.setAttribute('max', this.max)
      }
    },
    step () {
      if (this.slider) {
        this.slider.setAttribute('step', this.step)
      }
    },
    precision () {
      if (this.slider) {
        this.slider.setAttribute('precision', this.precision)
      }
    },
    orientation () {
      if (this.slider) {
        this.slider.setAttribute('orientation', this.orientation)
      }
    },
    range () {
      if (this.slider) {
        this.slider.setAttribute('range', this.range)
      }
    },
    selection () {
      if (this.slider) {
        this.slider.setAttribute('selection', this.selection)
      }
    },
    tooltip () {
      if (this.slider) {
        this.slider.setAttribute('tooltip', this.tooltip)
      }
    },
    tooltipSplit () {
      if (this.slider) {
        this.slider.setAttribute('tooltipSplit', this.tooltipSplit)
      }
    },
    tooltipPosition () {
      if (this.slider) {
        this.slider.setAttribute('tooltipPosition', this.tooltipPosition)
      }
    },
    handle () {
      if (this.slider) {
        this.slider.setAttribute('handle', this.handle)
      }
    },
    reversed () {
      if (this.slider) {
        this.slider.setAttribute('reversed', this.reversed)
      }
    },
    rtl () {
      if (this.slider) {
        this.slider.setAttribute('rtl', this.rtl)
      }
    },
    formatter () {
      if (this.slider) {
        this.slider.setAttribute('formatter', this.formatter)
      }
    },
    naturalArrowKeys () {
      if (this.slider) {
        this.slider.setAttribute('naturalArrowKeys', this.naturalArrowKeys)
      }
    },
    ticks () {
      if (this.slider) {
        this.slider.setAttribute('ticks', this.ticks)
      }
    },
    ticksPositions () {
      if (this.slider) {
        this.slider.setAttribute('ticksPositions', this.ticksPositions)
      }
    },
    ticksLabels () {
      if (this.slider) {
        this.slider.setAttribute('ticksLabels', this.ticksLabels)
      }
    },
    ticksSnapBounds () {
      if (this.slider) {
        this.slider.setAttribute('ticksSnapBounds', this.ticksSnapBounds)
      }
    },
    ticksTooltip () {
      if (this.slider) {
        this.slider.setAttribute('ticksTooltip', this.ticksTooltip)
      }
    },
    scale () {
      if (this.slider) {
        this.slider.setAttribute('scale', this.scale)
      }
    },
    focus () {
      if (this.slider) {
        this.slider.setAttribute('focus', this.focus)
      }
    },
    labelledby () {
      if (this.slider) {
        this.slider.setAttribute('labelledby', this.labelledby)
      }
    },
    rangeHighlights () {
      if (this.slider) {
        this.slider.setAttribute('rangeHighlights', this.rangeHighlights)
      }
    },
    disabled () {
      if (this.disabled) {
        this.slider.disable()
      } else {
        this.slider.enable()
      }
    },
    value () {
      this.slider.setValue(this.value, this.triggerSlideEvent, this.triggerChangeEvent)
    }
  }
}

export default props
