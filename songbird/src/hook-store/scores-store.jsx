import { initStore } from './store';

export const configureScoresStore = () => {
  const actions = {
    UPDATE_SCORES: (state, amount) => ({ scores: state.counter + amount }),
    RESET_SCORES: (state) => ({ scores: 0 }),
  }

  initStore(actions, { scores: 0 })
}