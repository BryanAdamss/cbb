'use strict'

import { print } from '../src/index.js'

describe('@zy/utils', () => {
  it('should be a function', () => {
    expect(typeof print === 'function').toBe(true)
  })
})
