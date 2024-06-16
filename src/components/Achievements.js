import React from 'react';
import './Achievements.css'; // Import the CSS file

function Achievements() {
  return (
    <div className="achievements-container">
      <h1>Achievements</h1>

      <section className="achievements-section">
        <h2>Certifications</h2>
        <ul>
          <li className='cert'>
            <strong>Security, Compliance, and Identity Fundamentals</strong>, Microsoft, (06/2023)
          </li>
          <li className='cert'>
            <strong>Technical Support Fundamentals</strong>, Google, (02/2022)
          </li>
        </ul>
      </section>

      <section className="achievements-section">
        <h2>Student Activities</h2>
        <div className="activity">
          <h3>Health and Wellness Club, VIT Chennai, President (05/2023 - Present)</h3>
          <ul>
            <li>Organize and oversee health and wellness initiatives for VIT Chennai students.</li>
            <li>Coordinate events promoting physical, mental, and emotional well-being.</li>
            <li>Foster a supportive community focused on holistic health practices and education.</li>
          </ul>
        </div>
        <div className="activity">
          <h3>Nature, Ecology, and Adaptation Club, VIT Chennai, Volunteer (01/2023 - 05/2023)</h3>
          <ul>
            <li>Facilitated community engagement through nature conservation projects and clean-up drives.</li>
            <li>Fostered collaboration among members to develop innovative solutions for environmental challenges.</li>
          </ul>
        </div>
        <div className="activity">
          <h3>Health and Wellness Club, VIT Chennai, General Secretary (06/2022 - 05/2023)</h3>
          <ul>
            <li>Led Health and Wellness initiatives, fostering a holistic approach to student well-being.</li>
            <li>Coordinated diverse activities promoting physical fitness, mental health, and nutrition awareness.</li>
            <li>Facilitated workshops and seminars to educate and empower students on wellness practices.</li>
          </ul>
        </div>
        <div className="activity">
          <h3>KLP Force, Dr. KLP Public School, Member (06/2016 - 05/2017)</h3>
          <ul>
            <li>Maintained school premises discipline, ensuring a safe and orderly environment.</li>
            <li>Monitored student behavior and enforced school rules to promote a culture of respect and responsibility.</li>
            <li>Collaborated with faculty and staff to address disciplinary issues and implement preventive measures.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
