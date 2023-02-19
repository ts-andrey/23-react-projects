
import classes from './Quizlet.module.css';

import Quiz from '../components/quiz/Quiz';

function Quizlet() {
  return (
    <section className={classes.flexbox}>
      <Quiz />
    </section>
  )
}
export default Quizlet;