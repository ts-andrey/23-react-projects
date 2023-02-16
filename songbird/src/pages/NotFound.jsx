import classes from './NotFound.module.css'

function NotFound() {
  return (
    <div className={classes.center}>
      <h1>Page was not found</h1>
      <p className={classes.text}>Try use navigation to navigate to existing route.</p>
    </div>
  )
}
export default NotFound;