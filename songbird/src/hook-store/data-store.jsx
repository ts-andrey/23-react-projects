import { birdsDataEn } from '../data/birdsData.en';
import { birdsDataRu } from '../data/birdsData.ru';
import { initStore } from './store';

import { BIRDS_TYPES } from '../util/constants';

const birdsLangData = {
  eng: birdsDataEn,
  ru: birdsDataRu,
}

const BIRDS_NAMES = birdsDataEn.map(el => el.map(el => el.name)).flat();

export const configureDataStore = () => {
  const actions = {
    UPDATE_DATA: (state, birdsRoute) => {
      const data = state.allBirdsData[BIRDS_TYPES[birdsRoute]] || [];
      return ({ birdsData: data, currentBird: data[state.questionNumber] })
    },
    UPDATE_CURRENT_BIRD: (state) => ({ currentBird: state.birdsData[state.questionNumber] }),
    UPDATE_BIRDS_NAMES: (state) => ({ allBirdsNames: state.birdsData.map(el => el.map(el => el.name)).flat() }),
    UPDATE_APP_LANG: (state, lang) => ({ appLanguage: lang, allBirdsData: birdsLangData[lang] }),
  }

  initStore(actions, {
    birdsData: undefined,
    currentBird: undefined,
    allBirdsNames: BIRDS_NAMES,
    allBirdsData: birdsDataEn,
    appLanguage: 'en',
  });
}