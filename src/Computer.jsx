import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Computer.css'; // ✅ Import the CSS file

function Computer() {
  const navigate = useNavigate();
  const choices = ['Rock', 'Paper', 'Scissors'];

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const handlePlay = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);

    const result = getWinner(choice, randomChoice);

    // Show result visually for 1 second before navigating
    setTimeout(() => {
      navigate('/win', {
        state: {
          winner: result === 'Draw' ? 'Draw' : `${result} (Computer Mode)`
        }
      });
    }, 1000);
  };

  const getWinner = (player, computer) => {
    if (player === computer) {
      return 'Draw';
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'Player';
    } else {
      return 'Computer';
    }
  };

  return (
    <div className="computer-container">
      <h2>Computer Mode</h2>
      <p>Choose Rock, Paper, or Scissors:</p>
      <div className="choice-buttons">
        {choices.map((choice) => (
          <button key={choice} className="choice-button" onClick={() => handlePlay(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="result-text">
        {playerChoice && <p>You chose: <strong>{playerChoice}</strong></p>}
        {computerChoice && <p>Computer chose: <strong>{computerChoice}</strong></p>}
      </div>
      <button onClick={() => navigate('/')} className="back-button">
        ⬅ Back to Home
      </button>
    </div>
  );
}

export default Computer;
