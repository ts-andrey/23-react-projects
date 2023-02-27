import { initStore } from './store';

import classes from './answer.module.css';

export const configureGameProcessStore = () => {
  const actions = {
    GAME_START: (state) => ({ isPlaying: true }),
    GAME_END: (state) => ({ isPlaying: false }),
    GUESED_RIGHT: (state) => ({ isGuessed: true }),
    GUESED_WRONG: (state) => ({ isGuessed: false }),
    ADD_SELECTED_ANSWER: (state, newSelectedAnswer) => ({ selectedAnswers: [...state.selectedAnswers, newSelectedAnswer] }),
    RESET_SELECTED_ANSWERS_STYLES: (state) => {
      state.selectedAnswers.forEach(el => el.className = classes.answer);
    },
    CLEAR_SELECTED_ANSWERS: (state) => ({ selectedAnswers: [] })
  }

  initStore(actions, { isPlaying: false, isGuessed: false, selectedAnswers: [] });
}