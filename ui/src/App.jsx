import styles from './assets/styles/App.module.scss'

import { ListItem } from './components/listItem/ListItem'

export default function App() {
  return (
    <div className={styles.app}>
      <ListItem onclick={() => alert("hi")} titleText='British Parliament - Big Ben' lat={3.543543} lon={1.543532} time={15} imageUrl='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwanderluxe.theluxenomad.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fbig-ben-james-newcombe.jpg&f=1&nofb=1&ipt=1a28d85c41c346fc976e6155e168bec9219bf9ed92d5c8a6138b35cb1f0529b3&ipo=images' /> 
    </div>
  )
}
