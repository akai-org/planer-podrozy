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
  lon,
  time,
  imageUrl,
  onclick
} = {}) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className={classNames(styles['listitem-container'])} onClick={onclick}>
      {imageUrl && (
        <div className={classNames(styles['listitem-container__image'])}>
          <img className={classNames(styles['listitem-container__image'])} src={imageUrl} alt={titleText} width={128} height={128}/>
        </div>
      )}
      <div className={classNames(styles['listitem-container__box'])}>
        <div className={classNames(styles['middle-text'])}>
          <div className={classNames(styles['middle-text__title'])}>{titleText}</div>
          <div className={classNames(styles['middle-text__latlan'])}>Lat: {lat}, Lon: {lon}</div>
          <div className={classNames(styles['middle-text__time'])}>
            <Icon name='timer' size='small' color='purple' className={styles.whenHoverTime}/>
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
  onclick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

ListItem.propTypes = listItemPropTypes
