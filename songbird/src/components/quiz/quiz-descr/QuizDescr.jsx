import QuizAudio from './quiz-audio/QuizAudio';

export default function QuizDescr({ isAnswerRight, birdsData }) {

  console.log('QuizDescr', { isAnswerRight, birdsData });
  return (
    <>
      {/* <div>
        <img src={isAnswerRight ? birdImgUrl : null} alt="bird image" />
      </div>
      <div>
        <div>
          <h2>{isAnswerRight ? '???' : birdName}</h2>
          <QuizAudio birdSoundUrl={birdSoundUrl} />
        </div>
        <p>{isAnswerRight ? birdDescription : null}</p>
      </div> */}
    </>
  )
}