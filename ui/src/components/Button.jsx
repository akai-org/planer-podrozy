import PropTypes from 'prop-types'
import classes from './Button.module.scss'

const Button = ({ variant, onClick, children }) => {
  return (
    <button className={classes[`${variant}`]} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  variant: 'blue',
}

export default Button
