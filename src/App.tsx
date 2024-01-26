import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Challenges, Home} from './pages';
import { RockPaperScissors } from './challenges';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/rock-paper-scissors-game" element={<RockPaperScissors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
