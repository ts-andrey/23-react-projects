import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

import Header from '../components/header/Header';

import classes from './Root.module.css';

import { configureDataStore } from '../hook-store/data-store';
import { configureGameProcessStore } from '../hook-store/gameProcess-store';
import { configureQuestionStore } from '../hook-store/question-store';
import { configureScoresStore } from '../hook-store/scores-store';

configureDataStore();
configureGameProcessStore();
configureQuestionStore();
configureScoresStore();

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