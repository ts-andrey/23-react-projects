import { Outlet } from 'react-router-dom';
import QuizNav from '../components/quiz/quiz-nav/QuizNav';

import classes from './Quizlet.module.css';

function Quizlet() {
  return (
    <section className={classes.flexbox}>
      <QuizNav />
      <Outlet />
    </section>
  )
}
export default Quizlet;