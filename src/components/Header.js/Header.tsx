import React from 'react';
import './Header.css';

const Header = ({ score }) => {
  return (
    <div className="header">
      <div className="title">
        <h1>ROCK<br/>PAPER<br/>SCISSORS</h1>
      </div>
      <div className="score-box">
        <p>Score</p>
        <p className="score">{score}</p>
      </div>
    </div>
  );
};

export default Header;
