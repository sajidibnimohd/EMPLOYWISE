import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import UsersList from './components/UsersList';
import EditUser from './components/EditUser';
import './App.css';  // Optional for styling

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Function to handle login
  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
    } catch (error) {
      alert('Login failed! Check credentials.');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/users" /> : <Login onLogin={handleLogin} />} />
        <Route path="/users" element={token ? <UsersList onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/edit/:id" element={token ? <EditUser /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
