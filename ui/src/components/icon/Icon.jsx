import { React } from 'react'
import PropTypes from 'prop-types'

import { BiPlusCircle } from 'react-icons/bi'
import { RiCompass3Line, RiDeleteBin2Fill } from 'react-icons/ri'
import { MdOutlineLocationOn, MdOutlineNavigation, MdLocationOn, MdOutlineTimer } from 'react-icons/md'
import { IoMdHeart } from 'react-icons/io'
import { AiOutlineClockCircle } from 'react-icons/ai'

import styles from './Icon.module.scss'
import classNames from 'classnames'

export const iconNames = {
  plus: BiPlusCircle,
  compass: RiCompass3Line,
  emptyLocation: MdOutlineLocationOn,
  arrow: MdOutlineNavigation,
  bin: RiDeleteBin2Fill,
  heart: IoMdHeart,
  fullLocation: MdLocationOn,
  clock: AiOutlineClockCircle,
  timer: MdOutlineTimer
}

export function Icon({
  name,
  className,
  color,
  size
} = {}) {
  const CustomTag = iconNames[name]

  return (
    <span
      className={classNames(
        className,
        styles.icon,
        styles[color],
        styles[size]
      )}
    >
      <CustomTag />
    </span>
  )
}

const iconsPropTypes = {
  name: PropTypes.oneOf(Object.keys(iconNames)).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'navy', 'purple', 'orange', 'white', 'black', 'grey', 'red']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Icon.propTypes = iconsPropTypes
