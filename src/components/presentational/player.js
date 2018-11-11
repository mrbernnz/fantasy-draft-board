import React from 'react';

const Player = ({ name, pos, team }) => (
  <li>
    <h4 className="name">{name}</h4>
    <h4 className="position">{pos}</h4>
    <h4 className="team">{team}</h4>
  </li>
);

export default Player;
