import { Link } from 'react-router-dom';

import classes from './Skill.module.css';

export default function Skill(data) {
  if (data.listenLevel) {
    return (
      <Link
        className={classes.skill}
        to={data.link}
        target='_blank'
      >
        <h4 className={classes.lang}>{data.skill}</h4>
        <div className={classes['lang-descr']}>
          <span className={classes['lang-info']}>listening:</span>
          <span className={classes['lang-level']}>{data.listenLevel}</span>
        </div>
        <div className={classes['lang-descr']}>
          <span className={classes['lang-info']}>speaking:</span>
          <span className={classes['lang-level']}>{data.speakLevel}</span>
        </div>
        <div className={classes['lang-descr']}>
          <span className={classes['lang-info']}>writing:</span>
          <span className={classes['lang-level']}>{data.writeLevel}</span>
        </div>
      </Link>
    )
  }
  else if (data.link && data.link !== '') {
    return (
      <Link
        className={classes.skill}
        to={data.link}
        target='_blank'
      >
        <p>{data.skill}</p>
      </Link>
    )
  }
  else {
    return (
      <div className={classes.skill}>
        <p>{data.skill}</p>
      </div>
    )
  }
}
