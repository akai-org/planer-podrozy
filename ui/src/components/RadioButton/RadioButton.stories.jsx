import RadioButton from './RadioButton'

export default {
  component: RadioButton,
  parameters: {
    componentSubtitle: 'A Radio Button component.'
  },
  // TODO: how to declare onchange event for this component prop
  argTypes: {
    onSelected: {action: "click"}
  }
}

const Template = (args) => <RadioButton {...args} />

export const Primary = Template.bind({})

Primary.storyName = 'RadioButton'
