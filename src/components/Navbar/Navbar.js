import './Navbar.css';
import Icon from '../../assets/image/menu.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">WALLET</Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/auth">Home</Link>
          </li>
          <li>
            <Link to="/auth">Pricing</Link>
          </li>
          <li>
            <Link to="/auth">Services</Link>
          </li>
          <li>
            <Link to="/auth">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="menu-icon">
        <img src={Icon} alt="Icon" />
      </div>
      <div className="auth">
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link className="nav-register" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
