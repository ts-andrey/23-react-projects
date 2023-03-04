import { useStore } from '../../hook-store/store';

import classes from './Score.module.css';

export default function Score() {
  const globalState = useStore()[0];
  const { scoreData } = globalState;

  return (
    <div className={classes['scores__wrapper']}>
      <table className={classes.scores}>
        <thead className={'scores__header'}>
          <tr className={classes['scores__row']}>
            <th>User Name</th>
            <th>Scores</th>
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