import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Win.css'; // ⬅️ Import the CSS

function Win() {
  const navigate = useNavigate();
  const location = useLocation();

  const winner = location.state?.winner || 'Unknown Player';

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="win-container">
      <h1>Dady Games</h1>
      {winner === 'Draw' ? (
        <h2 style={{ color: 'orange' }}>🤝 It's a Draw!</h2>
      ) : (
        <h2 style={{ color: 'green' }}>🏆 {winner} Wins!</h2>
      )}
      <button onClick={handleBackHome}>Back to Home</button>
    </div>
  );
}

export default Win;
