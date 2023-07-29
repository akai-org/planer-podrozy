import FormInput from "./FormInput";

export default {
    component: FormInput,
    parameters: {
        componentSubtitle: 'A Form Input component.'
    },
    argTypes: {
        formParameters: {
            control: {type: 'string'},
            table: {
                category: 'props',
                defaultValue: ''
            }
        }
    }
}

const Template = (args) => <FormInput {...args}/>

export const Primary = Template.bind({});

Primary.storyName = 'FormInput';