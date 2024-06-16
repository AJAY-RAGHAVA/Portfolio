import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skill-item">
          <h3>Front-end Development</h3>
          <p>React JS, HTML, CSS</p>
        </div>
        <div className="skill-item">
          <h3>Back-end Development</h3>
          <p>PHP, Google Firebase, SQL</p>
        </div>
        <div className="skill-item">
          <h3>Technologies</h3>
          <p>GIT, Rest API, Jira</p>
        </div>
        <div className="skill-item">
          <h3>Soft Skills</h3>
          <p>Poster Designing, Video Editing & Team Management</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
