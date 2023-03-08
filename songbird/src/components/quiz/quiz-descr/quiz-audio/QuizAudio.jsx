import classes from './QuizAudio.module.css';

function QuizAudio({ birdSoundUrl }) {
  return (
    <>
      <audio controls src={birdSoundUrl}></audio>
    </>
  )
}

export default QuizAudio;