import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Index of Pokemon: show individual cards. */

function Pokedex(props) {
  let winMessage = null;
  if (props.isWinner) {
    winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
  }

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMessage}
    </div>
  );

  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
  ]
}

export default Pokedex;
