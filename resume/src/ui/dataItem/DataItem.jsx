import { Link } from 'react-router-dom';

import classes from './DataItem.module.css';

export default function DataItem({
  property,
  description,
  listenLevel,
  speakLevel,
  writeLevel,
  type = 'skill',
  link
}) {
  const DATA_ITEM_CLASSNAME = type === 'course' ? `${classes.course}` : type === 'contact' ? `${classes.contact}` : `${classes.skill}`;
  let content = <span>{property}</span>;

  if (listenLevel) {
    content = <>
      <h4 className={classes.lang}>{property}</h4>
      <div className={classes['lang-descr']}>
        <span className={classes['lang-info']}>listening:</span>
        <span className={classes['lang-level']}>{listenLevel}</span>
      </div>
      <div className={classes['lang-descr']}>
        <span className={classes['lang-info']}>speaking:</span>
        <span className={classes['lang-level']}>{speakLevel}</span>
      </div>
      <div className={classes['lang-descr']}>
        <span className={classes['lang-info']}>writing:</span>
        <span className={classes['lang-level']}>{writeLevel}</span>
      </div>
    </>
  }
  else if (description) {
    content = <>
      <span>{property}</span>
      <span>{description}</span>
    </>
  }

  if (link) {
    return (
      <Link
        className={DATA_ITEM_CLASSNAME}
        to={link}
        target='_blank'
      >
        {content}
      </Link>
    )
  }
  else {
    return (
      <div className={DATA_ITEM_CLASSNAME}>
        {content}
      </div>
    )
  }
}