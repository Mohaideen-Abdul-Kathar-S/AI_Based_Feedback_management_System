import React from 'react'
import '../Styles/MultiLineInputField.css'
export default function MultiLineInputField() {
    let placeholder = "Enter your text here...";
    const [text, setText] = React.useState('');
    function handleTextChange(e) {
        console.log("Entered Text:", e.target.value);
        setText(e.target.value);
    }
  return (
        <textarea className="multi-line-input" onChange={handleTextChange} placeholder={placeholder} />
  )
}
