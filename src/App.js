import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
const Background = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/oriental-maki-sushi-qszg63j859g7rw7n.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1, // Keeps it behind content
      }}
    />
  );
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {/* Only show background on Home page */}
      {location.pathname === '/' && <Background />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
