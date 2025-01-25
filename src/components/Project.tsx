import React from "react";

import projectShopHere from '../assets/images/project-shop-here.png';
import projectRosterMate from '../assets/images/project-roster-mate.png';
import projectInfix from '../assets/images/project-infix.png';
import projectEdgeCare from '../assets/images/project-edge-care.png';
import projectNanoProcessor from '../assets/images/project-nano-processor.png';
import projectRPAL from '../assets/images/project-rpal.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={projectEdgeCare} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/EdgeCare" target="_blank" rel="noreferrer"><h2>EdgeCare AI</h2></a>
                <p>Conversational medical assistance system for mobile devices, integrating on-device protected health information (PHI)
 de-identification with a fine-tuned MobileBERT model and a cloud-based retrieval-augmented generation (RAG) pipeline
 for accurate medical question answering. </p>
 <p>The system incorporates a LangGraph based multi-agent framework to ensure context-aware query handling for precise
 answers.</p>
 <p>Tech Stack : Python | FastAPI | Kotlin | SQL | ObjectBox | LangGraph</p>
            </div>
            <div className="project">
                <img src={projectInfix} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/StemDevops" target="_blank" rel="noreferrer"><h2>INFIX : Ticket Booking Mobile Application</h2></a>
                <p> INFIX provides users with versatile ticket booking options and introduces an innovative social media integration feature,
 a lowing them to share travel destinations. This fosters community engagement and inspires others to explore new
 places.</p>
 <p> Tech Stack : Node.js | React Native | SQL</p>
            </div>
            <div className="project">
                <img src={projectRosterMate} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/RosterMate" target="_blank" rel="noreferrer"><h2>Roster Mate : Constraint Based Roster Scheduler </h2></a>
                <p> Developed a Constraint-Based Roster Scheduler for medical practitioners, enhancing scheduling precision and doctor
 resource optimization while ensuring flexibility for unforeseen needs, thereby improving healthcare service delivery.</p>
 <p>Tech Stack : Django | React | MongoDB</p>
            </div>
            <div className="project">
                <img src={projectShopHere} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/ThejanB/ShopHere---E-commerce_platform" target="_blank" rel="noreferrer"><h2>Shop Here : E-Commerce Platform</h2></a>
                <p> An e-commerce platform with a wide array of features and functionalities was implemented using PHP, ensuring
 seamless navigation with a robust MySQL database, and delivering a fuly functional, user-centric online shopping
 platform.</p>
 <p>Tech Stack : HTML5 | CSS | PHP | MySQL</p>
            </div>
            <div className="project">
                <img src={projectNanoProcessor} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/ThejanB/NanoProcessor" target="_blank" rel="noreferrer"><h2>Nano-processor Design Project</h2></a>
                <p> The goal of this project was to design a 4-bit processor capable of executing four basic instructions: ADD, NEG, MOVI, and JZR. The processor includes memory for 32 instructions, and it was verified by running an assembly program to calculate the sum of numbers.</p>
                <p>The program's final result is displayed on seven-segment displays.</p>
                <p>Tech Stack : VHDK | Assembly</p>
            </div>
            <div className="project">
                <img src={projectRPAL} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/ThejanB/RPAL-Interpreter-1_Thejan" target="_blank" rel="noreferrer"><h2>RPAL-Interpreter</h2></a>
                <p> Implement a lexical analyzer and a parser for the RPAL language. </p>
                <p>Output of the parser gives the Abstract Syntax Tree (AST) for the given input program. Implemented an algorithm to convert the Abstract Syntax Tree (AST) in to Standardize Tree (ST) and implement CSE machine.</p>
                <p>Tech Stack : C++ </p>
            </div>
        </div>
    </div>
    );
}

export default Project;