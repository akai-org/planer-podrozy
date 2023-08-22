import React, { useState } from 'react'
import Modal from './Modal'
import '../../assets/styles/index.scss'

export default {
  component: Modal,

  parameters: {
    layout: 'centered',
    componentSubtitle: 'A modal component using dialog element.'
  },

  argTypes: {
    variant: {
      control: false
    },
    open: {
      control: false
    },
    onClose: {
      control: false
    }
  }
}

const Template = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        style={{
          position: 'absolute',
          top: '5rem',
          left: '5rem'
        }}
        onClick={() => {
          console.log('clicked')
        }}
      >
        try clicking me
      </button>
      <button
        onClick={() => {
          setOpen(true)
        }}
      >
        Open Modal
      </button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export const Default = Template.bind({})
Default.storyName = 'Default modal'

export const Confirm = Template.bind({})
Confirm.args = {
  variant: 'confirm'
}
Confirm.storyName = 'Modal with confirm button'
