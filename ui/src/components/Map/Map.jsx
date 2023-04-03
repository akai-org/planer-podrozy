import { MapContainer, TileLayer } from 'react-leaflet'
import styles from './Map.module.scss'
import PropTypes from 'prop-types'

/**
 * ### example: <br/>
 * By default component takes the whole width and height of its parent container
 * ```
 * import Map from 'components/Map/Map'
 * return(
 *   <div style={{ height: '100vh' }}>
 *     <Map center={[52.40120111845652, 16.94889791639715]} zoom={10} />
 *   </div>
 * )
 * ```
 * ### props: <br/>
 * - center - center of the map<br/> [latitude, longitude]<br/> default value: [0, 0]
 * - zoom - starting zoom level<br/> supported zoom levels: 0-20<br/> default value: 0
 *
 * ### reference:
 * - [react-leaflet](https://react-leaflet.js.org)
 * - [Leaflet](https://leafletjs.com)
 * - [CARTO basemaps](https://carto.com/location-data-services/basemaps/)
 */
function Map({ center, zoom }) {
  const mapURL = 'https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}@2x.png'
  const attribution =
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'

  return (
    <MapContainer
      className={styles.map}
      center={center}
      zoom={zoom}
      zoomControl={false}
    >
      <TileLayer
        className={styles.tile}
        url={mapURL}
        style={'dark_nolabels'}
        attribution={attribution}
      />
      <TileLayer
        url={mapURL}
        style={'dark_only_labels'}
        attribution={attribution}
      />
    </MapContainer>
  )
}

const errorMessage = (propName, componentName, expected) =>
  `Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected ${expected}.`

Map.propTypes = {
  /** center of the map */
  center: PropTypes.arrayOf(function(
    propValue,
    key,
    componentName,
    _location,
    propName
  ) {
    const element = propValue[key]

    if (propValue.length !== 2 || !Number.isFinite(element)) {
      return new Error(
        errorMessage(propName, componentName, 'an array of two finite numbers')
      )
    }
  }),

  /** starting zoom level,<br/> supported zoom levels: 0-20 */
  zoom: function(props, propName, componentName) {
    const value = props[propName]

    if (!Number.isFinite(value) || value < 0 || value > 20) {
      return new Error(
        errorMessage(propName, componentName, 'a number between 0 and 20')
      )
    }
  }
}

Map.defaultProps = {
  center: [0, 0],
  zoom: 0
}

export default Map
