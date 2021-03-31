/**
 * @author GuangHui
 * @description spinner storybook
 */

import GhLoadingSpinner from '../packages/loading-spinner/src/LoadingSpinner.vue'

export default {
  title: 'Example/GhLoadingSpinner', // 设置storybook标题
  component: GhLoadingSpinner, // 使用的组件
  // 配置入参行为(props, slots, inputs, etc等等在storybook中统称为args)
  argTypes: {
    size: { control: { type: 'select', options: ['10px', '10em', '100%'] } }
  }
}

// 创建容器组件
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GhLoadingSpinner },
  template: '<gh-loading-spinner v-bind="$props" />'
})

export const Primary = Template.bind({}) // 使用bind({})，克隆一个新函数，创建一个新story
Primary.args = {
  size: '1em'
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: '10em'
}

export const Large = Template.bind({})
Large.args = {
  size: '100px'
}

export const Small = Template.bind({})
Small.args = {
  size: '10vw'
}
