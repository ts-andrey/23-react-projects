import classes from './Projects.module.css';

export default function Projects() {
  return (
    <>
      <section className={classes.section}>
        <div className={classes['content-wrapper']}>
          <h1 className={classes['main-header']}>My projects:</h1>
          <article className={classes['projects']}>
            <h2 className={classes['sub-header']}>My early projects from wich I started to grow as a specialist:</h2>
          </article>
          <article className={classes['projects']}>
            <h2 className={classes['sub-header']}>My more mature projects which I created after I gained some skills and knowledge:</h2>
          </article>
          <article className={classes['projects']}>
            <h2 className={classes['sub-header']}>My React projects: </h2>
          </article>
        </div>
      </section>
    </>
  )
}