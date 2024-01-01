import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upperCase!", "success");
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowerCase!", "success");
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!", "success");
        document.getSelection().removeAllRanges();
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success");
    }

   // Function to convert text to title case
   const handleTitleClick = () => {
    let newText = toTitleCase(text);
    setText(newText);
    props.showAlert("First Letter Coverted in UpperCase!", "success");
}
const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        
    });
};


    const handleOnChange = (event) =>{
          setText(event.target.value); 
          

    }
    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark' ? 'white' : '#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark' ? 'black' : 'white', color: props.mode=== 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>


</div>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleLoClick}>Covert to Lowercase</button>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleUpClick}>Covert to Uppercase</button>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleTitleClick}>Title Case</button>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>


    <div className="container my-3" style={{color:props.mode=== 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

        <p>{0.008 * text.split(" ").length} Minutes read </p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}