import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        <li>© by Andrei Tsakunou</li>
      </ul>
    </footer>
  )
}
export default Footer;