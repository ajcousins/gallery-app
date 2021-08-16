import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm(props) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  function changeHandler(e) {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && selected.size > 5242880) {
      setError("File size must not exceed 5 MB");
      return;
    }

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  }

  const inputStyle = props.style ? props.style : { marginBottom: "1em" };

  return (
    <form>
      <label for='file-upload' class='file-upload'>
        <div className='faux-btn' style={{ marginBottom: "1em" }}>
          Upload Image
        </div>
      </label>
      <input
        id='file-upload'
        type='file'
        onChange={changeHandler}
        style={inputStyle}
      />
      <div>
        {error && (
          <div className='error-msg' style={{ margin: "0.5em 0" }}>
            {error}
          </div>
        )}
        {file && <div>{file.name}</div>}
        {file && (
          <ProgressBar
            file={file}
            setFile={setFile}
            collection={props.collection}
            description={props.description}
          />
        )}
      </div>
    </form>
  );
}
