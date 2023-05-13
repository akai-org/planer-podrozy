import PropTypes from 'prop-types'
import classes from './Button.module.scss'
import classNames from 'classnames'

/**
 * ### example: <br/>
 * ```
 * import Button from './components/Button/Button'
 *
 *<Button
 *  variant="purple"
 *  onClick={() => 'Clicked!'}
 *  style='css_style'>
 *    Button
 *</Button>
 *
 *
 * ```
 * ### props: <br/>
 * - variant - color variant<br/>colors available: ["blue", "dark-blue", "purple", "light-red", "black", "white"]<br/>isRequired: false<br /> default value: "blue"
 * - onClick - event that will be triggered when the button is clicked<br/>isRequired: true<br /> default value: " "
 * - children - content that will be displayed in the button<br/> isRequired: true<br />default value: " "
 * - style - additional css styles<br/>isRequired: false<br /> default value: " "
 */

const Button = ({ variant, onClick, children, style }) => {
  return (
    <button className={classNames(classes[variant], style)} onClick={onClick}>
      {children}
    </button>
  )
}

export const buttonVariants = [
  'blue',
  'dark-blue',
  'purple',
  'light-red',
  'black',
  'white'
]

Button.propTypes = {
  /** color variant */
  variant: PropTypes.oneOf(buttonVariants),
  /** event that will be triggered when the button is clicked */
  onClick: PropTypes.func.isRequired,
  /** content that will be displayed in the button */
  children: PropTypes.string.isRequired,
  /** additional css styles */
  style: PropTypes.string
}

Button.defaultProps = {
  variant: 'blue',
  children: 'Button'
}

export default Button
