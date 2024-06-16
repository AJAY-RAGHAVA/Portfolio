import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file

function Home() {
  const [text, setText] = useState("");
  const message = "Hello! I am Ajay Raghava..";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prev) => prev + message[index]);
      index++;
      if (index === message.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the speed here (100ms per letter)
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container">
      <br/><br/><br/>
      <h1 className="animated-text">{text}</h1>
      <p className="description">
        I am a Software Engineering student at VIT Chennai with a passion for developing innovative applications and learning new technologies. I have experience in front-end and back-end development, and I am proficient in languages like Python, Java, HTML, CSS, JavaScript, and PHP. I am currently seeking opportunities to work on exciting projects and collaborate with other developers.
      </p>
      <a href="/resume.pdf" target="_blank" download className="download-button">Download Resume</a>
    </div>
  );
}

export default Home;
