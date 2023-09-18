import classes from './About.module.css';

import Education from './education/Education';
import Intro from './intro/Intro';
import Personal from './personal/Personal';
import Skills from './skills/Skills';

export default function About() {
  return (
    <>
      <section className={classes.section}>
        <div className={classes['content-wrapper']}>
          <h1 className={classes['main-header']}>
            <span className={classes['main-header__text']}>Hello! My name is Andrei Tsakunou.</span>
            <span className={classes['main-header__text']}>I am a front-end developer.</span>
          </h1>
          <Personal />

          <h2 className={classes['sub-header']}>About myself</h2>
          <Intro />

          <h2 className={classes['sub-header']}>My skills</h2>
          <Skills />

          <h2 className={classes['sub-header']}>My qualifications</h2>
          <Education />
        </div>
      </section>
    </>
  )
}