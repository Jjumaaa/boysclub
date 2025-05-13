import React from 'react';
import './PlayerProfiles.css';

function PlayerProfiles() {
  const players = [
    { name: "John Doe", position: "Forward" },
    { name: "Alex Smith", position: "Midfielder" }
  ];

  return (
    <div className="player-profiles">
      <h2>Player Profiles</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>
            <strong>{player.name}</strong> - {player.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerProfiles;
