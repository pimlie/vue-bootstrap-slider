window.app = new Vue({
  el: '#app',
  data: function() {
    return {
      simpleValue: 2,
      basicValue: 50,
      rangeValue: [25,75],
      ticks: [1, 2, 3],
      tickLabels: ['One', 'Two', 'Three']
    }
  }
});

