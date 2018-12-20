import { readFileSync } from 'fs'
import { resolve } from 'path'
import Vue from 'vue/dist/vue.common'
import VueBootstrapSlider from '../lib'

const readFile = path => String(readFileSync(resolve(__dirname, 'fixtures/', path), 'UTF-8'))
const throwIfNotVueInstance = (vm) => {
  if (!(vm instanceof Vue)) {
    // debugging breadcrumbs in case a non-Vue instance gets erroneously passed
    // makes the error easier to fix than example: "Cannot read _prevClass of undefined"
    throw new TypeError(`The matcher function expects Vue instance. Given ${typeof vm}`)
  }
}
const throwIfNotArray = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError(`The matcher requires an array. Given ${typeof array}`)
  }
}

// Install Vue and VueBootstrapSlider
window.Vue = Vue
Vue.use(VueBootstrapSlider)

export function loadFixture(name) {
  const template = readFile(`${name}.html`)
  const js = readFile(`${name}.js`)

  return async () => {
    // Mount template
    document.body.innerHTML = template

    // Eval js
    eval(js) // eslint-disable-line no-eval

    // Await for Vue render
    await Vue.nextTick()
  }
}

export function testVM() {
  it(`vm mounts`, () => {
    return expect(window.app.$el).toBeDefined()
  })
}

export function nextTick() {
  return new Promise((resolve, reject) => {
    Vue.nextTick(resolve)
  })
}

export async function setData(app, key, value) {
  app[key] = value
  await nextTick()
}

// Usage: await sleep(1000);
export function sleep(ms) {
  ms = ms || 0
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Extend Jest marchers
expect.extend({
  toHaveClass(vm, className) {
    // throwIfNotVueInstance(vm)

    return {
      message: `expected <${vm.$options ? vm.$options._componentTag : vm.tagName}> to have class '${className}'`,
      pass: (vm.$el ? vm.$el._prevClass : vm.className).indexOf(className) !== -1
    }
  },
  toHaveAllClasses(vm, classList) {
    throwIfNotVueInstance(vm)
    throwIfNotArray(classList)

    let pass = true
    const missingClassNames = []

    classList.forEach((className) => {
      if (!(vm.$el ? vm.$el._prevClass : vm.className).includes(className)) {
        pass = false
        missingClassNames.push(className)
      }
    })

    return {
      // more debugging breadcrumbs
      message: `Expected <${vm.$options ? vm.$options._componentTag : vm.tagName}> to have all classes in [ ${classList.join(', ')} ], but was missing [ ${missingClassNames.join(', ')} ] class${missingClassNames.length > 1 ? 'es' : ''}.`,
      pass
    }
  },
  toBeComponent(vm, componentTag) {
    throwIfNotVueInstance(vm)

    return {
      message: `expected to be <${componentTag}>`,
      pass: vm.$options._componentTag === componentTag
    }
  }
})
