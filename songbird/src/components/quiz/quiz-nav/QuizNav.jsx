import { NavLink } from 'react-router-dom';
import { useStore } from '../../../hook-store/store';

import classes from './QuizNav.module.css'

import { navLinkText } from './QuizNav.langData';

export default function QuizNav() {
  const [globalState, dispatchAction] = useStore();
  const { appLanguage } = globalState;

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
          <NavLink to={'warmup'} className={setActiveClass} onClick={clickLinkHandler}>{navLinkText.warmup[appLanguage]}</NavLink>
        </li>
        <li>
          <NavLink to={'passerines'} className={setActiveClass} onClick={clickLinkHandler}>{navLinkText.passerine[appLanguage]}</NavLink>
        </li>
        <li>
          <NavLink to={'singers'} className={setActiveClass} onClick={clickLinkHandler}>{navLinkText.singer[appLanguage]}</NavLink>
        </li>
        <li>
          <NavLink to={'forest-birds'} className={setActiveClass} onClick={clickLinkHandler}>{navLinkText.forest[appLanguage]}</NavLink>
        </li>
        <li>
          <NavLink to={'predators'} className={setActiveClass} onClick={clickLinkHandler}>{navLinkText.predator[appLanguage]}</NavLink>
        </li>
        <li>
          <NavLink to={'sea-birds'} className={setActiveClass} onClick={clickLinkHandler}>{navLinkText.sea[appLanguage]}</NavLink>
        </li>
      </ul>
    </>
  )
};