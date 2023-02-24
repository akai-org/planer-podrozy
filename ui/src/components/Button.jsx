import PropTypes from 'prop-types'
import classes from './Button.module.css'

const Button = ({ variant, onClick, children }) => {
  return (
    <button className={classes[`variant-${variant}`]} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

export default Button
