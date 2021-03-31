'use strict'

import { shallowMount } from '@vue/test-utils'

import LoadingSpinner from '../src/LoadingSpinner.vue'

describe('<LoadingSpinner/>', () => {
  const wrapper = shallowMount(LoadingSpinner, {
    propsData: {
      label: 'test'
    }
  })

  it('should be svg', () => {
    expect(wrapper.element.tagName).toBe('svg')
  })
})
