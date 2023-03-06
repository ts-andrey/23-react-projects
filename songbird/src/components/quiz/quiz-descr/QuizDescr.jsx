import { useStore } from '../../../hook-store/store';

import classes from './QuizDescr.module.css';

import QuizAudio from './quiz-audio/QuizAudio';
import img from '../../../assets/bird_default.webp';

import { birdDataText } from './QuizDescr.langData';

export default function QuizDescr() {
  const globalState = useStore()[0];
  const { currentBird, isGuessed, appLanguage } = globalState;

  let description = <h2>{birdDataText.name[appLanguage]} ???</h2>;
  if (isGuessed) {
    description = (
      <>
        <h2><span className={classes['bird-data']}>{birdDataText.name[appLanguage]}</span>{currentBird.name}</h2>
        <h3><span className={classes['bird-data']}>{birdDataText.species[appLanguage]}</span>{currentBird.species}</h3>
        <p><span className={classes['bird-data']}>{birdDataText.description[appLanguage]}</span>{currentBird.description}</p>
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