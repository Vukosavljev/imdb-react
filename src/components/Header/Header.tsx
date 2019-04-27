import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="content-header" >
        <h2>Movie Browser</h2>
        <div className="Navlinks" >
          <NavLink to="/" exact className="hoverable" >Search</NavLink>
          <NavLink to="/favorites" className="hoverable" >Favorites</NavLink>
      </div>
      </div>
    </header>
  )
}
