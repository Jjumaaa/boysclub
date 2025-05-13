import React from 'react';
import './LeagueTable.css';

function LeagueTable() {
  const teams = [
    { name: "FC Alpha", points: 30 },
    { name: "FC Beta", points: 28 },
    { name: "FC Gamma", points: 25 }
  ];

  return (
    <div className="league-table">
      <h2>League Table</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => (
            <tr key={idx}>
              <td>{team.name}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeagueTable;
