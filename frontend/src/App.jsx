import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signin from './pages/Signin.jsx';
import About from './pages/About.jsx'; 
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Header from './components/Header.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Createlisting from './pages/Createlisting.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
         <Route  element={<PrivateRoute />} >
          <Route path="/profile" element={<Profile />} />
          <Route path="/Createlisting" element={<Createlisting />} />
          </Route>
        
        
        
      </Routes>
    </BrowserRouter>
  );
}

