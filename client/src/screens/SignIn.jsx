import React from 'react'
import '../Styles/SignIn.css';
import HeaderOne from '../components/HeaderOne';
import SignInForm from '../components/SignInForm';
export default function SignIn() {
  return (
    <div>
        <HeaderOne />
        <SignInForm />
        <p className='OrBtn'>---------- or ----------</p>
        <button className="GoogleBtn">Continue with Google</button>
        
    </div>
  )
}
