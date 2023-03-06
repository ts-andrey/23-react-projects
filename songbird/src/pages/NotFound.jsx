import classes from './NotFound.module.css'

import { notFoundHeaderText, notFoundSubheaderText, notFoundDescriptionText } from './NotFound.langData';
import { useStore } from '../hook-store/store';


function NotFound() {
  const globalState = useStore()[0];
  const {appLanguage} = globalState;
  
  return (
    <div className={classes.center}>
      <h1>{notFoundHeaderText[appLanguage]}</h1>
      <h2>{notFoundSubheaderText[appLanguage]}</h2>
      <p className={classes.text}>{notFoundDescriptionText[appLanguage]}</p>
    </div>
  )
}
export default NotFound;