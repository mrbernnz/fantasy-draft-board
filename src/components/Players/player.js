import React from 'react';

const Player = ({ name, pos, team }) => (
  <li>
    <h4>{name}</h4>
    <h4>{pos}</h4>
    <h4>{team}</h4>
  </li>
);

export default Player;
