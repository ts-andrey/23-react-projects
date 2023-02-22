import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getRandomAnswers } from '../../util/getRandomAnswers';
import { BIRDS_ROUTE_DATAORDER, GAME_MODES } from '../../util/constants';

import BirdsData from './../../data/birdsData';

import QuizNav from './quiz-nav/QuizNav';
import QuizGame from './quiz-game/QuizGame';
import QuizGreet from './quiz-greet/QuizGreet';


const BIRDS_NAMES = BirdsData.map(el => el.map(el => el.name)).flat();

export default function Quiz() {
  const location = useLocation().pathname;
  const dataOrder = BIRDS_ROUTE_DATAORDER[location];
  const birds = BirdsData[dataOrder] || [];

  const [isPlaying, setIsPlaying] = useState(false);
  const [birdsData, setBirdsData] = useState(birds);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentBird, setCurrentBird] = useState(birds[currentQuestion]);
  const [difficalty, setDifficalty] = useState(GAME_MODES['easy']);
  const [questionData, setQuestionData] = useState({ random: [], correct: '', position: 0 });
  const [scores, setScores] = useState(0);


  useEffect(() => {
    Number.isInteger(dataOrder) ? setIsPlaying(true) : setIsPlaying(false);
    setBirdsData(birds);
    setCurrentBird(birds[currentQuestion])
    const [randomAnswers, rightAnswerNumber, rightAnswer] = getRandomAnswers(BIRDS_NAMES, currentBird?.name, difficalty);
    setQuestionData({ random: randomAnswers, correct: rightAnswer, position: rightAnswerNumber })
  }, [location, currentQuestion, birdsData, currentBird]);

  return (
    <>
      <QuizNav
        startGameSwitcher={setIsPlaying}
        setCurrentQuestion={setCurrentQuestion} setScores={setScores} />
      {isPlaying ?
        <QuizGame
          questionData={questionData}
          currentBird={currentBird}
          setCurrentQuestion={setCurrentQuestion}
        /> :
        <QuizGreet />}
    </>
  )
};