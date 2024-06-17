Feature: Rock, Paper, Scissors Game

  Scenario: Jouer contre le computer
    Given Je commence le jeu
    And Je selectionne "rock"
    When Le computer chooser 
    Then Le resultat de jeu s'affiche 
