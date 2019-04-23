import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <header>
      <h2>Movie Browser</h2>
      <div className="Navlinks" >
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </header>
  )
}
