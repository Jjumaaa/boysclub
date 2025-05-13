import React from 'react';
import './LiveScores.css';

function LiveScores() {
  // Example static data
  const matches = [
    { id: 1, home: "FC Alpha", away: "FC Beta", score: "2 - 1" },
    { id: 2, home: "FC Gamma", away: "FC Delta", score: "1 - 1" }
  ];

  return (
    <div className="live-scores">
      <h3>Live Scores</h3>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            {match.home} vs {match.away}: <span className="score">{match.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiveScores;