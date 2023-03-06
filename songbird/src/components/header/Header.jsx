import { NavLink, useLocation } from 'react-router-dom';
import { useStore } from '../../hook-store/store';

import classes from './Header.module.css';

import { languageText, linkRouteText, resultScoreText } from './Header.langData';

export default function Header() {
  const location = useLocation();
  const [globalState, dispatchAction] = useStore();
  const { scores, appLanguage } = globalState;

  const activeClassHandler = ({ isActive }) => isActive ? classes.active : undefined;

  function changeLangHandler(event) {
    const language = event.target.innerText;
    dispatchAction('UPDATE_APP_DATA_LANG', { lang: language, route: location.pathname });
  }

  return (
    <header className={classes.header}>
      <div className={classes['lang__wrapper']}>
        <span className={classes['lang__descr']}>{languageText[appLanguage]}</span>
        <span className={classes['lang']} onClick={changeLangHandler}>ru</span>
        <span className={classes['lang__margin']}>|</span>
        <span className={classes['lang']} onClick={changeLangHandler}>eng</span>
      </div>
      <nav className={classes.nav}>
        <ul className={classes['nav__list']}>
          <li>
            <NavLink to={''} className={activeClassHandler}>{linkRouteText.home[appLanguage]}</NavLink>
          </li>
          <li>
            <NavLink to={'quiz'} className={activeClassHandler}>{linkRouteText.game[appLanguage]}</NavLink>
          </li>
          <li>
            <NavLink to={'scores'} className={activeClassHandler}>{linkRouteText.score[appLanguage]}</NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes['score__wrapper']}><span className={classes['score__margin']}>{resultScoreText[appLanguage]}</span><span>{scores}</span></div>
    </header>
  )
}
