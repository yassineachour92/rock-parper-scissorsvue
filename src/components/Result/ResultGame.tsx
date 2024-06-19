import React from "react";
import "./ResultGame.css";
import { Button } from "antd";

interface ResultProps {
  userChoice: string;
  computerChoice: string;
  result: string;
  setShowResultat:Function
}

const ResultGame = ({
  userChoice,
  computerChoice,
  result,
  setShowResultat
}: ResultProps) => {
  return (
    <div className="result">
      <p data-testid="user-choice">You chose: {userChoice}</p>
      <p data-testid="computer_chose">Computer chose: {computerChoice}</p>
      <p data-testid="result">{result}</p>
      <Button onClick={()=>setShowResultat(false)}> Play Again </Button>
    </div>
  );
};

export default ResultGame;
