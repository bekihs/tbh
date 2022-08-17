import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Sessions from './pages/Sessions';
import Users from './pages/Users';
import Session from './pages/Session';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <nav>
                <Link to="/users">Start</Link>
          </nav>
<div className='container'>
          <Routes>
            <Route path="/users" element={<Users />}>
            </Route>
            <Route path="/sessions/:userId" element={<Sessions />}>
            </Route>
            <Route path="/session/:userId/:sessionId" element={<Session />}>
            </Route>
          </Routes>
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
