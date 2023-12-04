import React from 'react'
import classes from './TextLink.module.scss'
import { FiExternalLink } from 'react-icons/fi'
import PropTypes from 'prop-types'

const TextLink = ({ url, text, external }) => {
  const handleClick = () => {
    external ? window.open(url, '_blank') : window.location.href = url
  }

  return (
    <a
      href={url}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : ''}
      onClick={handleClick}
      className={`${classes.textLink} ${external ? 'external' : ''}`}
    >
      {text}
      {external && <FiExternalLink className={classes.externalIcon}/>}
    </a>
  )
}

TextLink.propTypes = {
  /** destination URL that the link you want to navigate to */
  url: PropTypes.string.isRequired,
  /** content that will be displayed in the link */
  text: PropTypes.string.isRequired,
  /** boolean that indicates whether the link is external or internal  */
  external: PropTypes.bool
}

export default TextLink
