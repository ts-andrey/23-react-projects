import { NavLink } from 'react-router-dom';

import classes from './headerNavigation.module.css';

const activeClassHandler = ({ isActive }) => isActive ? classes.active : '';

export default function HeaderNavigation() {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes['nav-list']}>
          <li><NavLink to={''} className={activeClassHandler}>About</NavLink></li>
          <li><NavLink to={'projects'} className={activeClassHandler}>Projects</NavLink></li>
          <li><NavLink to={'code-samples'} className={activeClassHandler}>Code Samples</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

