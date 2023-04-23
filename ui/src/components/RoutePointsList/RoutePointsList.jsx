import React from 'react'
import PropTypes from 'prop-types'
import styles from './RoutePointsList.module.scss'

import { Icon } from '../Icon/Icon'
import { ListItem } from '../ListItem/ListItem'
import classNames from 'classnames'

export function RoutePointsList({
  className,
  data
} = {}) {
  function dataIntoElements(data) {
    return data.filter(e => Object.keys(e).length > 0)
      .map((element, num) =>
      <li key={element.className} className={classNames(element.className, styles.listItem)}>
        <ListItem className={classNames(element.className)} titleText={element.titleText} lat={element.lat} lon={element.lon} time={element.time} imageUrl={element.imageUrl} onclick={() => alert(num)} />
      </li>
      )
      .flat()
  }
  function iconsRender(data) {
    return data.filter((e, i) => Object.keys(e).length > 0 && i < data.length - 1)
      .map((element, num) =>
        <React.Fragment key="dots-key">
          <li key={`icon-main-${num}`} className={classNames(styles.dotMainItem)}><Icon name='dot' color='white' size='larger'/></li>
          <li key={`icon${0}-${num}`} className={classNames(styles.dotItem)}><Icon name='dot' color='grey' size='smaller'/></li>
          <li key={`icon${1}-${num}`} className={classNames(styles.dotItem)}><Icon name='dot' color='grey' size='smaller'/></li>
          <li key={`icon${2}-${num}`} className={classNames(styles.dotItem)}><Icon name='dot' color='grey' size='smaller'/></li>
        </React.Fragment>
      )
      .flat()
  }
  function iconFlag(data) {
    if (Object.keys(data[data.length - 1]).length > 0) {
      return <li key={`icon-flag-${data.length - 1}`} className={classNames(styles.flagItem)}><Icon name='flag' color='white' size='larger'/></li>
    }
  }

  return (
    <div className={classNames(className, styles['routePointsList-container'])}>
      <div className={classNames(styles['routePointsList-container__dots'])}>
        {iconsRender(data)}
        {iconFlag(data)}
      </div>
      <div className={classNames(styles['routePointsList-container__items'])}>
        <ul>{dataIntoElements(data)}</ul>
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
