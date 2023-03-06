import classes from './Welcome.module.css';
import backgroundVideo from './../assets/backgroundVideo.mp4';

import { welcomeHeaderText, welcomeSubheaderFirstText, welcomeSubheaderSecondText, welcomeSubheaderThirdText } from './Welcome.langData';
import { useStore } from '../hook-store/store';

function Welcome() {
  const globalState = useStore()[0];
  const { appLanguage } = globalState;

  return (
    <section className={classes.welcome}>
      <video className={classes.video} src={backgroundVideo} autoPlay loop muted> </video>
      <h1>{welcomeHeaderText[appLanguage]}</h1>
      <h2>{welcomeSubheaderFirstText[appLanguage]}</h2>
      <h2>{welcomeSubheaderSecondText[appLanguage]}</h2>
      <h3>{welcomeSubheaderThirdText[appLanguage]}</h3>
    </section>
  )
}
export default Welcome;