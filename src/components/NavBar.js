import React from "react";

export default function NavBar(props) {
  return (
    <div className='nav-bar'>
      <h2 className='nav-bar__title'>Dashboard</h2>
      {props.error && <div className='error-msg'>{props.error}</div>}
      <div className='nav-bar__email'>{props.currentUser.email}</div>
      <div>
        <button className='nav-bar__logout' onClick={props.handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
