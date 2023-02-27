import { initStore } from './store';
import { getRandomAnswers } from '../util/getRandomAnswers';

import { GAME_MODES } from '../util/constants';

export const configureQuestionStore = () => {
  const actions = {
    NEXT_QUESTION: (state) => {
      if (state.questionNumber < 5) {
        const [randomAnswers, correctAnswerNumber, correctAnswer] = getRandomAnswers(state.allBirdsNames, state.currentBird?.name, state.answerAmount);
        return ({ questionNumber: state.questionNumber + 1, questionData: { randomAnswers, correctAnswer, correctAnswerNumber } });
      }
    },

    RESET_QUEST_PROGRESS: (state) => ({ questionNumber: 0 }),

    UPDATE_QUESTION_DATA: (state) => {
      const [randomAnswers, correctAnswerNumber, correctAnswer] = getRandomAnswers(state.allBirdsNames, state.currentBird?.name, state.answerAmount);
      return ({ questionData: { randomAnswers, correctAnswer, correctAnswerNumber } })
    },

    SET_DIFFICULTY: (state, mode) => ({ answerAmount: GAME_MODES[mode] })
  }

  initStore(actions, { questionNumber: 0, questionData: undefined, answerAmount: GAME_MODES.easy })
}