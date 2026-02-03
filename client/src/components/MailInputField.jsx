import React from 'react'
import '../Styles/MailInputField.css'
export default function MailInputField({type, placeholder, title}) {
    // let type = "email";
    // let placeholder = "sample@kongu.edu";
    const [mail, setMail] = React.useState('');
    function handleMailChange(e) {
        console.log("Entered Mail:", e.target.value);
        setMail(e.target.value);
    }
  return (

    
     <div>
      
       <h3>
      {title}
      </h3>
    

        <input type={type} className="mail-input" placeholder={placeholder} onChange={handleMailChange}/>
  </div>
  )
}
