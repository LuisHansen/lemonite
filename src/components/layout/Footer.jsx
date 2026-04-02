import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="footer__logo">Troca Aí</Link>
        <nav className="footer__nav">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Safety</a>
          <a href="#">Support</a>
        </nav>
        <p className="footer__copy">© 2024 Troca Aí. The Curated Commons.</p>
      </div>
    </footer>
  );
}
