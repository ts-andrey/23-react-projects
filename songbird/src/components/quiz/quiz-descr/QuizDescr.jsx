import classes from './QuizDescr.module.css';

import QuizAudio from './quiz-audio/QuizAudio';

export default function QuizDescr({ currentBird, isGuessed }) {


  return (
    <div className={classes.description}>
      <div className={classes['image-wrapper']}>
        <img src={isGuessed ? currentBird.image : null} alt="bird image" />
      </div>
      <div>
        <div>
          <h2>{isGuessed ? currentBird.name : '???'}</h2>
          <QuizAudio birdSoundUrl={currentBird.audio} />
        </div>
        <p>{isGuessed ? currentBird.description : null}</p>
      </div>
    </div>
  )
}