import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

import Header from '../components/header/Header';

import classes from './Root.module.css';

function Root() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Root;