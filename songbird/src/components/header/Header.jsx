import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={'/'}>
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink to={'/quiz'}>
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink to={'/scores'}>
            Scores
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
export default Header;