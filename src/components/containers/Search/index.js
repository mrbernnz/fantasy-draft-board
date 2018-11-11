import React, { Component } from 'react';
import axios from 'axios';

export class Search extends Component {
  state = {
    term: ''
  };

  changeHandler = e => {
    e.preventDefault();

    this.fetchPlayers(this.state.term);
    this.setState({ term: '' });
  };
  render() {
    return (
      <form>
        <label htmlFor="search">Search Players</label>
        <input id="search" name="term" type="search" />
      </form>
    );
  }
}

export default Search;
