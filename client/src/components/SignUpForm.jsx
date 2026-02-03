import React from 'react'
import '../Styles/SignUpForm.css';
import MailInputField from './MailInputField';
import PasswordInputField from './PasswordInputField';
import Button from './Button';
export default function SignUpForm() {
  return (
    <div className="Form-container">
        <h3 className="Form-title">Start your journey</h3>
        <h4 className="Form-subtitle">Account Registration</h4>
        <MailInputField type="text" placeholder="sample@kongu.edu" title="Enter Mail-ID"/>
        <MailInputField type="text" placeholder="Roll. No" title="Enter Roll. No"/>
        <PasswordInputField type="password" placeholder="Password" title="Enter Password" />
        <PasswordInputField type="password" placeholder="Confirm here" title="Confirm Password" />
       
        <Button label="Submit" variant="primary" onClick=""/>
        <p>Existing user? <span>Sign in</span></p>
    </div>
  )
}
