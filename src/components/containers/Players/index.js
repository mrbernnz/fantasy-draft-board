import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayers } from '../../../redux/player/actions';

import PlayersList from '../../presentational/players-list';

export class PlayersContainer extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    const { players } = this.props;

    return (
      <section>
        <h2>NFL Players</h2>
        <PlayersList players={players} />
      </section>
    );
  }
}

const mapStateToProps = ({ players }) => ({ players });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPlayers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer);
