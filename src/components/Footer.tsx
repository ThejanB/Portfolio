import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="callto:+94705050492" target="_blank" rel="noreferrer"><PhoneIcon/></a>
        <a href="mailto:thejan.20@cse.mrt.ac.lk" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://github.com/ThejanB" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/thejan-weerasekara/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;