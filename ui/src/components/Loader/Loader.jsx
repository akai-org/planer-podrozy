import { React } from 'react'
import PropTypes from 'prop-types'

import styles from './Loader.module.scss'
import classNames from 'classnames'

export function Loader({ className, variant }) {
  return (
    <div className={classNames(className, styles.loader, styles[variant])}>
      <span className={variant}></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

const loaderPropTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string
}

Loader.propTypes = loaderPropTypes
