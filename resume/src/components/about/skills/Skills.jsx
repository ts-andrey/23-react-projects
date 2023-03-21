import { Link } from 'react-router-dom';

import classes from './Skills.module.css';

const SKILL_BG_COLOR = '#35e21e';
const skillLevelSetter = (percent) => `linear-gradient(to top, ${SKILL_BG_COLOR} 0% ${percent}%, #0b0c10 ${percent}% 100%)`;

export default function Skills() {
  return (
    <>
      <article className={classes.skills}>
        <div className={classes.skillset}>
          <Link className={classes.skill} to={'https://developer.mozilla.org/en-US/docs/Web/HTML'} target='_blank'>
            <div style={{ background: skillLevelSetter(80) }}></div>
            <p>HTML5</p>
          </Link>

          <Link className={classes.skill} to={'https://www.markdownguide.org/basic-syntax'} target='_blank'>
            <div style={{ background: skillLevelSetter(80) }}></div>
            <p>Markdown</p>
          </Link>

          <Link className={classes.skill} to={'https://developer.mozilla.org/en-US/docs/Web/CSS'} target='_blank'>
            <div style={{ background: skillLevelSetter(80) }}></div>
            <p>CSS3</p>
          </Link>

          <Link className={classes.skill} to={'https://sass-lang.com/documentation'} target='_blank'>
            <div style={{ background: skillLevelSetter(60) }}></div>
            <p>Sass</p>
          </Link>

          <Link className={classes.skill} to={'https://javascript.info'} target='_blank'>
            <div style={{ background: skillLevelSetter(70) }}></div>
            <p>JavaScript</p>
          </Link>

          <Link className={classes.skill} to={'https://react.dev/reference/react'} target='_blank'>
            <div style={{ background: skillLevelSetter(50) }}></div>
            <p>React</p>
          </Link>

          <Link className={classes.skill} to={'https://redux.js.org'} target='_blank'>
            <div style={{ background: skillLevelSetter(35) }}></div>
            <p>Redux</p>
          </Link>

          <Link className={classes.skill} to={'https://git-scm.com'} target='_blank'>
            <div style={{ background: skillLevelSetter(40) }}></div>
            <p>Git</p>
          </Link>

          <Link className={classes.skill} to={'https://docs.github.com/en'} target='_blank'>
            <div style={{ background: skillLevelSetter(50) }}></div>
            <p>Github</p>
          </Link>

          <Link className={classes.skill} to={'https://code.visualstudio.com'} target='_blank'>
            <div style={{ background: skillLevelSetter(60) }}></div>
            <p>VSCode</p>
          </Link>

          <Link className={classes.skill} to={'https://www.figma.com'} target='_blank'>
            <div style={{ background: skillLevelSetter(45) }}></div>
            <p>Figma</p>
          </Link>
        </div>

        <h3 className={classes['sub-header']}>My languages</h3>
        <div className={classes.langs}>
          <Link className={classes.lang} to={'https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=090000168045bb52'} target='_blank'>
            <span className={classes['lang-descr']}>English:</span>
            <span className={classes['lang-level']}>B1+</span>
          </Link>

          <Link className={classes.lang} to={'https://languages-cultures.uq.edu.au/files/16508/CEFR%20mapping_Russian%20for%20web%281%29.pdf'} target='_blank'>
            <span className={classes['lang-descr']}>Russian:</span>
            <span className={classes['lang-level']}>C2</span>
          </Link>
        </div>
      </article>
    </>
  )
}