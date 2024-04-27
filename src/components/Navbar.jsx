import { navbar } from '../Data';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavbarList from './NavbarList';
import { useState } from 'react';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
         const toggleNavbar = () => {
           setShowNavbar(!showNavbar);

         };

  return (

      <>
        <span className="nav-btn" onClick={toggleNavbar}>
          <i>{showNavbar ? '': <FaBars />}</i>
        </span>

        <nav className={`navbar ${showNavbar ? 'showNav' : ''}`} id="navbar">
          <header className="navbar-header">
            <span className="nav-close-btn" onClick={toggleNavbar}>
              <i>
                <FaTimes />
              </i>
            </span>
          </header>
          <ul>
            {navbar.map((item) => (
              <li key={item.id} className="nav-items">
                <a className="nav-item" href={item.href}>
                  {item.slug}
                </a>
              </li>
            ))}
          </ul>
        </nav>
     
    </>
  );
};

export default Navbar;
