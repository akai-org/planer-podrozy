import React from 'react'
import { ButtonIcon } from './ButtonIcon'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon
}

const DifferentProps = args => <ButtonIcon {...args}/>

export const ButtonIcons = DifferentProps.bind({})
ButtonIcons.args = {
  name: 'plus',
  className: 'buttonIcon',
  size: 'medium',
  color: 'navy',
  onClick: {() => alert('hi')}
}
