import { useNavigate } from 'react-router-dom';

import classes from './GameModal.module.css';

import { useStore } from '../../../../hook-store/store';

export default function GameModal({ resetGameState }) {
  const [globalState, dispatchAction] = useStore();
  const navigate = useNavigate();

  const { isSequenceCleared } = globalState;


  function nextSectionHandler() {
    if (isSequenceCleared) {
      dispatchAction('GUARD_SCORES');
      resetGameState();
      dispatchAction('RESET_SEQUENCE');
      dispatchAction('RESET_QUEST_PROGRESS');

      dispatchAction('GUARD_SCORES');
      navigate('/quiz/singers');
    }
  }

  function endGameHandler() {
    if (isSequenceCleared) {
      dispatchAction('GUARD_SCORES');
      resetGameState();
      dispatchAction('RESET_SEQUENCE');
      dispatchAction('RESET_QUEST_PROGRESS');
    }
  }

  return (
    <>
      <div className={classes.modal}>
        <h2>Congratulations! You finished this section of questions!</h2>
        <h3>Please consider your next options. Would you like to continue playing (untill the next 'savepoint') or finish the game?</h3>
        <div className={classes['button-wrapper']}>
          <button
            className={`${classes.button} ${classes['margin-left']} `}
            onClick={nextSectionHandler}
          >
            Continue
          </button>
          <button
            className={`${classes.button} ${classes['margin-left']}`}
            onClick={endGameHandler}
          >
            Finish
          </button>
        </div>
      </div>
      <div className={classes['modal__overlay']}></div>
    </>
  )
}