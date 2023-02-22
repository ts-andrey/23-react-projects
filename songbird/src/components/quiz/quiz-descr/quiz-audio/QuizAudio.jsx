function QuizAudio({ birdSoundUrl }) {
  return (
    <>
      <div>
        <audio controls src={birdSoundUrl}></audio>
      </div>
    </>
  )
}

export default QuizAudio;