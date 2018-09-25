import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    entry: 'src/main.js',
    dest: pkg.browser,
    exports: 'named',
    format: 'umd',
    moduleName: 'shrug',
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**']
      })
    ]
  },
  {
    entry: 'src/main.js',
    targets: [
      { dest: pkg.main, format: 'cjs', exports: 'named' },
      { dest: pkg.module, format: 'es', exports: 'named' }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
]
