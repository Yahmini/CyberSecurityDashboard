import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import MapPage from './pages/MapPage';
import ChatbotPage from './pages/ChatbotPage';
import QuizPage from './pages/QuizPage';
import './App.css';
import SignInPage from './components/AuthForm';



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/signin" element={<SignInPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;