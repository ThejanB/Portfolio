import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsDatabases = ['MySQL', 'PostgreSQL', 'MongoDB'];
const labelsFrameworksLibraries = ['FastAPI', 'Django', 'Spring Boot', 'React', 'Angular', 'React Native', 'Kotlin', 'PHP', 'LangChain', 'LangGraph'];
const labelsLanguages = [ 'Java', 'Python', 'JavaScript', 'C++'];
const labelsToolsServices = [ 'Git', 'GitLab', 'Hugging Face', 'Jira']

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Programming Languages</h3>
                    <p>I am proficient in a variety of programming languages, enabling me to adapt to different project requirements and deliver effective solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Languages:</span>
                        {labelsLanguages.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frameworks & Libraries</h3>
                    <p>I have hands-on experience building robust applications using modern frameworks and libraries for web, mobile, and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Frameworks & Libraries:</span>
                        {labelsFrameworksLibraries.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Databases</h3>
                    <p>I work with both relational and NoSQL databases to handle diverse data storage needs efficiently and securely.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Databases:</span>
                        {labelsDatabases.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Tools & Services</h3>
                    <p>I leverage modern tools and platforms to ensure streamlined workflows and high-quality deliverables.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Services:</span>
                        {labelsToolsServices.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;