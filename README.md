# Vue.js Bootstrap Slider
[![npm](https://img.shields.io/npm/dt/vue-bootstrap-slider.svg?style=flat-square)](https://npmjs.com/package/vue-bootstrap-slider)
[![npm](https://img.shields.io/npm/v/vue-bootstrap-slider.svg?style=flat-square)](https://npmjs.com/package/vue-bootstrap-slider)

> Easily use [seiyria's Bootstrap Slider component](https://github.com/seiyria/bootstrap-slider) in Vue.js

Click [here](https://pimlie.github.io/vue-bootstrap-slider/example.html) for a live example

## How to install
Install from npm with:
```
npm install --save vue-bootstrap-slider
```

The default export of this package is a VuePlugin.
```js
import bFormSlider from 'vue-bootstrap-slider';
Vue.use(bFormSlider)
```
if you wish to import the component you can use:
```js
import bFormSlider from 'vue-bootstrap-slider/es/form-slider';
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

> :exclamation: When listening to slider events, listen to the kebab-case'd event name and not the camelCase'd. E.g. listen for `@slide-start` and not for `@slideStart`


## Example

```html
<template>
  <div>
    <b-form-slider :value="value" @slide-start="slideStart" @slide-stop="slideStop"></b-form-slider>
    <p>Slider has value {{ value }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 5
    }
  },
  methods: {
    slideStart () {
      console.log('slideStarted')
    },
    slideStop () {
      console.log('slideStopped')
    }
  }
}
</script>
```

### Exclude jQuery dependency
By default seiyria/bootstrap-slider requires jquery which means that if you include this package you will also add jquery to your project. If you do not use jquery anywhere in your project, check [here](https://github.com/seiyria/bootstrap-slider#how-do-i-exclude-the-optional-jquery-dependency-from-my-build) how to prevent the full jquery library from being added to your project build. 
If you are using `nuxt` you can set the following in your `nuxt.config.js`:
```js
{
  build: {
    extend (config, ctx) {
      config.resolve.alias['jquery'] = '~components/jquery-stub.js'
    }
  }
}
```

### Direct access to the Slider object from your component
```js
<b-form-slider ref="mySlider"></b-form-slider>

const mySlider = this.$refs.mySlider
mySlider.slider.refresh()
```
