import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../../hook-store/store';

import QuizNav from './quiz-nav/QuizNav';
import QuizGame from './quiz-game/QuizGame';
import QuizGreet from './quiz-greet/QuizGreet';

import { BIRDS_TYPES } from '../../util/constants';

export default function Quiz() {
  const [globalState, dispatchAction] = useStore();
  const location = useLocation().pathname;

  const { isPlaying, questionNumber, isScoresGuarded, appLanguage, difficulty } = globalState;

  useEffect(() => {

    const dataOrder = BIRDS_TYPES[location];
    Number.isInteger(dataOrder) ? dispatchAction('GAME_START') : dispatchAction('RESET_GAME');

    dispatchAction('UPDATE_DATA', location);
    if (!isScoresGuarded) {
      dispatchAction('RESET_SCORES');
      dispatchAction('HIDE_SCORE_MODAL');
    }
    dispatchAction('UNGUARD_SCORES')
    dispatchAction('UPDATE_QUESTION_DATA');
    dispatchAction('UPDATE_CURRENT_ROUTE', location);
  }, [location, questionNumber, appLanguage, difficulty]);

  return (
    <>
      <QuizNav />
      {isPlaying ? <QuizGame /> : <QuizGreet />}
    </>
  )
};