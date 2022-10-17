// CSS
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';

// Pages
import Home from './pages/Home/Home';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Recover from './pages/Auth/Recover';
import ChangePassword from './pages/Auth/ChangePassword';

// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menumobile from './components/Menumobile/Menumobile';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Menumobile />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover" element={<Recover />} />
            <Route path="/changepassword" element={<ChangePassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
