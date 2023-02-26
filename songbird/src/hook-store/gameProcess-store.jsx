import { initStore } from './store';

export const configureGameProcessStore = () => {
  const actions = {
    GAME_START: (state) => ({ isPlaying: true }),
    GAME_RESET: (state) => ({ isPlaying: false }),
  }

  initStore(actions, { isPlaying: false });
}