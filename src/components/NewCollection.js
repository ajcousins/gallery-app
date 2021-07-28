import React, { useState } from "react";
import UploadForm from "./UploadForm";

export default function NewCollection() {
  const [newActive, setNewActive] = useState(false);

  const startNewCollection = () => {
    console.log("Start new collection");
    setNewActive(true);
  };

  const cancelNewCollection = () => {
    setNewActive(false);
  };

  return (
    <div className='new-collection'>
      {!newActive ? (
        <button
          className='new-collection__start-btn'
          onClick={startNewCollection}
        >
          Create New Collection
        </button>
      ) : (
        <div className='new-collection__container'>
          <form className='new-collection__form-container'>
            <label for='title'>Collection Title</label>
            <input type='text' id='title' required />
            <UploadForm />
            <div>
              <button
                className='new-collection__start-btn'
                onClick={cancelNewCollection}
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
      )}
    </div>
  );
}
