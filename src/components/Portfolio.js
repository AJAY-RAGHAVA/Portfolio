import React from 'react';
import './Portfolio.css'; // Import the CSS file

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>My Projects</h1>

      <div className="project">
        <h4>Intelligent Plant Monitoring and Auto-Watering System</h4>
        <ul>
          <li>Integrated PIR sensors, Soil Moisture, and DHT11 for data collection.</li>
          <li>Utilized Firebase and Blynk platforms for cloud-based data storage, analysis, and visualization.</li>
          <li>Incorporated buzzers and water motors for automated plant monitoring and watering.</li>
        </ul>
      </div>

      <div className="project">
        <h4>Smart Fan Speed Controller</h4>
        <ul>
          <li>Utilizes DS18B20 sensor for temperature detection.</li>
          <li>Adjusts fan speed according to temperature variations.</li>
          <li>Regulates fan speed with the IRF540 component for enhanced control.</li>
        </ul>
      </div>

      <div className="project">
        <h4>Web-based Speech Interaction Platform using Python</h4>
        <ul>
          <li>Developed web project enabling bidirectional audio-text conversion using OpenAI Whisper for audio-to-text and gTTS for text-to-audio.</li>
          <li>Incorporated Gemini model for generating contextually relevant user responses.</li>
          <li>Integrated Streamlit framework to enhance user interface and interaction.</li> 
        </ul>
      </div>

      <div className="project">
        <h4>Movie Library Application</h4>
        <ul>
          <li>Developed using React.js and OMDB API to provide real-time movie search and details.</li>
          <li>Deployed on Vercel for high performance and availability.</li>
          <li>Implemented responsive design and efficient state management with React <a href="https://movie-playlist-zr2o.vercel.app/">Link</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
