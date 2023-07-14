/* eslint-disable */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomeCorrect.css";


function NavbarForHome() {
  

  const googleAuth = () => {
    window.open(
      `https://ask-your-seniors-igdtuw-backend.vercel.app/auth/google/callback`,
      "_self"
    );
  };

  return (
    <div className="nav-container-for-home">
      <div className="cb-logo-container">
        <img src="./Frame 21.png" className="cb-logo-container-img" alt="" />
      </div>

      <div className="nav-items-container">
        <ul>
          <li><Link to="/landingPage" className="navbar-link-style">Home</Link></li>
          {/* <li><Link to="/leaderboard" className="navbar-link-style">Leaderboard</Link></li>
          <li><Link to="/" className="navbar-link-style">Home</Link></li> */}
        </ul>
      </div>

     

      <div className="profile-container-for-home">
        <button className="signin-signup-button" onClick={googleAuth}>Sign Up</button>
        <button className="signin-signup-button" onClick={googleAuth}>Sign In</button>
      </div>
    </div>
  );
}

export default NavbarForHome;