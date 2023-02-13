import React from 'react';
import './Pokecard.css';

const API_BASE_URL = 'https://raw.githubusercontent.com/';
const API_ENDPOINT = API_BASE_URL + 'PokeAPI/sprites/master/sprites/pokemon/';

/** Individual Pokemon card. */

function Pokecard(props) {
  let img_url = `${API_ENDPOINT}${props.id}.png`;

  return (
      <div className="Pokecard">
        <div className="Pokecard-title">{ props.name }</div>
        <img className="Pokecard-image" src={img_url} />
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">EXP: {props.exp}</div>
      </div>
  );
}

export default Pokecard;
