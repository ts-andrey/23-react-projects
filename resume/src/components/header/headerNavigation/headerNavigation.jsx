import { NavLink } from 'react-router-dom';

export default function HeaderNavigation() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to={'about'}>About</NavLink></li>
          <li><NavLink to={'projects'}>Projects</NavLink></li>
          <li><NavLink to={'code-samples'}>Code Samples</NavLink></li>
        </ul>
      </nav>
    </>
  )
}