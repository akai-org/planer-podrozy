import React from 'react'
import 'leaflet/dist/leaflet.css'
import Map from './Map'

export default {
  component: Map,

  parameters: {
    layout: 'centered',
    componentSubtitle: 'A map component using react-leaflet and CARTO basemaps (dark) tiles.'
  },

  argTypes: {
    center: {
      control: { type: 'object' },
      type: { required: true },
      table: {
        category: 'props',
        type: { summary: 'array[]', detail: '[latitude, longitude]' }
      },
      defaultValue: [0, 0]
    },

    zoom: {
      control: { type: 'number', min: 0, max: 20, step: 1 },
      type: { required: true },
      table: { category: 'props', type: { summary: 'number', detail: null } },
      defaultValue: 0
    }
  },

  decorators: [
    (Story) => <div style={{ height: '75vh', width: '75vw' }}>{Story()}</div>
  ]
}

const Template = (args) => <Map {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Map'
