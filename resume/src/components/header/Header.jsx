import classes from './Header.module.css';
import HeaderNavigation from './headerNavigation/headerNavigation';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <HeaderNavigation />
      </header>
    </>
  )
}