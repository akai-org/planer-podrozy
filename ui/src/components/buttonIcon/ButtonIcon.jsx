import React from 'react'
import PropTypes from 'prop-types'

import { Icon, iconNames } from '../Icon'
import styles from './ButtonIcon.module.scss'
import classNames from 'classnames'

export function ButtonIcon({
  name,
  className,
  color,
  size,
  onClick
}) {
  return (
    <button onClick={onClick} className={classNames(styles['button-icon'], className)}>
      <Icon name={name} className={className} color={color} size={size}/>
    </button>
  )
}

ButtonIcon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconNames)).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'navy', 'purple', 'orange', 'white', 'black']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func.isRequired
}
