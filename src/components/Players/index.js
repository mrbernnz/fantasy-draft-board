import React from 'react';

import Player from './player';

const renderPlayers = players =>
  players
    .map(player => (
      <Player
        key={player.id}
        name={player.name}
        pos={player.position}
        team={player.teamAbbr}
      />
    ))
    .slice(0, 10);

const PlayersList = ({ players }) => <ul>{renderPlayers(players)}</ul>;

export default PlayersList;
