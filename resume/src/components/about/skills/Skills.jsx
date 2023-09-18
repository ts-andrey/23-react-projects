import { Link } from 'react-router-dom';

import classes from './Skills.module.css';
import Skill from './Skill';

import { languageSkills, librarySkills, methodologySkills, personalSkills, technologySkillsData, } from './skills.data';

export default function Skills() {
  return (
    <>
      <article className={classes.skills}>
       <h3 className={classes['sub-header']}>My skillset:</h3>
        <div className={classes.skillset}>
          {technologySkillsData.map((el, index) =>
            <Skill
              skill={el.skill}
              link={el.skillLink}
              key={index}
            />
          )}
        </div>

       <h3 className={classes['sub-header']}>Methodological skills:</h3>
        <div className={classes.skillset}>
          {methodologySkills.map((el, index) =>
            <Skill
              skill={el.skill}
              key={index}
            />
          )}
        </div>

        <h3 className={classes['sub-header']}>Libraries that I worked with:</h3>
        <div className={classes.skillset}>
          {librarySkills.map((el, index) =>
            <Skill
              skill={el.library}
              link={el.libraryLink}
              key={index}
            />
          )}
        </div>

        <h3 className={classes['sub-header']}>My personal skills:</h3>
        <div className={classes.skillset}>
          {personalSkills.map((el, index) =>
            <Skill
              skill={el.skill}
              key={index}
            />
          )}
        </div>

        <h3 className={classes['sub-header']}>My languages:</h3>
        <div className={classes.skillset}>
          {languageSkills.map((el, index) =>
            <Skill
              skill={el.lang}
              listenLevel={el.listenLevel}
              speakLevel={el.speakLevel}
              writeLevel={el.writeLevel}
              link={el.langInfoLink}
              key={index}
            />
          )}
        </div>
      </article>
    </>
  )
}