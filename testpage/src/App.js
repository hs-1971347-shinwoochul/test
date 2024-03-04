import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import UserPage from './UserPageComponents/UserPage';
import Home from './HomeComponents/Home';
import CharacterPage from './CharacterPageComponents/CharacterPage';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link 컴포넌트를 이용하여 경로를 연결한다 */}
          </li>
          <li>
            <Link to="/UserPage">UserPage</Link>
          </li>
          <li>
            <Link to="/CharacterPage">CharacterPage</Link>
          </li>
        </ul>
      </nav>

        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/UserPage" element={<UserPage />} /> 
        <Route path="/CharacterPage" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
