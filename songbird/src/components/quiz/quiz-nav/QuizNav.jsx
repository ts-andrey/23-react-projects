import { NavLink } from 'react-router-dom';
import { useStore } from '../../../hook-store/store';

import classes from './QuizNav.module.css'

export default function QuizNav() {
  const dispatchAction = useStore()[1];

  const setActiveClass = ({ isActive }) => isActive ? classes.active : undefined;

  const clickLinkHandler = () => {
    dispatchAction('RESET_SCORES');
    dispatchAction('RESET_QUEST_PROGRESS');
    dispatchAction('RESET_SEQUENCE');
    dispatchAction('RESET_GUESED');
    dispatchAction('RESET_SELECTED_ANSWERS_STYLES');
    dispatchAction('CLEAR_SELECTED_ANSWERS');
  }

  return (
    <>
      <ul className={classes.list}>
        <li>
          <NavLink to={'warmup'} className={setActiveClass} onClick={clickLinkHandler}>warmup</NavLink>
        </li>
        <li>
          <NavLink to={'passerines'} className={setActiveClass} onClick={clickLinkHandler}>passerines</NavLink>
        </li>
        <li>
          <NavLink to={'singers'} className={setActiveClass} onClick={clickLinkHandler}>singers</NavLink>
        </li>
        <li>
          <NavLink to={'forest-birds'} className={setActiveClass} onClick={clickLinkHandler}>forest birds</NavLink>
        </li>
        <li>
          <NavLink to={'predators'} className={setActiveClass} onClick={clickLinkHandler}>predators</NavLink>
        </li>
        <li>
          <NavLink to={'sea-birds'} className={setActiveClass} onClick={clickLinkHandler}>sea birds</NavLink>
        </li>
      </ul>
    </>
  )
};