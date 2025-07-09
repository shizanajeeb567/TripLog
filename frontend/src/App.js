import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Journal from './pages/Journal';
import Add from './pages/Add';        // NEW
import Search from './pages/Search';  // NEW

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/add" element={<Add />} />         {/* NEW */}
        <Route path="/search" element={<Search />} />   {/* NEW */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
