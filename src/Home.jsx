import { useNavigate } from 'react-router-dom';
import './Home.css'; // 👈 Import the CSS

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Dady Games</h1>
      <p className="home-subtitle">Choose with who you want to play:</p>
      <div className="button-group">
        <button onClick={() => navigate('/friend')}>Friend</button>
        <button onClick={() => navigate('/computer')}>Computer</button>
      </div>
    </div>
  );
}

export default Home;
