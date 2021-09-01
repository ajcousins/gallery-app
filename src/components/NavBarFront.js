import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarFront({ title }) {
  return (
    <div className='nav-bar-front'>
      <NavLink to='/' exact>
        <h1 className='nav-bar-front__title'>{title}</h1>
      </NavLink>
      <div className='nav-bar-front__links'>
        <h4 className='nav-bar-front__link'>About</h4>
        <h4 className='nav-bar-front__link'>Contact</h4>
        <h4 className='nav-bar-front__link'>
          <NavLink to='/basket' exact>
            Basket
          </NavLink>
        </h4>
      </div>
    </div>
  );
}
