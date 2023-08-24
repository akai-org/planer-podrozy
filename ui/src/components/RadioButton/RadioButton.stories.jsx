import RadioButton from "./RadioButton";

export default {
    component: RadioButton,
    parameters: {
        componentSubtitle: 'A Radio Button component.'
    },
}

const Template = (args) => <RadioButton {...args} />

export const Primary = Template.bind({});

Primary.storyName = 'RadioButton';