import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes['nav__list']}>
          <li>
            <NavLink
              to={''}
              className={({ isActive }) => isActive ? classes.active : undefined}
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'quiz'}
              className={({ isActive }) => isActive ? classes.active : undefined}
            >
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'scores'}
              className={({ isActive }) => isActive ? classes.active : undefined}
            >
              Scores
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
