export default {
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
    type: [Boolean, String],
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
