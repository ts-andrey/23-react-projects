import { useStore } from '../../../hook-store/store';

import classes from './QuizGame.module.css';

import QuizAct from '../quiz-act/QuizAct';
import QuizDescr from '../quiz-descr/QuizDescr';
import EndRoundModal from './end-round-modal/EndRoundModal';

export default function QuizGame() {
  const [globalState, dispatchAction] = useStore();
  const { isGuessed, isSequenceCleared, questionNumber } = globalState;

  function resetGameState() {
    dispatchAction('RESET_GUESED');
    dispatchAction('NEXT_QUESTION');
    dispatchAction('RESET_SELECTED_ANSWERS_STYLES');
    dispatchAction('CLEAR_SELECTED_ANSWERS');
  }
  function nextRoundHandler() {
    if (questionNumber < 5 && isGuessed) {
      dispatchAction('GUARD_SCORES');
      resetGameState();
    }
  }

  return (
    <>
      <div className={classes['quiz-wrapper']}>
        <div className={classes['data-wrapper']}>
          <QuizDescr className={classes['quiz-descr']} />
          <QuizAct className={classes['quiz-act']} />
        </div>
        <div className={classes['button-wrapper']} >
          <button
            className={`${classes.button} ` + (isGuessed && !isSequenceCleared
              ? ''
              : classes['button__disabled'])}
            onClick={nextRoundHandler}
          >
            Next Question
          </button>
          {isSequenceCleared ? <EndRoundModal resetGameState={resetGameState} /> : null}
        </div>
      </div>
    </>
  )
}
