import { initStore } from './store';

import classes from './answer.module.css';

import { SECTION_ROUTES } from '../util/constants';
import { getRandomNumberBetween } from '../util/getRandomAnswers';

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
    CLEAR_SELECTED_ANSWERS: (state) => ({ selectedAnswers: [] }),

    UPDATE_CURRENT_ROUTE: (state, route) => ({ currentRoute: route }),
    UPDATE_ROUTES: (state) => {
      let routes = [];
      let randomRoute;
      if (state.remainRoutes.length > 1) {
        routes = state.remainRoutes.filter(el => el !== state.currentRoute);
        const randomRouteNumber = getRandomNumberBetween(0, routes.length - 1);
        randomRoute = routes[randomRouteNumber];
      }
      if (state.remainRoutes.length === 1) {
        randomRoute = state.remainRoutes[0];
      }

      return ({ remainRoutes: routes, nextRoute: randomRoute });
    },

    CHECK_CONTENT_ABAILABLE: (state) => ({ isContentAvailable: state.remainRoutes.length > 0 ? true : false }),
    SHOW_SCORE_MODAL: (state) => ({ isScoreModalShown: true }),
    HIDE_SCORE_MODAL: (state) => ({ isScoreModalShown: false }),
  }

  initStore(actions, {
    isPlaying: false,
    isGuessed: false,
    selectedAnswers: [],
    isSequenceCleared: false,
    currentRoute: '',
    nextRoute: '',
    remainRoutes: [...SECTION_ROUTES],
    isContentAvailable: true,
    isScoreModalShown: false,
  });
}