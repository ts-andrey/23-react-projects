import { useState } from 'react';
import QuizAct from '../quiz-act/QuizAct';
import QuizDescr from '../quiz-descr/QuizDescr';

import classes from './QuizGame.module.css';

export default function QuizGame({ questionData, currentBird, setCurrentQuestion }) {
  const [selectedAnswers, setSelectedAnsers] = useState([]);
  const [isGuessed, setIsGuessed] = useState(false);

  function nextRoundHandler() {
    setIsGuessed(false);
    setCurrentQuestion((prevState) => prevState + 1);
    selectedAnswers.forEach(el => el.className = classes.answer);
    setSelectedAnsers([]);
  }

  return (
    <>
      <div className={classes['quiz-wrapper']}>
        <div className={classes['data-wrapper']}>
          <QuizAct className={classes['quiz-act']} questionData={questionData} currentBird={currentBird} isGuessed={isGuessed} setIsGuessed={setIsGuessed} setSelectedAnsers={setSelectedAnsers} />
          <QuizDescr className={classes['quiz-descr']} currentBird={currentBird} isGuessed={isGuessed} />
        </div>
        <div className={classes['button-wrapper']}>
          <button onClick={nextRoundHandler}>Next Question</button>
        </div>
      </div>
    </>
  )
}
