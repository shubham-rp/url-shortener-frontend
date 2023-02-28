import React, { useState } from "react";

function InputForm({ onURLRequest }) {
  const [inputURL, setInputURL] = useState("");
  const [urlTitle, setUrlTitle] = useState("");

  const handleURLChange = (e) => {
    setInputURL(e.target.value);
  };
  const handleURLTitle = (e) => {
    setUrlTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    if (inputURL !== "") {
      onURLRequest(inputURL, urlTitle);
    }
  };
  return (
    <div className="input-form">
      <h2 className="input-form-title">Create A New Short Link</h2>
      <p className="input-label">Destination URL:</p>
      <input
        type="text"
        className="input-field"
        value={inputURL}
        onChange={handleURLChange}
      />

      <p className="input-label">Title(Optional):</p>
      <input
        type="text"
        className="input-field"
        value={urlTitle}
        onChange={handleURLTitle}
      />

      <button className="submit-button" onClick={handleSubmit}>
        CREATE
      </button>
    </div>
  );
}

export default InputForm;
