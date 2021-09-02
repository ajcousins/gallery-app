import React from "react";
import { NavLink } from "react-router-dom";
import QtySymbol from "./QtySymbol";

export default function NavBarFront({ title }) {
  return (
    <div className='nav-bar-front'>
      <NavLink to='/' exact>
        <h1 className='nav-bar-front__title'>{title}</h1>
      </NavLink>
      <div className='nav-bar-front__links'>
        <NavLink to='/about' exact>
          <h4 className='nav-bar-front__link'>About</h4>
        </NavLink>
        <NavLink to='/contact' exact>
          <h4 className='nav-bar-front__link'>Contact</h4>
        </NavLink>
        <h4 className='nav-bar-front__link basket__link'>
          <NavLink to='/basket' exact>
            Basket
          </NavLink>
          <QtySymbol />
        </h4>
      </div>
    </div>
  );
}
