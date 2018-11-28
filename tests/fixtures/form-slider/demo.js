window.app = new Vue({ // eslint-disable-line no-undef
  el: '#app',
  data: function () {
    return {
      simpleValue: 2,
      basicValue: 50,
      rangeValue: [25, 75],
      min: 0,
      max: 100,
      ticks: [1, 2, 3],
      tickLabels: ['One', 'Two', 'Three'],
      rangeHighlights: [
        { 'start': 0, 'end': 24, 'class': 'primary-slider' },
        { 'start': 24, 'end': 47, 'class': 'secondary-slider' },
        { 'start': 47, 'end': 71, 'class': 'primary-slider' },
        { 'start': 71, 'end': 95, 'class': 'secondary-slider' },
        { 'start': 95, 'end': 119, 'class': 'primary-slider' }
      ]
    }
  }
})
