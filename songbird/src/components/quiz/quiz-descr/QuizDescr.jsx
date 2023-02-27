import { useStore } from '../../../hook-store/store';

import classes from './QuizDescr.module.css';

import QuizAudio from './quiz-audio/QuizAudio';
import img from '../../../assets/bird_default.webp';

export default function QuizDescr() {
  const globalState = useStore()[0];
  const { currentBird, isGuessed } = globalState;

  let description = <h2>Name: ???</h2>;
  if (isGuessed) {
    description = (
      <>
        <h2><span className={classes['bird-data']}>Name:</span>{currentBird.name}</h2>
        <h3><span className={classes['bird-data']}>Species:</span>{currentBird.species}</h3>
        <p><span className={classes['bird-data']}>Description:</span>{currentBird.description}</p>
      </>
    )
  }

  return (
    <div className={classes.description}>
      <div className={classes['image-wrapper']}>
        <img src={isGuessed ? currentBird.image : img} alt="bird image" />
      </div>
      <div className={classes['bird-data__wrapper']}>
        <div>
          <QuizAudio birdSoundUrl={currentBird.audio} />
          {description}
        </div>
      </div>
    </div>
  )
}