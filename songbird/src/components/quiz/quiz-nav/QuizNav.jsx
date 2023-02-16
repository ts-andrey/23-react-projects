import { NavLink } from 'react-router-dom';

import classes from './QuizNav.module.css'

function QuizNav() {
  return (
    <>
      <ul className={classes.list}>
        <li>
          <NavLink
            to={'warmup'}
            className={({ isActive }) => isActive ? classes.active : undefined}
          >
            warmup
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'passerines'}
            className={({ isActive }) => isActive ? classes.active : undefined}
          >
            passerines
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'forest-birds'}
            className={({ isActive }) => isActive ? classes.active : undefined}
          >
            forest birds
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'predators'}
            className={({ isActive }) => isActive ? classes.active : undefined}
          >
            predators
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'sea-birds'}
            className={({ isActive }) => isActive ? classes.active : undefined}
          >
            sea birds
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default QuizNav;