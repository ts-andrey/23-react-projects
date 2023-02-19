import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import BirdsData from './../../data/birdsData';

import QuizNav from './quiz-nav/QuizNav';
import QuizGame from './quiz-game/QuizGame';
import QuizGreet from './quiz-greet/QuizGreet';

const BIRDS_ROUTE_DATAORDER = {
  '/quiz/warmup': 0,
  '/quiz/passerines': 1,
  '/quiz/singers': 2,
  '/quiz/forest-birds': 3,
  '/quiz/predators': 4,
  '/quiz/sea-birds': 5,
}

function Quiz() {
  const location = useLocation().pathname;
  const [isPlaying, setIsPlaying] = useState(false);
  const [birdsData, setBirdsData] = useState([]);

  console.log(location);

  useEffect(() => {
    const dataOrder = BIRDS_ROUTE_DATAORDER[location];
    Number.isInteger(dataOrder) ? setIsPlaying(true) : setIsPlaying(false);
    setBirdsData(BirdsData[dataOrder] || []);
  }, [location])

  return (
    <>
      <QuizNav startGameSwitcher={setIsPlaying} />
      {isPlaying ? <QuizGame birdsData={birdsData} /> : <QuizGreet />}
    </>
  )
};

export default Quiz;
