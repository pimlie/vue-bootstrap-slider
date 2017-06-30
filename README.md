# Vue.js Bootstrap Slider
[![npm](https://img.shields.io/npm/dt/pimlie/vue-bootstrap-slider.svg?style=flat-square)](https://npmjs.com/package/pimlie/vue-bootstrap-slider)
[![npm](https://img.shields.io/npm/v/pimlie/vue-bootstrap-slider.svg?style=flat-square)](https://npmjs.com/package/pimlie/vue-bootstrap-slider)

> Easily use [seiyria's Bootstrap Slider component](https://github.com/seiyria/bootstrap-slider) in Vue.js

## How to install
Install from npm with:
```
npm install --save vue-bootstrap-slider
```

Require or import like so for ES6 (default export of this package is a VuePlugin):
```js
import bFormSlider from 'vue-bootstrap-slider';
Vue.use(bFormSlider)
```
or
```js
import {bFormSlider} from 'vue-bootstrap-slider';
```
or like this for CommonJS:
```js
var bFormSlider = require("vue-bootstrap-slider").bFormSlider
```

Next import the bootstrap-slider styles (or use less or sass):
```js
import 'bootstrap-slider/dist/css/bootstrap-slider.css'
```

## Options

### `debounce`
- Default: `0` milliseconds
The events triggered by `bootstrap-slider` originates from mouse-move events and can easily flood your listeners. Setting this value will debounce the events trigger. You can also just debounce or throttle your own listener

### `trigger-slide-event`
- Default: `false`
If the slide event should be triggered when programmatically setting the value

### `trigger-change-event`
- Default: `false`
If the change (and input) event should be triggered when programmatically setting the value


See [bootstrap-slider](https://github.com/seiyria/bootstrap-slider) for a full list of options

## Example

> See also [example.html](https://raw.githubusercontent.com/pimlie/vue-bootstrap-slider/master/example.html)

```html
<template>
  <div>
    <b-form-slider :value="value"/>
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

### Known issues
- Tooltips are not working in Bootstrap 4, see this [issue](https://github.com/seiyria/bootstrap-slider/issues/689)


