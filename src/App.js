// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes aqui, não Switch
import Home from './pages/Home';
import AgentDetails from './components/AgentDetails';

function App() {
  return (
    <Router>
      <Routes> {/* Substitua Switch por Routes */}
        <Route path="/" element={<Home />} /> {/* use 'element' em vez de 'component' */}
        <Route path="/agents/:id" element={<AgentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
