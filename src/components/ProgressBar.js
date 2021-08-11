import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

export default function ProgressBar({
  file,
  setFile,
  collection,
  description,
}) {
  const { url, progress } = useStorage(file, collection, description);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  console.log(progress, url);
  return (
    <div className='progress-bar' style={{ width: progress + "%" }}>
      {progress && Math.round(progress)}
    </div>
  );
}
