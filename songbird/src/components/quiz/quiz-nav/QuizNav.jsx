import { NavLink } from 'react-router-dom';

import classes from './QuizNav.module.css'

export default function QuizNav() {

  const setActiveClass = ({ isActive }) => isActive ? classes.active : undefined;

  return (
    <>
      <ul className={classes.list}>
        <li>
          <NavLink to={'warmup'} className={setActiveClass}>warmup</NavLink>
        </li>
        <li>
          <NavLink to={'passerines'} className={setActiveClass}>passerines</NavLink>
        </li>
        <li>
          <NavLink to={'singers'} className={setActiveClass}>singers</NavLink>
        </li>
        <li>
          <NavLink to={'forest-birds'} className={setActiveClass}>forest birds</NavLink>
        </li>
        <li>
          <NavLink to={'predators'} className={setActiveClass}>predators</NavLink>
        </li>
        <li>
          <NavLink to={'sea-birds'} className={setActiveClass}>sea birds</NavLink>
        </li>
      </ul>
    </>
  )
};