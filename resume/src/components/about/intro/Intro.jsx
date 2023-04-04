import classes from './Intro.module.css';

export default function Intro() {
  return (
    <>
      <article className={classes.about}>
        <p className={classes['about-text']}>
          I am a graduate of Gomel State Technical University and I have a master's degree in this field. So I can proudly say that I have technical mind with which I can solve almost any problem. It's easy for me to pay attention to technical details and find some issues that others may miss.
        </p>
        <p className={classes['about-text']}>
          I like to listen music and spend my time to create new applications or websites and each time I try to use different approaches. That greatly helps me to learn some new tricks and find best practices. Sometimes I rework my old projects. I also like to spend some time in CodeWars - this is a great reasorce for practice and inspiration. I am attracted to music - it makes me more happy and helps to focus on the job. I honestly can't imagine my life without music. In weekends I like to play board games with my friends, it also raises my mood and often brings inspiration and unexpected ways to solve some issues on the job and even in daily life.
        </p>
        <p className={classes['about-text']}>
          My current goal is to become a solid full-stack developer, because I like to work on interesting projects and in my mind full-stack developers able to choose more freely than front-end or back-end developers.
          I like to push my limits and do something I never did before, even if I won't succed right ahead it will help me to learn something new and broad my mind a little. Along this path, I hone my existing skills and master new ones - this opens up a lot of new opportunities for improving my code, UI and UX.
        </p>
      </article>
    </>
  )
}