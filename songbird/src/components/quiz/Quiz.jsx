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

  const { isPlaying, questionNumber, isScoresGuarded } = globalState;

  const birdsType = location.replace('/quiz/', '');

  useEffect(() => {
    const dataOrder = BIRDS_TYPES[birdsType];
    Number.isInteger(dataOrder) ? dispatchAction('GAME_START') : dispatchAction('RESET_GAME');

    dispatchAction('UPDATE_DATA', birdsType);
    if (!isScoresGuarded) {
      dispatchAction('RESET_SCORES');
    }
    dispatchAction('UNGUARD_SCORES')
    dispatchAction('UPDATE_QUESTION_DATA');
  }, [location, questionNumber]);

  return (
    <>
      <QuizNav />
      {isPlaying ? <QuizGame /> : <QuizGreet />}
    </>
  )
};