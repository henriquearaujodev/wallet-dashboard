// CSS
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import Main from './components/main/Main';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Recover from './pages/Auth/Recover';
import ChangePassword from './pages/Auth/ChangePassword';

// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Title site
window.document.title = 'Wallet';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover" element={<Recover />} />
            <Route path="/changepassword" element={<ChangePassword />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="container">
        <div className="sidebar-left">
          <SidebarLeft />
        </div>
        <div className="main">
          <Main />
        </div>
        <div className="sidebar-right">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

export default App;
