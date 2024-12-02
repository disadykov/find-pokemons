import React, { useMemo } from 'react';
import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

export default React.memo(
  class AddPokemon extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        name: "",
        url: "",
        front_default: "",
        back_default: "",
        gif: "",
        formurl: "",
        flag: "",
        form_list: [],
        form_lenguage: [],
        form_count: 0,
      }

    }

    render() {
      return (
        <form ref={(el) => this.searchForm = el}>
          <input placeholder="Имя покемона..." onChange={(e) => this.setState({ name: e.target.value })} />
          <button type="button" className='btn-search' onClick={() => {
            this.searchForm.reset();


            axios.get(baseURL).then((res) => {
              const pokemonsArray = res.data.results;
              console.log(pokemonsArray);

              const pokemonUrl = pokemonsArray.find(pokemon => pokemon.name === this.state.name);

              if (pokemonUrl === undefined) {
                //alert("Такой покемон не найден!"); 
                this.setState({ flag: "Такой покемон не найден!" });
              } else {
                console.log(pokemonUrl);
                this.setState({ flag: "" });

                axios.get(pokemonUrl.url).then((res) => {
                  const front_default = res.data.sprites.front_default;
                  const back_default = res.data.sprites.back_default;
                  const gif = res.data.sprites.other["showdown"].front_default;
                  const formurl = res.data.forms[0].url;

                  console.log(front_default);
                  console.log(back_default);
                  console.log(gif);
                  console.log(formurl);

                  axios.get(formurl).then((res) => {
                    const form_names = res.data.form_names;
                    const form_count = form_names.length;
                    const form_list = form_names.map(form => form.language.name);
                    const form_lenguage = form_names.map(form => form.name);

                    console.log(form_count);
                    console.log(form_list);
                    console.log(form_lenguage);

                    this.props.onAdd({
                      name: pokemonUrl.name,
                      url: pokemonUrl.url,
                      front_default: front_default,
                      back_default: back_default,
                      gif: gif,
                      form_count: form_count,
                      form_list: form_list,
                      form_lenguage: form_lenguage
                    });
                  });

                });

                this.searchForm.reset();
                this.setState({ name: "" });
              }
            })

          }}>Найти</button>

          <h1 className='error'>{this.state.flag}</h1>
        </form >

      );

    }
  }
);

