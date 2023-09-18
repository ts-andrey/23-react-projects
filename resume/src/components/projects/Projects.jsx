import classes from './Projects.module.css';

import { preProjects, projects, reactProjects, vueProjects } from './projects.data';

import Project from './project/Project';

export default function Projects() {
  return (
    <>
      <section className={classes.section}>
        <div className={classes['content-wrapper']}>
          <h1 className={classes['main-header']}>My projects:</h1>

          <article className={classes['projects']}>
            <h2 className={classes['sub-header']}>My early projects from wich I started to grow as a specialist:</h2>
            {
              preProjects.map((el, index) =>
                <Project
                  key={`pre-${index}`}
                  projectName={el.projectName}
                  projectDescription={el.projectDescription}
                  imgSrc={el.imgSrc}
                  imgName={el.imgName}
                  linkTo={el.linkTo}
                />)
            }
          </article>

          <article className={classes['projects']}>
            <h2 className={classes['sub-header']}>My more mature projects which I created after I gained some skills and knowledge:</h2>
            {
              projects.map((el, index) =>
                <Project
                  key={`pre-${index}`}
                  projectName={el.projectName}
                  projectDescription={el.projectDescription}
                  imgSrc={el.imgSrc}
                  imgName={el.imgName}
                  linkTo={el.linkTo}
                />)
            }
          </article>

          <article className={classes['projects']}>
            <h2 className={classes['sub-header']}>My React projects: </h2>
            {
              reactProjects.map((el, index) =>
                <Project
                  key={`pre-${index}`}
                  projectName={el.projectName}
                  projectDescription={el.projectDescription}
                  imgSrc={el.imgSrc}
                  imgName={el.imgName}
                  linkTo={el.linkTo}
                />)
            }
          </article>

          <article className={classes['projects']}>
            <h2 className={classes['sub-header']}>My Vue projects: </h2>
            {
              vueProjects.map((el, index) =>
                <Project
                  key={`pre-${index}`}
                  projectName={el.projectName}
                  projectDescription={el.projectDescription}
                  imgSrc={el.imgSrc}
                  imgName={el.imgName}
                  linkTo={el.linkTo}
                />)
            }
          </article>
        </div>
      </section>
    </>
  )
}