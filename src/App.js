import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Pokemons from "./components/Pokemons";
import AddPokemon from "./components/AddPokemon";
import CountPokemon from './components/Count';
import "./css/components.css";
import "./css/index.css";

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pokemons: []
    }

    this.addPokemon = this.addPokemon.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <CountPokemon pokemons={this.state.pokemons} />
          <div className="search">
            <AddPokemon onAdd={this.addPokemon} />
          </div>
          <div className="main-div">
            <Pokemons pokemons={this.state.pokemons} onDelete={this.deletePokemon} />
          </div>
        </div>
      </div>
    );
  }

  addPokemon(pokemon) {
    const id = this.state.pokemons.length + 1;
    //this.setState({ pokemons: [...this.state.pokemons, { id, ...pokemon }] }); - в конец списка
    this.setState({ pokemons: [{ id, ...pokemon }, ...this.state.pokemons] }); // в начало списка

  }

  deletePokemon(id) {
    this.setState({
      pokemons: this.state.pokemons.filter((el) => el.id !== id)
    })
  }

}

export default App;
