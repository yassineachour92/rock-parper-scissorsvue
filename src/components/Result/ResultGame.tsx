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
      <img
        className={`choice-button-result ${userChoice}`}
        src={`images/icon-${userChoice}.svg`}
        alt={userChoice}
      />

      <Flex gap="large">
        <Button className="button_playAgain" onClick={() => setShowResultat(false)}>
          PLAY AGAIN
        </Button>
      </Flex>

      <img
        className={`choice-button-result ${computerChoice}`}
        src={`images/icon-${computerChoice}.svg`}
        alt={computerChoice}
      />
    </div>
  );
};

export default ResultGame;
