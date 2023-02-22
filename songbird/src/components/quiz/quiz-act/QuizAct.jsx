import classes from './QuizAct.module.css'

const isAnswerRight = (answerNumber, rightAnswerNumber) => Number(answerNumber) === Number(rightAnswerNumber)

const setAnswerClass = (isAnswerRight) => {
  return isAnswerRight ? `${classes.answer} ${classes.right}` : `${classes.answer} ${classes.wrong}`;
}


const playAnswerSound = (isAnswerRight) => {
  return isAnswerRight ? `play right` : `play wrong`;
}

export default function QuizAct({ questionData, isGuessed, setIsGuessed, currentBird, setSelectedAnsers }) {
  const { random, correct, position } = questionData;

  function answerHandler(event) {
    const el = event.target;
    if (!isGuessed) {
      const isCorrect = isAnswerRight(el.id, position);

      setSelectedAnsers((prevElements) => [...prevElements, el]);
      el.className = setAnswerClass(isCorrect);
      playAnswerSound(isCorrect);

      if (isCorrect) {
        setIsGuessed(true);
      }
    }

  }

  return (
    <>
      <ul className={classes['answer-list']} >
        {random.map((el, index) => <li
          key={index}
          id={index}
          className={classes.answer}
          onClick={answerHandler}
        >{el}</li>)}
      </ul>
    </>
  )
}