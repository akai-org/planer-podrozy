import { React, useState } from 'react'
import PropTypes from 'prop-types'

import { ButtonIcon } from './../buttonIcon/ButtonIcon'
import { Icon } from '../icon/Icon'
import styles from './ListItem.module.scss'
import classNames from 'classnames'

export function ListItem({
  titleText,
  className,
  lat,
  lan,
  time,
  imageUrl,
  onclick
} = {}) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className={classNames(styles['listitem-container'])} onClick={onclick} >
      {imageUrl && (
        <div className={classNames(styles['listitem-container__image'])}>
          <img className={classNames(styles['listitem-container__image'])} src={imageUrl} alt={titleText} width={128} height={128}/>
        </div>
      )}
      <div className={classNames(styles['listitem-container__box'])}>
        <div className={classNames(styles['middle-text'])}>
          <div className={classNames(styles['middle-text__title'])}>{titleText}</div>
          <div className={classNames(styles['middle-text__latlan'])}>Lat: {lat}, Lan: {lan}</div>
          <div className={classNames(styles['middle-text__time'])}>
            <Icon name='timer' size='smedium' color='purple'/>
            <div className={classNames(styles['middle-text__time__value'])}>
              {time} minutes
            </div>
          </div>
        </div>
        <div className={classNames(styles['right-buttons'])}>
            <ButtonIcon name="bin" size="medium" color='white' className={styles['whenHover']}/>
            <ButtonIcon name="heart" size="medium" color={isHover ? 'orange' : 'gray'} onClick={() => setIsHover(true)}/>
        </div>
      </div>
    </div>
  )
}

const listItemPropTypes = {
  titleText: PropTypes.string,
  className: PropTypes.string,
  lat: PropTypes.number,
  lan: PropTypes.number,
  time: PropTypes.number,
  imageUrl: PropTypes.string,
  onclick: PropTypes.func
  // color: PropTypes.oneOf(['blue', 'red', 'green', 'white', 'black']),
  // size: PropTypes.oneOf(['small', 'medium', 'large'])
}

ListItem.propTypes = listItemPropTypes
