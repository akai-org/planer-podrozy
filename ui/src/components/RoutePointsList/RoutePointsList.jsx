import { React } from 'react'
import PropTypes from 'prop-types'
import styles from './RoutePointsList.module.scss'

import { Icon } from '../Icon/Icon'
import { ListItem } from '../ListItem/ListItem'
import classNames from 'classnames'

export function RoutePointsList({
  className,
  data
} = {}) {
  const iconsItems = []
  for (let i = 0; i < data.length - 1; i++) {
    iconsItems.push(<li key={`icon-main-${i}`} className={classNames(styles.dotMainItem)}><Icon name='dot' color='white' size='larger'/></li>)
    for (let j = 0; j < 3; j++) {
      iconsItems.push(<li key={`icon${j}-${i}`} className={classNames(styles.dotItem)}><Icon name='dot' color='grey' size='smaller'/></li>)
    }
  }
  iconsItems.push(<li key={'icon-flag'} className={classNames(styles.flagItem)}><Icon name='flag' color='white' size='larger'/></li>)
  const listItems = data.map((element, num) =>
      <li key={element.className} className={classNames(element.className, styles.listItem)}>
        <ListItem className={classNames(element.className)} titleText={element.titleText} lat={element.lat} lon={element.lon} time={element.time} imageUrl={element.imageUrl} onclick={() => alert(num)} />
      </li>
  )

  return (
    <div className={classNames(className, styles['routePointsList-container'])}>
      <div className={classNames(styles['routePointsList-container__dots'])}>
        {iconsItems}
      </div>
      <div className={classNames(styles['routePointsList-container__items'])}>
        <ul>{listItems}</ul>
      </div>
    </div>
  )
}
const RoutePointsListPropTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      titleText: PropTypes.string,
      className: PropTypes.string,
      lat: PropTypes.number,
      lon: PropTypes.number,
      time: PropTypes.number,
      imageUrl: PropTypes.string
    })
  )
}

RoutePointsList.propTypes = RoutePointsListPropTypes
