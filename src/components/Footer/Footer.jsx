
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-section">
        {/* <a href="/">
          <h1>Connectify</h1>
        </a> */}
        <p className="footer-moto">
      Buzzing with Collaboration. Fueling Productivity.</p> 
      </div>
      {/* <hr */}
      <p className="footer-copyRight"> Developed By Team Connectify &copy; {new Date().getFullYear()}</p>
    </div>

  );
};

export default Footer;


