import styles from './assets/styles/App.module.scss'
import { RoutePointsList } from './components/RoutePointsList/RoutePointsList'

export default function App() {
  const neededData = [
    {
      titleText: 'Eiffel Tower',
      className: 'gdsfgvdvcdsfgrey',
      lat: 2.456784,
      lon: 7.342432,
      time: 15,
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uVSx8xzmv4ANIkRLi6sJHQHaLH%26pid%3DApi&f=1&ipt=9d4872ba112575669f16842ca3d523d44a2e7e7c016ce4fe06591417de56d59f&ipo=images'
    },
    {
      titleText: 'Bridge',
      className: 'swaaw987b',
      lat: 25.784,
      lon: 23.342432,
      time: 50,
      imageUrl: 'http://wallpapercave.com/wp/Cv7qlJq.jpg'
    },
    {
      titleText: 'Westminster Abbey ',
      className: 'hy5ew',
      lat: 5.784,
      lon: 3.342432,
      time: 50,
      imageUrl: 'https://cdn-lnp.dataweavers.io/-/media/images/london/visit/london-organisations/westminster-abbey/westminster-abbey-640.jpg?rev=af9ea1c27df748e5ad4750c69aa986dc'
    },
    {
      titleText: 'The London Eye ',
      className: 'hy5ew',
      lat: 5.784,
      lon: 3.342432,
      time: 5,
      imageUrl: 'https://cdn-lnp.dataweavers.io/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-640x360.jpg?rev=ae93c8fc80f541c787429b433da5fde0'
    },
    {
      titleText: 'The National Gallery',
      className: 'hy5ew',
      lat: 5.784,
      lon: 3.342432,
      time: 5,
      imageUrl: 'https://tourscanner.com/blog/wp-content/uploads/2022/02/The-National-Gallery-London.jpg'
    }
  ]
  return (
  <div className={styles.app}>
    <h2>Title</h2>
    <RoutePointsList className="testowaLista" data={neededData}/>
  </div>
  )
}
