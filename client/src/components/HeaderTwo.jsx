import React from 'react'
import KEC_Logo from '../assets/KEC_Logo.jpeg'
import '../Styles/HeaderTwo.css'
export default function HeaderTwo() {
    const username = "User";
    const logoutHandler = () => {
        console.log("Logout clicked");
    } 
  return (
    <header>
  <div className="header-left">
    <img src={KEC_Logo} alt="KEC_Logo" />
     <p>Welcome Back, {username}</p>
  </div>

  <button onClick={()=> logoutHandler()}>Logout</button>
</header>
  )
}

//  <HeaderTwo />
