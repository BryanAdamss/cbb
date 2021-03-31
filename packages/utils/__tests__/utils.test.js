'use strict'

import { shuffle } from '../src/tools.js'

describe('@ghchu/utils', () => {
  it('should be a function', () => {
    expect(typeof shuffle === 'function').toBe(true)
  })
})
