import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

import { useStore } from '../../hook-store/store';

export default function Header() {
  const globalState = useStore()[0];
  const { scores } = globalState;

  const activeClassHandler = ({ isActive }) => isActive ? classes.active : undefined;

  return (
    <header className={classes.header}>
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
