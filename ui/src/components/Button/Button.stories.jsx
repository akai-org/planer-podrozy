import React from 'react'
import Button from './Button'

export default {
  component: Button,

  parameters: {
    componentSubtitle: 'A Button component.',
    backgrounds: {
      values: [{ name: 'blue', value: '#1b67dc' }],
    },
  },
  argsTypes: {
    variant: {
      control: { type: 'string' },
      type: { required: false },
      table: {
        category: 'props',
        type: { summary: 'string', detail: 'variant' },
        defaultValue: 'blue',
      },
    },
    onClick: { action: 'clicked' },
    children: {
      options: ['children'],
      mapping: {
        children: <button>children</button>,
      },
    },
    style: {
      control: { type: 'string' },
      type: { required: false },
      table: {
        category: 'props',
        type: { summary: 'string', detail: 'style' },
        defaultValue: '',
      },
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
