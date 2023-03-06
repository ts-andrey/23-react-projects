import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../../hook-store/store';

import classes from './EndRoundModal.module.css';
import ScoreModal from './score-modal/ScoreModal';

import { endRoundHeaderText, endRoundSubheaderText, btnContinueText, btnStopText } from './EndRoundModal.langData';

export default function EndRoundModal({ resetGameState }) {
  const [globalState, dispatchAction] = useStore();
  const navigate = useNavigate();

  const { isSequenceCleared, nextRoute, remainRoutes, isContentAvailable, isScoreModalShown, appLanguage } = globalState;

  function nextSectionHandler() {

    if (isSequenceCleared && remainRoutes.length > 0 && isContentAvailable) {
      dispatchAction('GUARD_SCORES');
      resetGameState();
      dispatchAction('RESET_SEQUENCE');
      dispatchAction('RESET_QUEST_PROGRESS');

      dispatchAction('GUARD_SCORES');

      navigate(nextRoute);
    }
  }

  function endGameHandler() {
    console.log('intro', { isSequenceCleared, isScoreModalShown });
    dispatchAction('SHOW_SCORE_MODAL');

    console.log('before', { isSequenceCleared, isScoreModalShown });
  }

  return (
    <>
      <div className={classes.modal}>
        <h2>{endRoundHeaderText[appLanguage]}</h2>
        <h3>{endRoundSubheaderText[appLanguage]}</h3>
        <div className={classes['button-wrapper']}>
          <button
            className={`${classes.button} ${classes['margin-left']} `}
            onClick={nextSectionHandler}
          >
            {btnContinueText[appLanguage]}
          </button>
          <button
            className={`${classes.button} ${classes['margin-left']}`}
            onClick={endGameHandler}
          >
            {btnStopText[appLanguage]}
          </button>
        </div>
      </div>
      <div className={classes['modal__overlay']}></div>
      {isScoreModalShown && <ScoreModal resetGameState={resetGameState} />}
    </>
  )
}