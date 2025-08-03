import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Friend from './Friend.jsx';
import Computer from './Computer.jsx';
import Player2 from './Player2.jsx';
import Win from './Win.jsx';

function App() {
  return (
    <BrowserRouter basename="/gameRPS">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/player2" element={<Player2 />} />
        <Route path="/win" element={<Win />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
