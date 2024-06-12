import React from 'react';
import './ChoiseButton.css';

const ChoiceButton = ({ choice, onClick }) => {
  return (
    <button className={`choice-button ${choice}`} onClick={onClick}>
      <img src={`images/icon-${choice}.svg`} alt={choice} />
    </button>
  );
};

export default ChoiceButton;
