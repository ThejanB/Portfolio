import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/profile-pic.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic}  alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="callto:+94705050492" target="_blank" rel="noreferrer"><PhoneIcon/></a>
            <a href="mailto:thejan.20@cse.mrt.ac.lk" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://github.com/ThejanB" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thejan-weerasekara/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Thejan Weerasekara</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="callto:+94705050492" target="_blank" rel="noreferrer"><PhoneIcon/></a>
            <a href="mailto:thejan.20@cse.mrt.ac.lk" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://github.com/ThejanB" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thejan-weerasekara/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;