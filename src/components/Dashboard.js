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
  const [loadCollections, setLoadCollections] = useState(false);
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
    // use get on database to get single document with collections
    if (setLoadCollections(false)) return;

    const register = projectFirestore.collection("00_admin").doc("register");
    register
      .get()
      .then((doc) => {
        if (doc.exists) {
          // console.log("Hello from dashboard: ", doc.data().collections);
          const collectionArr = doc.data().collections.map((collection) => {
            return JSON.parse(collection);
          });
          setCollections(collectionArr.reverse());

          // setLoadCollections(true);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    setLoadCollections(false);
  }, [loadCollections]);

  useEffect(() => {
    // redux
    console.log("collections:", collections);
    dispatch(setCollectionsModel(collections));
  }, [collections]);

  return (
    <div className='app-body'>
      <NavBar
        error={error}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />

      <NewCollection setLoadCollections={setLoadCollections} />

      {collections.map((collection) => {
        return (
          <CollectionTile
            title={collection.title}
            frontRef={collection.front}
            description={collection.description}
            setLoadCollections={setLoadCollections}
          />
        );
      })}
    </div>
  );
}
