export default {
  min(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('min', value)
      this.refresh()
    }
  },
  max(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('max', value)
      this.refresh()
    }
  },
  step(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('step', value)
      this.refresh()
    }
  },
  precision(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('precision', value)
      this.refresh()
    }
  },
  orientation(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('orientation', value)
      this.refresh()
    }
  },
  range(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('range', value)
      this.refresh()
    }
  },
  selection(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('selection', value)
      this.refresh()
    }
  },
  tooltip(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('tooltip', value)
      this.refresh()
    }
  },
  tooltipSplit(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('tooltipSplit', value)
      this.refresh()
    }
  },
  tooltipPosition(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('tooltipPosition', value)
      this.refresh()
    }
  },
  handle(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('handle', value)
      this.refresh()
    }
  },
  reversed(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('reversed', value)
      this.refresh()
    }
  },
  rtl(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('rtl', value)
      this.refresh()
    }
  },
  formatter(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('formatter', value)
      this.refresh()
    }
  },
  naturalArrowKeys(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('naturalArrowKeys', value)
      this.refresh()
    }
  },
  ticks(value, oldValue) {
    if (this.slider) {
      this.slider.setAttribute('ticks', value)
      this.refresh()
    }
  },
  ticksPositions(value, oldValue) {
    if (this.slider) {
      this.slider.setAttribute('ticksPositions', value)
      this.refresh()
    }
  },
  ticksLabels(value, oldValue) {
    if (this.slider) {
      this.slider.setAttribute('ticksLabels', value)
      this.refresh()
    }
  },
  ticksSnapBounds(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('ticksSnapBounds', value)
      this.refresh()
    }
  },
  ticksTooltip(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('ticksTooltip', value)
      this.refresh()
    }
  },
  scale(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('scale', value)
      this.refresh()
    }
  },
  focus(value, oldValue) {
    if (this.slider && value !== oldValue) {
      this.slider.setAttribute('focus', value)
      this.refresh()
    }
  },
  labelledby(value, oldValue) {
    if (this.slider) {
      this.slider.setAttribute('labelledby', value)
      this.refresh()
    }
  },
  rangeHighlights(value, oldValue) {
    if (this.slider) {
      this.slider.setAttribute('rangeHighlights', value)
      this.refresh()
    }
  },
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
