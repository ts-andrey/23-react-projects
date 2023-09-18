import { Link } from 'react-router-dom';

import classes from './Contact.module.css';

export default function Contact({ type, value, link }) {
  return (
    <Link
      className={classes.link}
      to={link}
      target={'_blank'}
    >
      <span className={classes['info-descr']}>{type}:</span>
      <span className={classes['info-value']}>{value}</span>
    </Link>
  )
}