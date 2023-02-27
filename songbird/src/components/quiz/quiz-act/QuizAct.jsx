import { useStore } from '../../../hook-store/store';

import classes from './QuizAct.module.css';

import correctSound from './../../../assets/correct.webm';
import wrongSound from './../../../assets/wrong.webm';

const isAnswerRight = (answerNumber, rightAnswerNumber) => Number(answerNumber) === Number(rightAnswerNumber)

const setAnswerClass = (isAnswerRight) => {
  return isAnswerRight ? `${classes.answer} ${classes.right}` : `${classes.answer} ${classes.wrong}`;
}

const playAnswerSound = (isAnswerRight) => {
  const answerSound = new Audio(isAnswerRight ? correctSound : wrongSound);
  answerSound.play();
}

export default function QuizAct() {
  const [globalState, dispatchAction] = useStore();

  const { isGuessed, questionData } = globalState;

  const { randomAnswers, correctAnswerNumber } = questionData;

  function answerHandler(event) {
    const el = event.target;
    if (!isGuessed) {
      dispatchAction('ADD_SELECTED_ANSWER', el);

      const isCorrect = isAnswerRight(el.id, correctAnswerNumber);
      el.className = setAnswerClass(isCorrect);
      playAnswerSound(isCorrect);

      if (isCorrect) {
        dispatchAction('GUESED_RIGHT');
      }
    }
  }

  return (
    <>
      <ul className={classes['answer-list']} >
        {randomAnswers.map((el, index) => <li
          key={index}
          id={index}
          className={classes.answer}
          onClick={answerHandler}
        >{el}</li>)}
      </ul>
    </>
  )
}