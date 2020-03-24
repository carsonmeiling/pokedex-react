import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Pokedex from './components/pokemon/Pokedex';
import PokeForm from './components/pokemon/PokeForm';


class App extends Component {
  state = { pokemons: [
    {id: 1, name: 'Pikachu', type: 'electric', level: 8 },
    {id: 2, name: 'Jiggly Puff', type: 'fairy', level: 35 },
    {id: 3, name: 'Charmander', type: 'fire', level: 2 },
    {id: 4, name: 'Mew Two', type: 'psychic', level: 89 },
    {id: 5, name: 'Digglet', type: 'ground', level: 45 },
  ]}

  addPokemon = (incomingPokemon) => {
    let newPokemon = { id: this.getId(), ...incomingPokemon}
    this.setState({ pokemons: [newPokemon, ...this.state.pokemons]})
  }

  updatePokemon = (id, updatedPokemon) => {
    const pokemons = this.state.pokemons.map( p => {
      if (p.id === id) {
        return updatedPokemon
      } 
        return p
    })
    this.setState({ pokemons })
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };


  releasePokemon = (id) => {
    const{ pokemons } = this.state
    this.setState({pokemons: pokemons.filter( p => p.id !== id)})
  }


  render () {
    const { pokemons } = this.state

    return(
      <>
        <Header color='red' size='huge' textAlign='center'>
          Pokedex
        </Header>
        <Pokedex pokemons={pokemons} releasePokemon={this.releasePokemon} updatePokemon={this.updatePokemon} />
        <PokeForm addPokemon={this.addPokemon}/>
      </>
    )
  }
}

export default App;
