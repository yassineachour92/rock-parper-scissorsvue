Feature: Rock, Paper, Scissors Game

  Scenario: Jouer contre le computer
    Given Je commence le jeu
    And Je selectionne "Rock"
    When Le computer chooser 
    And Le resultat de jeu s'affiche 
