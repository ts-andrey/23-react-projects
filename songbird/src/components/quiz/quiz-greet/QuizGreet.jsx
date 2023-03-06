import { useStore } from '../../../hook-store/store';
import { quizGreetHeaderText } from './QuizGreet.langData';
import classes from './QuizGreet.module.css';

export default function QuizGreet() {
  const globalState = useStore()[0];
  const { appLanguage } = globalState;

  return (
    <h1 className={classes.greet}>{quizGreetHeaderText[appLanguage]}</h1>
  )
}