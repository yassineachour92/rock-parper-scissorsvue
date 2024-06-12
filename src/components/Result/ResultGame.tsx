import React from 'react';
import './ResultGame.css';
import { Button } from 'antd';

interface ResultProps{
  userChoice:string;
  computerChoice:string;
  result:string
}

const ResultGame = ({ userChoice, computerChoice, result }:ResultProps) => {

  return (
    <div className="result">
      <p>You chose: {userChoice}</p>
      <p>Computer chose: {computerChoice}</p>
      <p>{result}</p>
      <Button> Play Again </Button>

    </div>
  );
};

export default ResultGame;
