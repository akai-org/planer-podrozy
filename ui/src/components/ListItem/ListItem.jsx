import { React, useState } from 'react'
import PropTypes from 'prop-types'

import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import { Icon } from '../Icon/Icon'
import styles from './ListItem.module.scss'
import classNames from 'classnames'

export function ListItem({
  titleText,
  className,
  lat,
  lon,
  time,
  imageUrl,
  onclick
} = {}) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className={classNames(styles['listitem-container'], className)} onClick={onclick}>
      <div className={classNames(styles['listitem-container__image'])}>
        <img className={classNames(styles['listitem-container__image'])} src={imageUrl} alt={titleText} />
      </div>
      <div className={classNames(styles['listitem-container__box'])}>
        <div className={classNames(styles['middle-text'])}>
          <div className={classNames(styles['middle-text__title'])}>{titleText}</div>
          <div className={classNames(styles['middle-text__latlan'])}>Lat: {lat}, Lon: {lon}</div>
          <div className={classNames(styles['middle-text__time'])}>
            <Icon name='timer' size='small' color='navy' className={styles.whenHoverTime}/>
            <div className={classNames(styles['middle-text__time__value'])}>
              {time} minutes
            </div>
          </div>
        </div>
        <div className={classNames(styles['right-buttons'])}>
            <ButtonIcon name="bin" size="medium" onClick={(e) => e.stopPropagation()} color='white' className={classNames(styles.whenHoverBin)}/>
            <ButtonIcon name="heart" size="medium" onClick={(e) => { e.stopPropagation(); setIsLiked(prevState => !prevState) }} color={isLiked ? 'red' : 'grey'} className={isLiked ? '' : styles.whenHoverHeart} />
        </div>
      </div>
    </div>
  )
}

const listItemPropTypes = {
  titleText: PropTypes.string,
  className: PropTypes.string,
  lat: PropTypes.number,
  lon: PropTypes.number,
  time: PropTypes.number,
  imageUrl: PropTypes.string,
  onclick: PropTypes.func
}

ListItem.propTypes = listItemPropTypes
