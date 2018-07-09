import React, { Component } from 'react';
import axios from 'axios';

import Logger from '../../logger';

export class Players extends Component {
  state = {
    players: []
  };

  fetchPlayers = async () => {
    const url = `http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2017&week=1&format=json`;

    try {
      const res = await axios.get(url);
      const players = await res.data.players;
      this.setState({ players });
      Logger('Loaded players list', 'Players Component').info();
    } catch (err) {
      Logger(err, 'Player Component').error();
    }
  };

  componentDidMount() {
    this.fetchPlayers();
  }

  render() {
    return (
      <div>
        <h2>Players</h2>
        <ul>
          {this.state.players.map(player => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Players;
