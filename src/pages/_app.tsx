import Player from '../components/Player/index';
import Header from '../components/Header/index';
import { PlayerContext } from '../contexts/PlayerContext';

import '../components/styles/global.scss';
import '../components/styles/app.module.scss';
import styles from '../components/styles/app.module.scss'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider value={{
      episodeList, 
      currentEpisodeIndex, 
      play, 
      isPlaying, 
      togglePlay,
      setPlayingState 
      }}>
      
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
