import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';
import classNames from 'classnames'; 

const FormInput = ({id, labelName, inputType, placeholder, required, className}) => {
    return (
        <div className={classNames(styles['inputFragment'])}>
            <label htmlFor={id}
            className={classNames(styles['inputFragment__label'])}>{labelName}</label>
            <input className={classNames(styles['inputFragment__inputField'])} id={id} type={inputType} placeholder={placeholder} required={required} />
        </div>
    )
}

export const formInputVariants = [
    'text',
    'email',
    'password',
    'textArea',
    'submit',
    'checkbox',
    'date',
    'file',
    'radio',
    'range',
    'search',
    'time'
]

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(formInputVariants),
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

FormInput.defaultProps = {
    id:"basicInput",
    labelName: 'Label',
    inputType: 'text',
    placeholder: '',
    required: false
}

export default FormInput;