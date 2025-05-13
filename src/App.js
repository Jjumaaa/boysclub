import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import MatchCenter from './pages/MatchCenter';
import FixtureCalendar from './pages/FixtureCalendar';
import LeagueTable from './pages/LeagueTable';
import PlayerProfiles from './pages/PlayerProfiles';
import FantasyLeague from './pages/FantasyLeague';
import TacticalBoards from './pages/TacticalBoards';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match-center" element={<MatchCenter />} />
          <Route path="/fixture-calendar" element={<FixtureCalendar />} />
          <Route path="/league-table" element={<LeagueTable />} />
          <Route path="/player-profiles" element={<PlayerProfiles />} />
          <Route path="/fantasy-league" element={<FantasyLeague />} />
          <Route path="/tactical-boards" element={<TacticalBoards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
