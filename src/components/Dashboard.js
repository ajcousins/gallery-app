import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <h2>Profile</h2>
      {error && <div className='user-form__error-msg'>{error}</div>}
      <div className='dashboard'>
        <strong>Email: </strong> {currentUser.email}
      </div>
      <div>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}
