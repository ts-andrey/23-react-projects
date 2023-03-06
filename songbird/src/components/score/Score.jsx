import { useStore } from '../../hook-store/store';

import classes from './Score.module.css';
import { tableHeaderNameText, tableHeaderScoreText } from './Score.langData';

export default function Score() {
  const globalState = useStore()[0];
  const { scoreData, appLanguage } = globalState;

  return (
    <div className={classes['scores__wrapper']}>
      <table className={classes.scores}>
        <thead className={'scores__header'}>
          <tr className={classes['scores__row']}>
            <th>{tableHeaderNameText[appLanguage]}</th>
            <th>{tableHeaderScoreText[appLanguage]}</th>
          </tr>
        </thead>
        <tbody>
          {scoreData.map((el, index) => (
            <tr key={index} className={classes['scores__row']}>
              <td className={classes['scores__cell']}>{el.name}</td>
              <td className={classes['scores__cell']}>{el.score}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}