import React, { useState, useRef } from "react";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";

export default function NewCollection() {
  const titleRef = useRef();
  // const [newActive, setNewActive] = useState(false);
  // const [confirm, setConfirm] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [page, setPage] = useState(0);

  const startNewCollection = () => {
    console.log("Start new collection");
    // setNewActive(true);
    setPage(1);
  };

  const cancelNewCollection = () => {
    // setNewActive(false);
    setPage(0);
  };

  const confirmTitle = (e) => {
    e.preventDefault();
    if (!titleRef.current.value) return;
    // setConfirm(true);
    setCollectionName(titleRef.current.value);
    setPage(2);
  };

  const MultiPageForm = () => {
    switch (page) {
      case 0:
        return (
          <button
            className='new-collection__start-btn'
            onClick={startNewCollection}
          >
            Create New Collection
          </button>
        );
      case 1:
        return (
          <div className='new-collection__container'>
            <form className='new-collection__form-container'>
              <label for='title'>Collection Title</label>
              <input type='text' id='title' ref={titleRef} required />

              <div className='new-collection__btn-panel'>
                <button
                  className='new-collection__start-btn'
                  onClick={confirmTitle}
                  type='submit'
                >
                  OK
                </button>
                <button
                  className='new-collection__start-btn'
                  onClick={cancelNewCollection}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className='new-collection__container'>
            <div className='new-collection__form-container'>
              <h3>{collectionName}</h3>
              <UploadForm collection={collectionName} />
              <ImageGrid collection={collectionName} />
              <div className='new-collection__btn-panel'>
                <button
                  className='new-collection__start-btn'
                  onClick={confirmTitle}
                  type='submit'
                >
                  OK
                </button>
                <button
                  className='new-collection__start-btn'
                  onClick={cancelNewCollection}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='new-collection'>
      <MultiPageForm />
    </div>
  );
}
