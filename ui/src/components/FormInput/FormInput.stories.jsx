import FormInput, {formInputVariants} from "./FormInput";

export default {
    component: FormInput,
    parameters: {
        componentSubtitle: 'A Form Input component.'
    },
    argTypes: {
        inputType: {
            control: {type: 'select'},
            options: formInputVariants,
            type: {required: false},
            table: {
                category: 'props',
                defaultValue: formInputVariants['text']
            }
        }
    }
}

const Template = (args) => <FormInput {...args}/>

export const Primary = Template.bind({});

Primary.storyName = 'FormInput';