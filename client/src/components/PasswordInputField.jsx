import React, { useState } from 'react';
import '../Styles/PasswordInputField.css';

export default function PasswordInputField() {
  const [type, setType] = useState('password');
const [password, setPassword] = useState('');
  function togglePassword() {
    setType((prev) => (prev === 'password' ? 'text' : 'password'));
  }
function handlePasswordChange(e) {
    console.log("Entered Password:", e.target.value);
    setPassword(e.target.value);
  }
  return (
    <div className="password-wrapper">
      <input
        type={type}
        className="password-input"
        placeholder="Password"
        onChange={handlePasswordChange}
      />

      <span className="password-icon" onClick={togglePassword}>
        {type === 'password' ? '👁️' : '🙈'}
      </span>
    </div>
  );
}
