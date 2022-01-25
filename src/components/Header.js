import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../asset/logo.png';

const Header = () => {

  const links = [
    {
      text: "rockets",
      path: "/",
      id: 0
    },
    {
      text: "missions",
      path: "/missions",
      id: 1
    },
    {
      text: "myprofile",
      path: "/myprofile",
      id: 2
    }
  ]
  return (
  <header>
    <img alt="logo-top" src={logo} className="logo-top" />
    <nav>
      <ul>
        {
          links.map((link)=>(
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
  );
};

export default Header;
