import { Link } from 'react-router-dom';

import classes from './Education.module.css';

export default function Education() {
  return (
    <>
      <article className={classes.education}>
        <div className={classes.place}>
          <Link to={'https://www.udemy.com/course/react-the-complete-guide-incl-redux/'} target='_blank'>
            <p>React</p>
            <span>Udemy, 2022/2023</span>
          </Link>
        </div>

        <div className={classes.place}>
          <Link to={'https://rs.school/js/'} target='_blank'>
            <p>JavaScript/Front-end</p>
            <span>The Rolling Scopes School, 2022</span>
          </Link>
        </div>

        <div className={classes.place}>
          <Link to={'https://rs.school/js-stage0/'} target='_blank'>
            <p>JavaScript/Front-end (basics)</p>
            <span>The Rolling Scopes School, 2021</span>
          </Link>
        </div>

        <div className={classes.place}>
          <Link to={'https://en.gstu.by/faculties/power-engineering-faculty'} target='_blank'>
            <p>Master of science in electiral engeneering</p>
            <span>Sukhoi State Technical University Of Gomel, 2014-2016</span>
          </Link>
        </div>

        <div className={classes.place}>
          <Link to={'https://en.gstu.by/faculties/power-engineering-faculty'} target='_blank'>
            <p>Bachelor of science in electiral engeneering</p>
            <span>Sukhoi State Technical University Of Gomel, 2009-2014</span>
          </Link>
        </div>
      </article>
    </>
  )
}