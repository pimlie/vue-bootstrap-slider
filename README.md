# Vue.js Bootstrap Slider
[![npm](https://img.shields.io/npm/dt/pimlie/vue-bootstrap-slider.svg?style=flat-square)](https://npmjs.com/package/pimlie/vue-bootstrap-slider)
[![npm](https://img.shields.io/npm/vt/pimlie/vue-bootstrap-slider.svg?style=flat-square)](https://npmjs.com/package/pimlie/vue-bootstrap-slider)

> Easily use [seiyria's Bootstrap Slider component](https://github.com/seiyria/bootstrap-slider) in Vue.js

## How to install
Install from npm with:
```
    npm install --save vue-bootstrap-slider
```
Require or import like so for ES6:
```js
    import VueBootstrapSlider from 'vue-bootstrap-slider';
```
or like this for CommonJS:
```js
    var VueBootstrapSlider = require("vue-bootstrap-slider");
```

Next import the bootstrap-slider styles (or use less or sass):
```js
import 'bootstrap-slider/dist/css/bootstrap-slider.css'
```

## Options

### `debounce`
- Default: `0` milliseconds
The events triggered by `bootstrap-slider` originates from mouse-move events and can easily flood your listeners. Setting this value will debounce the events trigger. You can also just debounce or throttle your own listener

See [bootstrap-slider](https://github.com/seiyria/bootstrap-slider) for a full list of options

## Examples

### Basic
```html
<template>
  <div>
    <b-slider :value="value"/>
    <p>Slider has value {{ value }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 5
    }
  }
}
</script>
```

### Range
```html
// range
<template>
  <div>
    <b-slider :value="range" range :min="config.min" :max="config.max" @change="change"/>
    <p>Slider has value {{ range }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: {
        min: 0,
        max: 100
      }
      range: [ 12, 67 ]
    }
  },

  methods: {
    change ({ oldValue, newValue }) {
      console.log('Slider changed from ', oldValue.join(','), ' to', newValue.join(','))
    }
}
</script>
```

### Known issues
- Tooltips are not working in Bootstrap 4, see this [issue](https://github.com/seiyria/bootstrap-slider/issues/689)


