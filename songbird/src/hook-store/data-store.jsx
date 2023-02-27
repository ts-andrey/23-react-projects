import BirdsData from '../data/birdsData';
import { initStore } from './store';

import { BIRDS_TYPES } from '../util/constants';

const BIRDS_NAMES = BirdsData.map(el => el.map(el => el.name)).flat();

export const configureDataStore = () => {
  const actions = {
    UPDATE_DATA: (state, birdsType) => {
      const data = BirdsData[BIRDS_TYPES[birdsType]] || [];
      return ({ birdsData: data, currentBird: data[state.questionNumber] })
    },
    UPDATE_CURRENT_BIRD: (state) => ({ currentBird: state.birdsData[state.questionNumber] }),
  }

  initStore(actions, { birdsData: undefined, currentBird: undefined, allBirdsNames: BIRDS_NAMES });
}