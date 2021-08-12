import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import NewCollection from "./NewCollection";
import { projectFirestore } from "../firebase";
import CollectionTile from "./CollectionTile";
import { useDispatch } from "react-redux";
import { setCollectionsModel } from "../actions";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const [collections, setCollections] = useState([]);
  const { logout } = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();

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
    // set redux global state
    dispatch(setCollectionsModel(collections));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collections]);

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection("00_admin")
      .doc("register")
      .onSnapshot((snap) => {
        console.log(snap.data());
        const collectionArr = snap.data().collections.map((collection) => {
          return JSON.parse(collection);
        });
        setCollections(collectionArr.reverse());
      });

    return () => unsubscribe();
  }, []);

  return (
    <div className='app-body'>
      <div className='back-of-house-background' />
      <NavBar
        error={error}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />

      <NewCollection />

      {collections.map((collection) => {
        return (
          <CollectionTile
            title={collection.title}
            frontRef={collection.front}
            description={collection.description}
          />
        );
      })}
    </div>
  );
}
