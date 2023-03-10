import { NavLink } from 'react-router-dom';
import { useStore } from '../../hook-store/store';

import classes from './Header.module.css';

import { linkRouteText, resultScoreText } from './Header.langData';
import HeaderMenu from './header-menu/HeaderMenu';

export default function Header() {
  const globalState = useStore()[0];
  const { scores, appLanguage } = globalState;

  const activeClassHandler = ({ isActive }) => isActive ? classes.active : undefined;

  return (
    <header className={classes.header}>
      <HeaderMenu />
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
