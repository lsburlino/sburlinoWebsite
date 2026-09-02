import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          LS<span className="logo-dot">.</span>
        </NavLink>
        <div className="navbar-right">
          <div className="navbar-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Projects
            </NavLink>
            <NavLink to="/cool-things" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Cool Things
            </NavLink>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
