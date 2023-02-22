function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isAnswerUnique(answerArr: string[], rightAnswer: string, newAnswer: string) {
  return !answerArr.includes(newAnswer) && rightAnswer !== newAnswer;
}

export function getRandomAnswers(allAnswers: string[], rightAnswer: string, answerAmount: number) {
  const answerArr = [];
  const rightAnswerNumber = getRandomNumberBetween(0, answerAmount - 1);

  while (answerArr.length < answerAmount) {
    if (rightAnswerNumber === answerArr.length) {
      answerArr.push(rightAnswer);
    } else {
      const randomAnswerNumber = getRandomNumberBetween(0, 35);
      const newAnswer = allAnswers[randomAnswerNumber];

      if (isAnswerUnique(answerArr, rightAnswer, newAnswer)) {
        answerArr.push(newAnswer);
      }
    }
  }
  return [answerArr, rightAnswerNumber, rightAnswer];
}
