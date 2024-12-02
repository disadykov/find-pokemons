import React from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";


export default React.memo(class Pokemon extends React.Component {
  pokemon = this.props.pokemon

  render() {
    const listItems = this.pokemon.form_list.map((list) =>
      <li >{list}</li>
    );

    const listLenguages = this.pokemon.form_lenguage.map((list) =>
      <li >{list}</li>
    );

    return (
      <div className="pokemon">
        <HiArchiveBoxXMark onClick={() => this.props.onDelete(this.pokemon.id)} className="delete-icon" />

        <div className="blok1">
          <div>
            <h1>Имя: {this.pokemon.name} </h1>
            <h4>Базовая страница: {this.pokemon.url}</h4>
          </div>

          <div className="images">
            <img src={this.pokemon.front_default} alt={this.pokemon.name} />
            <img src={this.pokemon.back_default} alt={this.pokemon.name} />
          </div>
        </div>

        <div className="blok2">

          <div>
            <h2>Кол-во доступных форм: {this.pokemon.form_count}</h2>
            <div className="gif">
              <img src={this.pokemon.gif} alt={this.pokemon.name} />
            </div>
          </div>

          <div className="chaild-box">
            <h3>Названия доступных форм:</h3>
            <ul className="rectangle">{listItems}</ul>
          </div>
          <div>
            <h3>Названия доступных форм:</h3>
            <ul className="rectangle">{listLenguages}</ul>
          </div>



        </div>

      </div>
    )
  }
});
