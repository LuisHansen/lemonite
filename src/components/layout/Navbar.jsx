import { NavLink, Link } from 'react-router-dom';
import Button from '../ui/Button';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">Troca Aí</Link>
        <nav className="navbar__nav">
          <NavLink
            to="/discover"
            className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}
          >
            Discover
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}
          >
            How it Works
          </NavLink>
          <NavLink
            to="/community"
            className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}
          >
            Community
          </NavLink>
        </nav>
        <div className="navbar__actions">
          <button className="navbar__icon-btn" aria-label="Favorites">♡</button>
          <button className="navbar__icon-btn" aria-label="Notifications">🔔</button>
          <Button variant="primary" size="sm">List a Skill</Button>
          <div className="navbar__avatar">LH</div>
        </div>
      </div>
    </header>
  );
}
