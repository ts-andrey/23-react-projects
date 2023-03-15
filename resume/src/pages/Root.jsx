import { Outlet } from 'react-router-dom'

import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}