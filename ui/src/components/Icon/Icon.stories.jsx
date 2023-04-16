import React from 'react'
import { Icon } from './Icon'

export default {
  title: 'Icon',
  component: Icon
}

const DifferentProps = args => <Icon {...args}/>

export const Icons = DifferentProps.bind({})
Icons.args = {
  name: 'plus',
  className: 'icon1',
  size: 'medium',
  color: 'orange'
}
