import classes from './Welcome.module.css';

import { welcomeHeaderText, welcomeSubheaderFirstText, welcomeSubheaderSecondText, welcomeSubheaderThirdText } from './Welcome.langData';
import { useStore } from '../hook-store/store';

function Welcome() {
  const globalState = useStore()[0];
  const { appLanguage } = globalState;

  return (
    <>
      <section className={classes.welcome}>
        <h1>{welcomeHeaderText[appLanguage]}</h1>
        <h2>{welcomeSubheaderFirstText[appLanguage]}</h2>
        <h2>{welcomeSubheaderSecondText[appLanguage]}</h2>
        <h3>{welcomeSubheaderThirdText[appLanguage]}</h3>
      </section>
      <div className={classes.bg}></div>
    </>
  )
}
export default Welcome;