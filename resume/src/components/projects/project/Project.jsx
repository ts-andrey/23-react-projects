import { Link } from 'react-router-dom';
import classes from './Project.module.css';

export default function Project({ projectName, projectDescription, imgSrc, imgName, linkTo }) {
  return (
    <>
      <div className={classes.project}>
        <Link to={linkTo} target='_blank'>
          <img src={imgSrc} alt={imgName} />
        </Link>
        <div className={classes['project-info']}>
          <h3 className={classes['project-header']}>{projectName}</h3>
          <div className={classes['project-description']}>{projectDescription}</div>
        </div>
      </div>
    </>
  )
}