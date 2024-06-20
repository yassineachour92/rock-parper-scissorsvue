import React from "react";
import "./ResultGame.css";
import { Button, Flex } from "antd";

interface ResultProps {
  userChoice: string;
  computerChoice: string;
  result: string;
  setShowResultat: Function;
}

const ResultGame = ({
  userChoice,
  computerChoice,
  result,
  setShowResultat,
}: ResultProps) => {
  return (
    <div className="result">
      <p data-testid="user-choice">YOU PICKED</p>
      <p data-testid="result" className="resultMessage">{result}</p>
      <p data-testid="computer_chose">THE HOUSE PICKED</p>
      <div className={`${result === 'YOU WIN' && 'winner'}`}>
      <img
        className={`choice-button-result ${userChoice}`}
        src={`images/icon-${userChoice}.svg`}
        alt={userChoice}
      />
      </div>

      <Flex className="button_playAgain" gap="large">
        <Button  onClick={() => setShowResultat(false)}>
         <p className="button_playAgain_title"> PLAY AGAIN </p>
        </Button>
      </Flex>
      <div className={`${result === 'YOU LOSE' && 'winner'}`}>

      <img
        className={`choice-button-result ${computerChoice}`}
        src={`images/icon-${computerChoice}.svg`}
        alt={computerChoice}
      />
      </div>
    </div>
  );
};

export default ResultGame;
