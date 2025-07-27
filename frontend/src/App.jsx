import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signin from './pages/Signin.jsx';
import About from './pages/About.jsx'; 
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Header from './components/Header.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}

