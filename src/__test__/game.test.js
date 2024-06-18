/* eslint-disable jest/no-conditional-expect */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import Game from "../components/game/Game";
import App from "../App";

const feature = loadFeature("./game.feature", {
  loadRelativePath: true,
});

defineFeature(feature, (test) => {
  test("Jouer contre le computer", ({ given, and, when, then }) => {
    let setScore;
    let score;
    let computerChoice;
    given("Je commence le jeu", () => {
      score = 0;
      setScore = jest.fn((newScore) => {
        score = newScore;
      });
      render(<Game score={score} setScore={setScore} />);
    });

    and(/^Je selectionne "(.*)"$/, (name) => {
      const rockButton = screen.getByRole("button", { name });
      fireEvent.click(rockButton);
    });

    when("Le computer chooser", () => {
      const computerChoiceElement = screen.getByTestId("computer_chose");

      computerChoice = computerChoiceElement.textContent;
    });

    then("Le resultat de jeu s'affiche", () => {
      const result = screen.getByTestId("result");
      const userChoiceElement = screen.getByTestId("user-choice");
      expect(result).toBeInTheDocument();
      expect(userChoiceElement.textContent).toContain("rock");
      if (computerChoice.textContent === "scissors") {
        expect(result.textContent).toBe("You win!");
      } else if (computerChoice.textContent === userChoiceElement.textContent) {
        expect(result.textContent).toBe("It's a draw!");
      } else expect(result.textContent).toBe("Computer wins!");
    });
  });

  test("Afficher les règles du jeu", ({ given, when, then }) => {
    given("J'accède  à la page d'accueil", () => {
      render(<App />);
    });

    when(/^Je clique sur le bouton "(.*)"$/, (name) => {
      const rulesButton = screen.getByRole("button", { name });
      fireEvent.click(rulesButton);
    });

    then("J'affiche une modale qui contient les règles du jeu", async () => {
      await waitFor(() => {
        expect(screen.getByTestId("Rules")).toBeInTheDocument();
      });
    });
  });
});
