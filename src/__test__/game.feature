Feature: Rock, Paper, Scissors Game

  Scenario: Jouer contre le computer
    Given Je commence le jeu
    And Je selectionne "rock"
    When Le computer chooser
    Then Le resultat de jeu s'affiche

  Scenario: Afficher les règles du jeu
    Given J'accède  à la page d'accueil
    When Je clique sur le bouton "Rules"
    Then J'affiche une modale qui contient les règles du jeu
