import classes from './NotFound.module.css'

function NotFound() {
  return (
    <div className={classes.center}>
      <h1>404 error</h1>
      <h2>Page was not found</h2>
      <p className={classes.text}>Try use navigation to navigate to existing route.</p>
    </div>
  )
}
export default NotFound;