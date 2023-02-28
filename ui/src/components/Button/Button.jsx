import PropTypes from 'prop-types'
import classes from './Button.module.scss'
import classNames from 'classnames'

const Button = ({ variant, onClick, children, style }) => {
  return (
    <button
      className={classNames(classes[variant], classes[style])}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  style: PropTypes.string,
}

Button.defaultProps = {
  variant: 'blue',
}

export default Button
