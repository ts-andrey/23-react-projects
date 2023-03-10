import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../../../hook-store/store';

import classes from './HeaderMenu.module.css';

import { appMode, languageText } from './HeaderMenu.langData';

export default function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [globalState, dispatchAction] = useStore();

  const { appLanguage, difficulty } = globalState;

  function changeLangHandler(event) {
    const language = event.target.innerText;
    dispatchAction('UPDATE_APP_DATA_LANG', { lang: language, route: location.pathname });
  }

  function headerMenuHandler() {
    setIsMenuOpen(prevState => !prevState);
  }

  function changeModeHandler(mode) {
    dispatchAction('UPDATE_MODE', mode);
  }

  const headerMenuClassName = isMenuOpen ? `${classes['header-menu']} ${classes['header-menu_active']}` : classes['header-menu'];
  const burgerMenuClassName = isMenuOpen ? `${classes['burger-menu']} ${classes['burger-menu_active']}` : classes['burger-menu'];

  return (
    <>
      <ul className={burgerMenuClassName} onClick={headerMenuHandler}>
        <li className={classes['burger-menu__line']}></li>
        <li className={classes['burger-menu__line']}></li>
        <li className={classes['burger-menu__line']}></li>
      </ul>
      <ul className={headerMenuClassName}>
        <li className={classes['header-menu__item']}>
          <span className={classes['option__descr']}>{languageText[appLanguage]}</span>
          <div className={classes['option__wrapper']}>
            <span className={appLanguage === 'ru'
                ? `${classes['option']} ${classes['option_active']}`
                : classes['option']} onClick={changeLangHandler}>ru</span>
            <span className={classes['option__margin']}>|</span>
            <span className={appLanguage === 'eng'
                ? `${classes['option']} ${classes['option_active']}`
                : classes['option']} onClick={changeLangHandler}>eng</span>
          </div>
        </li>
        <li className={classes['header-menu__item']}>
          <span className={classes['option__descr']}>{appMode.description[appLanguage]}</span>
          <div className={classes['option__wrapper']}>
            <span
              className={difficulty === 'easy'
                ? `${classes['option']} ${classes['option_active']}`
                : classes['option']}
              onClick={changeModeHandler.bind(null, 'easy')}>
              {appMode.modes.easy[appLanguage]}
            </span>
            <span className={classes['option__margin']}>|</span>
            <span
              className={difficulty === 'normal'
                ? `${classes['option']} ${classes['option_active']}`
                : classes['option']}
              onClick={changeModeHandler.bind(null, 'normal')}>
              {appMode.modes.normal[appLanguage]}
            </span>
            <span className={classes['option__margin']}>|</span>
            <span
              className={difficulty === 'hard'
                ? `${classes['option']} ${classes['option_active']}`
                : classes['option']}
              onClick={changeModeHandler.bind(null, 'hard')}>
              {appMode.modes.hard[appLanguage]}
            </span>
          </div>
        </li>
      </ul>
      {isMenuOpen ? <div className={classes['header-menu__overlay']} onClick={headerMenuHandler}></div> : null}
    </>
  )
}