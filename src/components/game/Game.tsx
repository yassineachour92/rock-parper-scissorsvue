import React, { useState } from "react";
import ChoiceButton from "../choiseButton/ChoiseButton.tsx";
import Rules from "../Rules/Rules.tsx";
import ResultGame from "../Result/ResultGame.tsx";

import "./Game.css";

type Choice = "rock" | "paper" | "scissors";

const choices: Choice[] = ["rock", "paper", "scissors"];

const Game = ({ score, setScore }) => {
  const [result, setResult] = useState<string>("");
  const [userChoice, setUserChoice] = useState<string>("");

  const [computerChoice, setComputerChoice] = useState<string>("");
  const [showResultat, setShowResultat] = useState(false);

  const playGame = (userChoice: Choice) => {
    setShowResultat(true)
    setUserChoice(userChoice);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);

    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
      setScore(score + 1);
    } else if (userChoice === computerChoice) {
      setResult("It's a draw!");
    } else {
      setResult("Computer wins!");
      setScore(score - 1);
    }
  };

  return (
    <div className="game">
      {!showResultat && (
        <div className="choices">
          {choices.map((choice) => (
            <ChoiceButton
              key={choice}
              choice={choice}
              onClick={() => playGame(choice)}
            />
          ))}
        </div>
      )}
      {showResultat && (
        <ResultGame
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
          setShowResultat={setShowResultat}
        />
      )}
      <div className="rules">
        <Rules />
      </div>
    </div>
  );
};

export default Game;
