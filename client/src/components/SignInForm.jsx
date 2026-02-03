import React from 'react'
import MailInputField from './MailInputField';
import PasswordInputField from './PasswordInputField';
import '../Styles/SignInForm.css';
import Button from './Button';
export default function SignInForm() {
  return (
    <div className="Form-container">
        <h3 className="Form-title">Sign in to your account</h3>
        <MailInputField type="text" placeholder="sample@kongu.edu/Roll No." title="Enter User-ID"/>
        <PasswordInputField type="password" placeholder="Password" title="Enter Password" />
        <h5>Recover Password</h5>
        <Button label="Submit" variant="secondary" onClick=""/>
        <p>Don’t have an account? <span>Register</span></p>
    </div>
  )
}
