import React from 'react'
import Button, { buttonVariants } from './Button'

export default {
  component: Button,

  parameters: {
    componentSubtitle: 'A Button component.'
  },
  argsTypes: {
    variant: {
      options: buttonVariants,
      control: { type: 'radio' },
      type: { required: false },
      table: {
        category: 'props',
        type: { summary: 'string', detail: 'variant' },
        defaultValue: 'blue'
      }
    },
    onClick: { action: 'clicked' },
    children: {
      options: ['children'],
      mapping: {
        children: <button>children</button>
      }
    },
    style: {
      control: { type: 'string' },
      type: { required: false },
      table: {
        category: 'props',
        type: { summary: 'string', detail: 'style' },
        defaultValue: ''
      }
    }
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.storyName = 'Button'
