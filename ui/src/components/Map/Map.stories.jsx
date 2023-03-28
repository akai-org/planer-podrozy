import React from 'react'
import 'leaflet/dist/leaflet.css'
import Map from './Map'

export default {
  component: Map,

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    center: {
      control: { type: 'object' },
      type: { required: true },
      table: {
        category: 'props',
        type: { summary: 'array[]', detail: '[latitude, longitude]' }
      },
      defaultValue: [0, 0],
      description: 'The center of the map'
    },

    zoom: {
      control: { type: 'number', min: 0, max: 20, step: 1 },
      type: { required: true },
      table: { category: 'props', type: { summary: 'number', detail: null } },
      defaultValue: 0,
      description: 'The zoom of the map<br/>supported zoom levels: 0-20'
    }
  },

  decorators: [
    (Story) => <div style={{ height: '75vh', width: '75vw' }}>{Story()}</div>
  ]
}

const Template = (args) => <Map {...args} />

export const Primary = Template.bind({})
