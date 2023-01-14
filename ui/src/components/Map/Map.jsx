import { MapContainer, TileLayer } from 'react-leaflet'
import styles from './Map.module.scss'

export default function Map() {
  const mapURL = 'https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}@2x.png'
  const attribution =
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'

  return (
    <MapContainer
      className={styles.map}
      center={[51.505, -0.09]}
      zoom={13}
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
