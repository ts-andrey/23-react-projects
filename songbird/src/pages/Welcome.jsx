import classes from './Welcome.module.css';
import backgroundVideo from './../assets/backgroundVideo.mp4';

function Welcome() {
  return (
    <section className={classes.welcome}>
      <video className={classes.video} src={backgroundVideo} autoPlay loop muted> </video>
      <h1>Welcome to the Songbird App</h1>
      <h2>This is a quiz about birds. There you can find questions about different types of birds</h2>
      <h2>To proceed to the game please select Quiz in the main navigation and then choose the mode.</h2>
      <h3>I hope you will enjoy it</h3>
    </section>
  )
}
export default Welcome;