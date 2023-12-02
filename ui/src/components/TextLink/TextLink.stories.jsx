import React from 'react'
import TextLink from './TextLink'

export default {
  title: 'Components/TextLink',
  component: TextLink,
  argTypes: {
    external: {
      control: 'boolean'
    }
  }
}

const Template = (args) => <TextLink {...args} />

export const InternalLink = Template.bind({})
InternalLink.args = {
  url: '/page',
  text: 'Internal Link',
  external: false
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  url: 'https://www.put.poznan.pl',
  text: 'External Link',
  external: true
}
