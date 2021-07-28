import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import NavBar from "./NavBar";
import NewCollection from "./NewCollection";
import { projectStorage, projectFirestore, timestamp } from "../firebase";

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

  useEffect(() => {
    // use get on database to get single document with collections
    // const adminRef = projectFirestore.listCollections();
    // console.log(adminRef);
  }, []);

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
