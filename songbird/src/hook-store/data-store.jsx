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
    UPDATE_BIRDS_NAMES: (state) => ({ allBirdsNames: state.allBirdsData.map(birdsType => birdsType.map(bird => bird.name)).flat() }),
    UPDATE_APP_DATA_LANG: (state, payload) => {
      const { lang, route } = payload;
      const currLangData = birdsLangData[lang];
      const newBirdsData = currLangData[BIRDS_TYPES[route]] || [];
      const newCurrBird = newBirdsData[state.questionNumber];
      const newAllBirdNames = currLangData.map(birdsType => birdsType.map(bird => bird.name)).flat();

      return ({
        appLanguage: lang,
        allBirdsData: currLangData,
        birdsData: newBirdsData,
        currBird: newCurrBird,
        allBirdsNames: newAllBirdNames,
      })
    },
  }

  initStore(actions, {
    birdsData: undefined,
    currentBird: undefined,
    allBirdsNames: BIRDS_NAMES,
    allBirdsData: birdsDataEn,
    appLanguage: 'eng',
  });
}