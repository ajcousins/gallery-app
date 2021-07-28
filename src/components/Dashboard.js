import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import NavBar from "./NavBar";
import NewCollection from "./NewCollection";

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
    <div className='app-body'>
      <NavBar
        error={error}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />

      <NewCollection />
      {/* <UploadForm /> */}
      {/* <ImageGrid /> */}
    </div>
  );
}
