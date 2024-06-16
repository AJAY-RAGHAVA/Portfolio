import React from 'react';
import './resume.css'; // Import the CSS file

function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      <div className='experience'>
        <h2>Experience</h2>
        <div className="experience-item">
          <h4>Oasis InfoByte Web Development and Designing (04/2023) - (05/2023) - Remote </h4>
          <ul>
            <li><b>Technologies:</b> VS Code, HTML, CSS, JavaScript.</li>
            <li><b>Experience:</b> Hands-on learning in remote web development and design.</li>
            <li><b>Skills Developed:</b> Coding and designing websites in a remote work environment.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>Abhyaz Video/Audio Editor Intern (05/2023) - (06/2023) - Remote</h4>
          <ul>
            <li><b>Responsibilities:</b> Assisted with video and audio editing tasks which includes editing footage, Creating Posters.</li>
            <li><b>Tools Used:</b> Utilized Canva and Zoho sites for editing tasks indicating proficiency in these platforms.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>Make-A-thon: Departmental level project expo resulting in 3rd place.</h4>
          <ul>
            <li>Presented the Intelligent Plant Monitoring and Auto-Watering System at the Make-A-thon, securing 3rd place.</li>
            <li>Showcased the system's innovative use of sensors and automation for optimized plant care.</li>
            <li>Recognized for the project's effectiveness and ingenuity in improving agricultural practices.</li>
          </ul>
        </div>
      </div>

      <div className='education'>
        <h2>Education</h2>

        <div className="education-item">
          <h4>Integrated MTECH Software Engineering (2020 - Present), Vellore Institute of Technology, Chennai Campus.</h4>
          <ul>
            <li><b>CGPA:</b> 8.09</li>
          </ul>
        </div>

        <div className="education-item">
          <h4>Intermediate (2018 - 2020), Sri Chaitanya Junior College, Guntur.</h4>
          <ul>
            <li><b>CGPA:</b> 8.28</li>
          </ul>
        </div>

        <div className="education-item">
          <h4>Class 10th (2018), Dr. KLP Public School (CBSE), Guntur.</h4>
          <ul>
            <li><b>Percentage:</b> 64.8%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
