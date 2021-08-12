import React, { useState, useRef } from "react";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import { useDispatch } from "react-redux";
import { setNewCollection } from "../actions";

export default function NewCollection(props) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [collectionName, setCollectionName] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const startNewCollection = () => {
    console.log("Start new collection");
    setPage(1);
  };

  const cancelNewCollection = () => {
    setPage(0);
  };

  const confirmTitle = (e) => {
    e.preventDefault();
    if (!titleRef.current.value) return;
    setCollectionName(titleRef.current.value);
    // set same name in global state
    dispatch(setNewCollection(titleRef.current.value));
    setPage(2);
  };

  const handleDescription = (e) => {
    e.preventDefault();
    // TO DO: Check and sanitise text input.
    setDescriptionText(descriptionRef.current.value);
    setPage(3);
  };

  const handleDone = () => {
    dispatch(setNewCollection(null));
    setPage(0);
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
              <input
                type='text'
                id='title'
                ref={titleRef}
                required
                style={{ marginBottom: "1em" }}
              />

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
              <label for='description'>Enter a Description</label>
              <textarea
                type='text'
                id='description'
                ref={descriptionRef}
                required
                style={{ marginBottom: "1em" }}
                rows='4'
                cols='50'
              />
              <div className='new-collection__btn-panel'>
                <button
                  className='new-collection__start-btn'
                  onClick={handleDescription}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='new-collection__container'>
            <div className='new-collection__form-container'>
              <h3>{collectionName}</h3>
              <UploadForm
                collection={collectionName}
                description={descriptionText}
              />
              <ImageGrid collection={collectionName} noOverlay='true' />
              <div className='new-collection__btn-panel'>
                <button
                  className='new-collection__start-btn'
                  onClick={handleDone}
                >
                  Done
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
