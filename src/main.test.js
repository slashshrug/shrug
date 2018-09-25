import test from 'ava'

import shrug, { SHRUG } from '../dist/shrug.cjs'

test('shrug()', t => {
  t.is(shrug(), '¯\\_(ツ)_/¯')
})

test('SHRUG', t => {
  t.is(SHRUG, '¯\\_(ツ)_/¯')
})
