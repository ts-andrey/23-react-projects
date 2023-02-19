function QuizAudio({ birdSoundUrl }) {
  return (
    <>
      <div>
        <audio src={birdSoundUrl}></audio>
      </div>
    </>
  )
}

export default QuizAudio;