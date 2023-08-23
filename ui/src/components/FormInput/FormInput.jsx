import PropTypes from 'prop-types'
import styles from './FormInput.module.scss'
import classNames from 'classnames'

/**
 * ### example: <br/>
 * ```
 * import FormInput from './components/FormInput/FormInput'
 *
 *<FormInput
 *  id="email"
 *  labelName="E-mail"
 *  inputType="email"
 *  placeholder="xyz@gmail.com"
 *  required
 *  className
 *  />
 *
 *
 *
 *
 * ```
 * ### props: <br/>
 * - id - identificator of input element - it will connect with label to improve **a11y**<br/> isRequired: true<br/>default value: "basicInput"
 * - labelName - value for label to improve readable input<br/> isRequired: true<br/>default value: "Label"
 * - input type - type of your input: email, password, text and range etc.<br/> isRequired: true<br/>default value: "text"
 * - placeholder for input (recommend for text inputs)<br/> isRequired: true<br/>default value: "placholder"
 * - required - set if user must fill this input or it's optional<br/> isRequired: true<br/>default value: true
 * - darkTheme - additional modificatior for class to change some rules for dark theme - local implementation<br/> isRequired: true<br/>default value: false
 */

const FormInput = ({
  id,
  labelName,
  inputType,
  placeholder,
  required,
  className,
  darkTheme
}) => {
  const themePicker = darkTheme ? 'input-fragment--dark' : 'input-fragment'

  const placeholderText = inputType !== 'password' ? placeholder : null

  return (
    <div className={classNames(styles[themePicker], className)}>
      <label htmlFor={id} className={styles['input-fragment__label']}>
        {labelName}
      </label>
      <input
        className={styles['input-fragment__input-field']}
        id={id}
        type={inputType}
        placeholder={placeholderText}
        required={required}
      /></div>
  )
}

export const formInputVariants = ['text', 'email', 'password']

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(formInputVariants),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  darkTheme: PropTypes.bool
}

FormInput.defaultProps = {
  id: 'basicInput',
  labelName: 'Label',
  inputType: 'text',
  placeholder: 'placeholder',
  required: true,
  className: '',
  darkTheme: false
}

export default FormInput
