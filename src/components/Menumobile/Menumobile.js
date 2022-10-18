import './Menumobile.css';

import { Link } from 'react-router-dom';

const Menumobile = ({ menu }) => {
  return (
    <div>
      <div className={menu ? 'menu-mobile menu-mobile-open' : 'menu-mobile'}>
        <div className="menu-mobile-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/"> Pricing</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="menu-mobile-action">
          <ul>
            <li>
              <Link to="/auth">Login</Link>
            </li>
            <li className="btn">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menumobile;
