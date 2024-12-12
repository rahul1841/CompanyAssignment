import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import Lists from './components/Lists';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
