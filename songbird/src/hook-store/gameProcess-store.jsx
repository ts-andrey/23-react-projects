import { initStore } from './store';

import classes from './answer.module.css';

export const configureGameProcessStore = () => {
  const actions = {
    GAME_START: (state) => ({ isPlaying: true }),
    RESET_GAME: (state) => ({ isPlaying: false }),

    GUESED_RIGHT: (state) => ({ isGuessed: true }),
    RESET_GUESED: (state) => ({ isGuessed: false }),

    SEQUENCE_SUCCESS: (state) => ({ isSequenceCleared: true }),
    RESET_SEQUENCE: (state) => ({ isSequenceCleared: false }),

    ADD_SELECTED_ANSWER: (state, newSelectedAnswer) => ({ selectedAnswers: [...state.selectedAnswers, newSelectedAnswer] }),
    RESET_SELECTED_ANSWERS_STYLES: (state) => {
      state.selectedAnswers.forEach(el => el.className = classes.answer);
    },
    CLEAR_SELECTED_ANSWERS: (state) => ({ selectedAnswers: [] })
  }

  initStore(actions, { isPlaying: false, isGuessed: false, selectedAnswers: [], isSequenceCleared: false });
}