import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayers } from '../../actions';

export class Players extends Component {
  renderPlayers = players => {
    return players
      .map(player => <li key={player.id}>{player.name}</li>)
      .slice(0, 10);
  };

  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    const { players } = this.props;

    return (
      <div>
        <h2>Players</h2>
        <ul>{this.renderPlayers(players)}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ players }) => ({ players });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPlayers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Players);
