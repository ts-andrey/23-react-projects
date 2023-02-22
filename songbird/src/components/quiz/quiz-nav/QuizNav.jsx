import { NavLink } from 'react-router-dom';

import classes from './QuizNav.module.css'

export default function QuizNav({ setCurrentQuestion, setScores }) {

  const setActiveClass = ({ isActive }) => isActive ? classes.active : undefined;

  const clickLinkHandler = () => {
    setCurrentQuestion(0);
    setScores(0);
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