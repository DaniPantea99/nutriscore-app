import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard.js';
import User from './pages/User';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/settings" exact element={<Settings />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
