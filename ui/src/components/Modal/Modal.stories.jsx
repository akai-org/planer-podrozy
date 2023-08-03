import React, { useState } from 'react'
import Modal from './Modal'
import '../../assets/styles/index.scss'

export default {
  component: Modal,

  parameters: {
    layout: 'centered'
  }
}

const Template = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <>
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
