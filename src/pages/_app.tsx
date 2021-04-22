import Player from '../components/Player/index';
import Header from '../components/Header/index';
import '../components/styles/global.scss';
import '../components/styles/app.module.scss';
import styles from '../components/styles/app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
