import React from 'react'
import { Loader } from './Loader.jsx'

export default {
  component: Loader,

  parameters: {
    componentSubtitle: 'A Loader component based on css transform and animation-delay.'
  },

  title: 'Components/Loader',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      type: { required: true },
      table: {
        category: 'props',
        type: { summary: 'string', detail: 'variant' },
        defaultValue: { summary: 'primary' }
      }
    }
  }
}

const Template = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.storyName = 'Loader'
