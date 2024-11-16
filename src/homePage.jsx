import React from 'react';
import Sidebar from './Sidebar';
import './homepage.css';

const Homepage = () => {
  return (
    <div>
      <div id="outbar">
        <div id="bar">
          <div id="kllogo">
            <img src="vite.svg" alt="KL University Logo" />
          </div>
          <div id="head">
            <h1>KL University</h1>
          </div>
          <div id="register">
            <div id="registerinner">
              <a href=""><h2>SIGN UP</h2></a>
            </div>
          </div>
        </div>
      </div>
      
      <Sidebar/>
    </div>
  );
};

export default Homepage;
