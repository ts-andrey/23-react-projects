import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../../../hook-store/store';

import classes from './ScoreModal.module.css';

import { scoreHeaderText, scoreSubheaderText, scoreLabelText, btnConfirmText, btnCancelText } from './ScoreModal.langData';

export default function ScoreModal() {
  const [userName, setUserName] = useState();
  const [globalState, dispatchAction] = useStore();
  const navigate = useNavigate();
  const { scores, appLanguage } = globalState;

  function changeUserNameHandler(event) {
    setUserName(event.target.value);
  }

  function submitHandler() {
    dispatchAction('UPDATE_SCORE_DATA', { name: userName, score: scores });
    dispatchAction('HIDE_SCORE_MODAL');
    dispatchAction('RESET_SEQUENCE');
    dispatchAction('RESET_QUEST_PROGRESS');
    navigate('/scores');
  }
  function cancelHandler() {
    dispatchAction('HIDE_SCORE_MODAL');
    dispatchAction('RESET_SEQUENCE');
    dispatchAction('RESET_QUEST_PROGRESS');
    navigate('/quiz');
  }

  return (
    <>
      <div className={classes['score-modal']}>
        <h2>{scoreHeaderText[appLanguage]}</h2>
        <h3>{scoreSubheaderText[appLanguage]}</h3>
        <label className={classes['score-modal__label']}>
          {scoreLabelText[appLanguage]}
          <input className={classes['score-modal__input']} type="text" name="text" placeholder='Type something already!' onChange={changeUserNameHandler} />
        </label>
        <div className={classes['score-modal__actions']}>
          <button className={`${classes['score-modal__btn']} ${classes['margin-right']}`} onClick={submitHandler}>{btnConfirmText[appLanguage]}</button>
          <button className={`${classes['score-modal__btn']} ${classes['btn__cancel']}`} onClick={cancelHandler}>{btnCancelText[appLanguage]}</button>
        </div>
      </div>
      <div className={classes['modal__overlay']} onClick={cancelHandler}></div>
    </>
  )
}