import { useStore } from '../../../hook-store/store';

import classes from './QuizGame.module.css';

import QuizAct from '../quiz-act/QuizAct';
import QuizDescr from '../quiz-descr/QuizDescr';

export default function QuizGame() {

  const dispatchAction = useStore()[1];

  function nextRoundHandler() {
    dispatchAction('GUESED_WRONG');

    dispatchAction('NEXT_QUESTION');

    dispatchAction('RESET_SELECTED_ANSWERS_STYLES');

    dispatchAction('CLEAR_SELECTED_ANSWERS');

  }

  return (
    <>
      <div className={classes['quiz-wrapper']}>
        <div className={classes['data-wrapper']}>
          <QuizDescr className={classes['quiz-descr']} />
          <QuizAct className={classes['quiz-act']} />
        </div>
        <div className={classes['button-wrapper']}>
          <button onClick={nextRoundHandler}>Next Question</button>
        </div>
      </div>
    </>
  )
}
