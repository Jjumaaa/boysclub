import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">BoysClub</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/match-center">Match Center</Link></li>
        <li><Link to="/fixture-calendar">Fixture Calendar</Link></li>
        <li><Link to="/league-table">League Table</Link></li>
        <li><Link to="/player-profiles">Player Profiles</Link></li>
        <li><Link to="/fantasy-league">Fantasy League</Link></li>
        <li><Link to="/tactical-boards">Tactical Boards</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;