import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1,
      next: '',
      previous: ''
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    const URL = `https://swapi.co/api/people/?page=${ this.state.page }`;

    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  pageChangeHandler = async event => {
    if(event.target.name === "next" && this.state.next !== null) {

      await this.setState({
        page: this.state.page += 1
      });
      this.getCharacters();

    } else if(event.target.name === "previous" && this.state.previous !== null) {

      await this.setState({
        page: this.state.page -= 1
      });
      this.getCharacters();
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>

        <CharacterList
          starwarsChars= { this.state.starwarsChars }
          pageChangeHandler = { this.pageChangeHandler }
        />
      </div>
    );
  }
}

export default App;
