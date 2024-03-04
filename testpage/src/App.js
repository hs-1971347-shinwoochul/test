import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ListPage from './ListPageComponents/ListPage';
import Home from './HomeComponents/Home';
import TextPage from './TextPageComponents/TextPage';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link 컴포넌트를 이용하여 경로를 연결한다 */}
          </li>
          <li>
            <Link to="/listpage">ListPage</Link>
          </li>
          <li>
            <Link to="/textpage">TextPage</Link>
          </li>
        </ul>
      </nav>

        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/listpage" element={<ListPage />} /> 
        <Route path="/textpage" element={<TextPage />} />
      </Routes>
    </div>
  );
}

export default App;
