import React from 'react';
import '../App.css';

const PersonalInfo = () => {

  const firstName = 'Alejandro';
  const lastName = 'Salas';

  return(
    <div>
      <main>
      <h2>My name is {firstName} {lastName}</h2>
      <p>I am a full-stack Web Developer.</p>
      <p>These are my goals for 2020:</p>
      <ul>
        <li>Get a Web Developer job</li>
        <li>Travel to Madrid</li>
        <li>Run a 10k</li>
      </ul>
      </main>
    </div>
  );
}

export default PersonalInfo;