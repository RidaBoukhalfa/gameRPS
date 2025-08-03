import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Friend.css'; // Import CSS file

function Friend() {
  const navigate = useNavigate();
  const [player1Choice, setPlayer1Choice] = useState('');

  const handleChoice = (choice) => {
    setPlayer1Choice(choice);
  };

  const handleDone = () => {
    if (player1Choice === '') {
      alert('Player 1 must choose!');
      return;
    }
    localStorage.setItem('player1Choice', player1Choice);
    navigate('/player2');
  };

  return (
    <div className="friend-container">
      <h1 className="friend-title">Dady Games</h1>
      <h2 className="friend-subtitle">Friend Mode</h2>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>

      <h3>Player 1:</h3>
      <p>Choose one</p>

      <div className="choice-buttons">
        <button onClick={() => handleChoice('Rock')}>Rock</button>
        <button onClick={() => handleChoice('Paper')}>Paper</button>
        <button onClick={() => handleChoice('Scissors')}>Scissors</button>
      </div>

      <p className="selected-choice">Selected: {player1Choice}</p>

      <button className="done-button" onClick={handleDone}>Done</button>
    </div>
  );
}

export default Friend;
