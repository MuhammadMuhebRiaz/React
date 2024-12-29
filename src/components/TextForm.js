import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {

  const [Text, setText] = useState('');

  const handleUpClick = () => {
    const newText = Text ? Text.toUpperCase() : '';
    setText(newText);
    console.log("Converted to Uppercase:", newText);
  };

  const handleUpOnChange = (event) => {
    setText(event.target.value);
    console.log("on change:", event.target.value);
  };
  const handleUpCopy = () => {
    navigator.clipboard.writeText(Text);
    console.log("Text Copied:", Text);
  }
  const handleUpClear = () => {
    setText('');
    console.log("Text Cleared");
  }

  const wordCount = Text.trim().length === 0 ? 0 : Text.trim().split(/\s+/).length; // Count words

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleUpOnChange}
            id="mybox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
          <button type="button" className="btn btn-primary my-2" onClick={handleUpClick}>Convert To Uppercase</button>
          <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUpCopy}>Copy Text</button>
          <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUpClear}>Clear Text</button>        

          </div>
      </div>
      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>{wordCount} words and {Text.length} characters</p>
        <p>{0.008 * wordCount} Minutes read</p>
       <p>{}</p>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : "Enter something in the textbox above to preview it here"}</p>
        
      </div>
    </>
  );
}
 