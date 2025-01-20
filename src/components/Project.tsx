import React from "react";

import projectShopHere from '../assets/images/project-shop-here.png';
import projectRosterMate from '../assets/images/project-roster-mate.png';
import projectInfix from '../assets/images/project-infix.png';
import projectEdgeCare from '../assets/images/project-edge-care.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/EdgeCare" target="_blank" rel="noreferrer"><img src={projectEdgeCare} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/EdgeCare" target="_blank" rel="noreferrer"><h2>EdgeCare AI</h2></a>
                <p>Conversational medical assistance system for mobile devices, integrating on-device protected health information (PHI)
 de-identification with a fine-tuned MobileBERT model and a cloud-based retrieval-augmented generation (RAG) pipeline
 for accurate medical question answering. </p>
 <p>The system incorporates a LangGraph based multi-agent framework to ensure context-aware query handling for precise
 answers.</p>
 <p>Tech Stack : Python | FastAPI | Kotlin | SQL | ObjectBox | LangGraph</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={projectInfix} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/StemDevops" target="_blank" rel="noreferrer"><h2>INFIX : Ticket Booking Mobile Application</h2></a>
                <p> INFIX provides users with versatile ticket booking options and introduces an innovative social media integration feature,
 a lowing them to share travel destinations. This fosters community engagement and inspires others to explore new
 places.</p>
 <p> Tech Stack : Node.js | React Native | SQL</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={projectRosterMate} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RosterMate" target="_blank" rel="noreferrer"><h2>Roster Mate : Constraint Based Roster Scheduler </h2></a>
                <p> Developed a Constraint-Based Roster Scheduler for medical practitioners, enhancing scheduling precision and doctor
 resource optimization while ensuring flexibility for unforeseen needs, thereby improving healthcare service delivery.</p>
 <p>Tech Stack : Django | React | MongoDB</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={projectShopHere} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ThejanB/ShopHere---E-commerce_platform" target="_blank" rel="noreferrer"><h2>Shop Here : E-Commerce Platform</h2></a>
                <p> An e-commerce platform with a wide array of features and functionalities was implemented using PHP, ensuring
 seamless navigation with a robust MySQL database, and delivering a fuly functional, user-centric online shopping
 platform.</p>
 <p>Tech Stack : HTML5 | CSS | PHP | MySQL</p>
            </div>
        </div>
    </div>
    );
}

export default Project;