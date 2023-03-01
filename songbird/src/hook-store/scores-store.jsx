import { initStore } from './store';

export const configureScoresStore = () => {
  const actions = {
    UPDATE_SCORES: (state, amount) => ({ scores: state.scores + amount }),
    RESET_SCORES: (state) => ({ scores: 0 }),
    GUARD_SCORES: (state) => ({ isScoresGuarded: true }),
    UNGUARD_SCORES: (state) => ({ isScoresGuarded: false }),
  }

  initStore(actions, { scores: 0, isScoresGuarded: false });
}