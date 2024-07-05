
import React from 'react';
import './scoreboard.css'; 

const Scoreboard = ({ scores }) => {
  
  return (
    <div className="scoreboard">
      <h2>Scoreboard</h2>
      <ul>
        {scores.map((player, index) => (
          <li key={index}>
            <span className="player-name">{player.name}</span>
            <span className="player-score">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;

