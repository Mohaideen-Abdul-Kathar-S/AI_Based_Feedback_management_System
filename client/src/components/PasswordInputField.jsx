import React, { useState } from 'react';
import '../Styles/PasswordInputField.css';

export default function PasswordInputField({type, placeholder, title}) {
  const [Ctype, setCType] = useState('password');
const [password, setPassword] = useState('');
  function togglePassword() {
    setCType((prev) => (prev === 'password' ? 'text' : 'password'));
  }
function handlePasswordChange(e) {
    console.log("Entered Password:", e.target.value);
    setPassword(e.target.value);
  }
  return (
    <div className="password-wrapper">
      <h3>
      {title}
      </h3>
      <input
        type={type}
        className="password-input"
        placeholder={placeholder}
        onChange={handlePasswordChange}
      />

      {/* <span className="password-icon" onClick={togglePassword}>
        {Ctype === 'password' ? '0' : '1'}
      </span> */}
    </div>
  );
}
