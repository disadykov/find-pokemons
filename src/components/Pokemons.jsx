import React from "react";
import Pokemon from "./Pokemon";
import "../css/components.css";


export default React.memo(
  class Pokemons extends React.Component {

    render() {
      if (this.props.pokemons.length > 0)
        return (
          <div>
            {this.props.pokemons.map((el) => (
              <Pokemon onDelete={this.props.onDelete} key={el.id} pokemon={el} />
            ))}
          </div>)
      else
        return (<div className="pokemon">
          <h3>Список покемонов пуст</h3></div>)
    }
  }
);
