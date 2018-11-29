import fs from 'fs'
import path from 'path'
import vuePlugin from 'rollup-plugin-vue'
import commonJS from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import camelCase from 'lodash.camelcase'
import { name, dependencies } from '../package.json'

const base = path.resolve(__dirname, '..')
const lib = path.resolve(base, 'lib')
const dist = path.resolve(base, 'dist')

// Ensure dist directory exists
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist)
}

export default [{
  input: path.resolve(lib, 'index.js'),
  output: {
    name: camelCase(name),
    format: 'cjs',
    globals: {
      ...dependencies
    },
    file: path.resolve(dist, name + '.common.js'),
    sourcemap: true
  },
  external: Object.keys(dependencies),
  plugins: [
    vuePlugin({ css: false }),
    nodeResolve({ external: ['vue'], preferBuiltins: true }),
    commonJS(),
    buble({ objectAssign: 'Object.assign' }),
    terser({ sourcemap: true })
  ]
}, {
  input: path.resolve(lib, 'index.js'),
  output: {
    name,
    format: 'es',
    globals: {
      ...dependencies
    },
    file: path.resolve(dist, name + '.esm.js'),
    sourcemap: true
  },
  external: Object.keys(dependencies),
  plugins: [
    vuePlugin({ css: false }),
    nodeResolve({ external: ['vue'], preferBuiltins: true }),
    commonJS(),
    buble({ objectAssign: 'Object.assign' }),
    terser({ sourcemap: true })
  ]
}, {
  input: path.resolve(lib, 'index.js'),
  output: {
    name: camelCase(name),
    format: 'umd',
    globals: {
      ...dependencies
    },
    file: path.resolve(dist, name + '.js'),
    sourcemap: true
  },
  external: Object.keys(dependencies),
  plugins: [
    vuePlugin({ css: false }),
    nodeResolve({ external: ['vue'], preferBuiltins: true }),
    commonJS(),
    buble({ objectAssign: 'Object.assign' }),
    terser({ sourcemap: true })
  ]
}]
