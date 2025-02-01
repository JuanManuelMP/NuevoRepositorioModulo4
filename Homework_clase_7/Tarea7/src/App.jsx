import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CharacterPage from './CharacterPage/CharacterPage';
import CharacterDetailPage from './CharacterDetailPage/CharacterDetailPage';
import EpisodesPage from './EpisodesPage/EpisodesPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import './styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
