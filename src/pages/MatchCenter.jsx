import React from 'react';
import LiveScores from '../components/LiveScores';
import VideoHighlights from '../components/VideoHighlights';
import './MatchCenter.css';

function MatchCenter() {
  return (
    <div className="match-center">
      <h2>Match Center</h2>
      <LiveScores />
      <VideoHighlights />
    </div>
  );
}

export default MatchCenter;
