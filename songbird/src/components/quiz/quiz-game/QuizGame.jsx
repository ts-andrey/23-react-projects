import QuizAct from '../quiz-act/QuizAct';
import QuizDescr from '../quiz-descr/QuizDescr';

export default function QuizGame({ birdsData }) {
  console.log(birdsData);
  return (
    <>
      <QuizDescr />
      <QuizAct />
    </>
  )
}
