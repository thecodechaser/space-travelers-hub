import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../asset/logo.png';

const Header = () => {
  const links = [
    {
      text: 'Rockets',
      path: '/',
      id: 0,
    },
    {
      text: 'Missions',
      path: '/missions',
      id: 1,
    },
    {
      text: 'My Profile',
      path: '/myprofile',
      id: 2,
    },
  ];
  return (
    <header className="header">
      <div className="logo-title-c">
        <img alt="logo-top" src={logo} className="logo-top" />
        <h3 className="header-title">Space Traveler&apos;s Hub</h3>
      </div>
      <nav>
        <ul className="nav-menu">
          {
          links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="nav-item">{link.text}</NavLink>
            </li>
          ))
        }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
