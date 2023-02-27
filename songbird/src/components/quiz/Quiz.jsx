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
  
  const { questionNumber } = globalState;

  const birdsType = location.replace('/quiz/', '');

  useEffect(() => {
    const dataOrder = BIRDS_TYPES[birdsType];
    Number.isInteger(dataOrder) ? dispatchAction('GAME_START') : dispatchAction('GAME_END');

    dispatchAction('UPDATE_DATA', birdsType);

    dispatchAction('UPDATE_QUESTION_DATA');
  }, [location, questionNumber]);

  return (
    <>
      <QuizNav />
      {globalState.isPlaying ? <QuizGame /> : <QuizGreet />}
    </>
  )
};