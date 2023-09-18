import { Link } from 'react-router-dom';

import classes from './Course.module.css';

export default function Course({ name, info, link }) {
  return (
    <div className={classes.place}>
      <Link to={link} target='_blank'>
        <p>{name}</p>
        <span>{info}</span>
      </Link>
    </div>
  )
}