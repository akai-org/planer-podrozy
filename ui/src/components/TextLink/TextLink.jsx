import React from 'react'
import './TextLink.scss'
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
      className={`text-link ${external ? 'external' : ''}`}
    >
      {text}
      {external && <FiExternalLink className='external-icon'/>}
    </a>
  )
}

TextLink.propTypes = {
  /** destination URL that the link you want to navigate to */
  url: PropTypes.string.isRequired,
  /** content that will be displayed in the link */
  text: PropTypes.string.isRequired,
  /** boolean that indicates whether the link is external or internal  */
  external: PropTypes.bool,
}

export default TextLink
