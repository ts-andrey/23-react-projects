import { useLocation } from 'react-router-dom';
import { useStore } from '../../../hook-store/store';

import classes from './HeaderMenu.module.css';

import { languageText } from './HeaderMenu.langData';

export default function HeaderMenu() {
  const location = useLocation();
  const [globalState, dispatchAction] = useStore();

  const { appLanguage } = globalState;

  function changeLangHandler(event) {
    const language = event.target.innerText;
    dispatchAction('UPDATE_APP_DATA_LANG', { lang: language, route: location.pathname });
  }

  return (
    <>
      <ul className={classes['burger-menu']}>
        <li className={classes['burger-menu__line']}></li>
        <li className={classes['burger-menu__line']}></li>
        <li className={classes['burger-menu__line']}></li>
      </ul>
      <ul className={classes['header-menu']}>
        <li className={classes['lang__wrapper']}>
          <span className={classes['lang__descr']}>{languageText[appLanguage]}</span>
          <span className={classes['lang']} onClick={changeLangHandler}>ru</span>
          <span className={classes['lang__margin']}>|</span>
          <span className={classes['lang']} onClick={changeLangHandler}>eng</span>
        </li>
      </ul>
      <div className={classes['header-menu__overlay']}></div>
    </>
  )
}