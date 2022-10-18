import './Navbar.css';
import IconOpen from '../../assets/image/menu.svg';
import IconClose from '../../assets/image/close.svg';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import Menumobile from '../Menumobile/Menumobile';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleIcon = (e) => {
    !menu ? setMenu(true) : setMenu(false);
  };

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
        <img
          onClick={handleIcon}
          src={!menu ? IconOpen : IconClose}
          alt="Icon"
        />
        <Menumobile menu={menu} />
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
