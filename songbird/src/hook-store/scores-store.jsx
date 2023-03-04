import { initStore } from './store';

const DUMMY_SCORE_DATA = [
  { name: 'tester', score: 24 },
  { name: 'dummy', score: 6 },
];

export const configureScoresStore = () => {
  const actions = {
    UPDATE_SCORES: (state, amount) => ({ scores: state.scores + amount }),
    RESET_SCORES: (state) => ({ scores: 0 }),
    GUARD_SCORES: (state) => ({ isScoresGuarded: true }),
    UNGUARD_SCORES: (state) => ({ isScoresGuarded: false }),
    UPDATE_SCORE_DATA: (state, newData) => ({ scoreData: [...state.scoreData, newData].sort((a, b) => b.score - a.score) }),
  }

  initStore(actions, { scores: 0, isScoresGuarded: false, scoreData: DUMMY_SCORE_DATA });
}