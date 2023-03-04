import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

import { useStore } from '../../hook-store/store';

export default function Header() {
  const [globalState, dispatchAction] = useStore();
  const { scores } = globalState;

  const activeClassHandler = ({ isActive }) => isActive ? classes.active : undefined;

  function changeLangHandler(event) {
    const language = event.target.innerText;
    dispatchAction('UPDATE_APP_LANG', language);
  }

  return (
    <header className={classes.header}>
      <div className={classes['lang__wrapper']}>
        <span className={classes['lang__descr']}>Language:</span>
        <span className={classes['lang']} onClick={changeLangHandler}>ru</span>
        <span className={classes['lang__margin']}>|</span>
        <span className={classes['lang']} onClick={changeLangHandler}>eng</span>
      </div>
      <nav className={classes.nav}>
        <ul className={classes['nav__list']}>
          <li>
            <NavLink to={''} className={activeClassHandler}>Welcome</NavLink>
          </li>
          <li>
            <NavLink to={'quiz'} className={activeClassHandler}>Quiz</NavLink>
          </li>
          <li>
            <NavLink to={'scores'} className={activeClassHandler}>Scores</NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes['score__wrapper']}><span>Scores: </span><span>{scores}</span></div>
    </header>
  )
}
