import React from 'react'
import '../Styles/MultiLineInputField.css'
export default function MultiLineInputField({ placeholder, title}) {

    const [text, setText] = React.useState('');
    function handleTextChange(e) {
        console.log("Entered Text:", e.target.value);
        setText(e.target.value);
    }

  return (
    <div>
       <h3>
      {title}
      </h3>
      <textarea className="multi-line-input" onChange={handleTextChange} placeholder={placeholder} />
    </div>
        
  )
}
