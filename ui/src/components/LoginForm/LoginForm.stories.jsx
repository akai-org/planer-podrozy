import React from 'react'
import LoginForm from './LoginForm'
import '../../assets/styles/index.scss'

export default {
  component: LoginForm,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'LoginForm'
