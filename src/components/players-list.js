import React from 'react';

import Player from './player';

const renderPlayers = players =>
  players !== undefined ? (
    players
      .map(player => (
        <Player
          key={player.id}
          name={player.name}
          pos={player.position}
          team={player.teamAbbr}
        />
      ))
      .slice(0, 10)
  ) : (
    <p>No Players List Present</p>
  );

const PlayersList = ({ players }) => <ul>{renderPlayers(players)}</ul>;

export default PlayersList;
