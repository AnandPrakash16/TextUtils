import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnCahnge = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success","Converted to upper case.");
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "Converted to lower case.");
    }
 
    const handleSpace = () => {
        const newString = text.replace(/\s+/g,' ').trim();
        setText(newString);
        props.showAlert("success", "Extra space removed");
    }

    const handleCopy = () => {
        var copyText = document.getElementById("mytextarea");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("success", "Copied to clipboard.");
    }

    const handleclearClick = () =>{
        setText("");
        props.showAlert("success","Text cleared.");
    }

  return (
    <>
      <div className='container' style={{color : props.mode === "dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor : props.mode === "dark"?"lightgrey":"white"}} value={text} onChange={handleOnCahnge} id="mytextarea" rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
          <button className="btn btn-info mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
          <button className="btn btn-success mx-2" onClick={handleclearClick}>Clear Text</button>
          <button className="btn btn-warning mx-2" onClick={handleSpace}>Remove Extra Space</button>
          <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container my-3" style={{color : props.mode === "dark"?"white":"#042743"}}>
        <h2>Text summary..</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something above to see the preview"}</p>
      </div>
    </>
  )
}
