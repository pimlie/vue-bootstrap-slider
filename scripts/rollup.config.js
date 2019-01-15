import fs from 'fs'
import path from 'path'
import vuePlugin from 'rollup-plugin-vue'
import commonJS from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import camelCase from 'lodash/camelCase'
import { name, dependencies } from '../package.json'

const base = path.resolve(__dirname, '..')
const lib = path.resolve(base, 'lib')
const dist = path.resolve(base, 'dist')

const externalExcludes = [
  'lodash/camelCase',
  'lodash/snakeCase',
  'lodash/throttle',
]

const baseConfig = {
  input: path.resolve(lib, 'index.js'),
  external: Object.keys(dependencies),
  plugins: [
    vuePlugin({ css: false }),
    nodeResolve({ external: ['vue'], preferBuiltins: true }),
    commonJS(),
    buble({ objectAssign: 'Object.assign' }),
    terser({ sourcemap: true })
  ]
}

// Ensure dist directory exists
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist)
}

export default [{
  ...baseConfig,
  output: {
    format: 'umd',
    name: camelCase(name),
    file: path.resolve(dist, name + '.js'),
    sourcemap: true
  },
  external: Object.keys(dependencies)
}, {
  ...baseConfig,
  output: {
    format: 'cjs',
    name: camelCase(name),
    file: path.resolve(dist, name + '.common.js'),
    sourcemap: true
  }
/* }, {
  ...baseConfig,
  output: {
    format: 'es',
    file: path.resolve(dist, name + '.esm.js'),
    sourcemap: true
  } */
}]
