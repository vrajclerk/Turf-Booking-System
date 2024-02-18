// Header.jsx

import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RoleNav from './RoleNav';
import logo1 from '../../images/logo2.png';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg custom-bg text-color ${isScrolled ? 'fixed-navbar' : ''}`}>
        <div className="container-fluid text-color">
          <img
            src={logo1}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt=""
          />
          <Link to="/" className="navbar-brand">
            <i>
              <b className="text-color-blue">Book Your Turf</b>
            </i>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/admin/ground/all" className="nav-link active" aria-current="page">
                  <b className="text-color">View Ground</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active" aria-current="page">
                  <b className="text-color">About Us</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link active" aria-current="page">
                  <b className="text-color">Contact Us</b>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
