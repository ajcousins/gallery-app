import React from "react";

export default function NavBarFront({ title }) {
  return (
    <div className='nav-bar-front'>
      <h1 className='nav-bar-front__title'>{title}</h1>
      <div className='nav-bar-front__links'>
        <h4 className='nav-bar-front__link'>About</h4>
        <h4 className='nav-bar-front__link'>Contact</h4>
        <h4 className='nav-bar-front__link'>Basket</h4>
      </div>
    </div>
  );
}
