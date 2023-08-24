import RadioButton from "./RadioButton";

export default {
    component: RadioButton,
    parameters: {
        componentSubtitle: 'A Radio Button component.'
    },
    argTypes: {
        inverted: {
            control: {type: 'boolean'},
            table: {
                category: 'layout type',
                default: false
            }
        }
    }
}

const Template = (args) => <RadioButton {...args} />

export const Primary = Template.bind({});

Primary.storyName = 'RadioButton';