import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Friend.css';



function Player2() {
  const navigate = useNavigate();
  const [player2Choice, setPlayer2Choice] = useState('');

  const handleChoice = (choice) => {
    setPlayer2Choice(choice);
  };

  const getWinner = (p1, p2) => {
    if (p1 === p2) return 'Draw';
    if (
      (p1 === 'Rock' && p2 === 'Scissors') ||
      (p1 === 'Paper' && p2 === 'Rock') ||
      (p1 === 'Scissors' && p2 === 'Paper')
    ) {
      return 'Player 1';
    }
    return 'Player 2';
  };

  const handleDone = () => {
    if (player2Choice === '') {
      alert('Player 2 you must choose!');
      return;
    }

    const player1Choice = localStorage.getItem('player1Choice');
    if (!player1Choice) {
      alert('Player 1 you must choose!');
      return;
    }

    const winner = getWinner(player1Choice, player2Choice);
    localStorage.removeItem('player1Choice');



    navigate('/win', { state: { winner } }); // Pass winner to Win screen
  };

  return (
    <div className="friend-container">
      <h1 className="friend-title">Dady Games</h1>
      <h2 className="friend-subtitle">Player 2 Mode</h2>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>

      <h3>Player 2:</h3>
      <p>Choose one</p>
      <div className="choice-buttons">
        <button onClick={() => handleChoice('Rock')}>Rock</button>
        <button onClick={() => handleChoice('Paper')}>Paper</button>
        <button onClick={() => handleChoice('Scissors')}>Scissors</button>
      </div>
      <p className="selected-choice">Selected: {player2Choice}</p>

      <button className="done-button" onClick={handleDone}>Done</button>
    </div>
  );
}

export default Player2;
