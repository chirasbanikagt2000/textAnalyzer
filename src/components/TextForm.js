import React, { useState } from 'react';


export default function TextForm(props) {

  let [text, setText] = useState('');

  const uppercase =() =>{
    //console.log("Clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!!", "success");


  }

  const lowercase =() =>{
    //console.log("Clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!!", "success");


  }

  const copyText = ()=>{
   // console.log("copy was clicked" + text);
    navigator.clipboard.writeText(text);
    props.showAlert("Text successfully copied!!", "success");

  }

   const handleOnChange =(event) =>{
    console.log("onchange");
    setText(event.target.value)
   }

   const handleExtraSpaces = ()=>{

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

   }

  return (
    <>
  <div className="container my-5">
  <h1>{props.heading}</h1>
      <div className="mb-3">
          
           <textarea className="form-control" value ={text} onChange={handleOnChange}id="myBox" rows="3"></textarea>

      </div>
      <button className='btn btn-primary mx-2' onClick={uppercase}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={lowercase}>Convert to Lowerrcase</button>
      <button className='btn btn-primary mx-2' onClick={copyText}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
   </div>

  <div className="container my-5">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>


   </>
  )
}
