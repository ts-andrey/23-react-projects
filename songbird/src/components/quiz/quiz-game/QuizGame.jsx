import QuizAct from '../quiz-act/QuizAct';
import QuizDescr from '../quiz-descr/QuizDescr';

import classes from './QuizGame.module.css';

export default function QuizGame({ questionData, currentBird, setCurrentQuestion, selectedAnswers, setSelectedAnsers, isGuessed, setIsGuessed }) {

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
          <QuizDescr className={classes['quiz-descr']} currentBird={currentBird} isGuessed={isGuessed} />
          <QuizAct className={classes['quiz-act']} questionData={questionData} currentBird={currentBird} isGuessed={isGuessed} setIsGuessed={setIsGuessed} setSelectedAnsers={setSelectedAnsers} />
        </div>
        <div className={classes['button-wrapper']}>
          <button onClick={nextRoundHandler}>Next Question</button>
        </div>
      </div>
    </>
  )
}
