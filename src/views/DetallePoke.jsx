import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";

const DetallePoke = () => {
  const { nombrePokemon } = useParams(); 
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getPokeSelect = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
        );
        setPokemonData(response.data); 
      } catch (error) {
        alert("Error al obtener datos del Pokémon:", error);
      }
    };

    getPokeSelect();
  }, [nombrePokemon]); 

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {pokemonData && (
        <Card
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            marginTop: "80px",
          }}
        >
          <Card.Img
            style={{ flex: "1" }}
            src={pokemonData.sprites.front_default}
            alt="imagen pokemon"
          />
          <Card.Body
            style={{
              flex: "2",
            }}
          >
            <Card.Title>{pokemonData.name}</Card.Title>
            <ul>
              <li>hp:{pokemonData.stats[0].base_stat}</li>
              <li>attack:{pokemonData.stats[1].base_stat}</li>
              <li>defense:{pokemonData.stats[2].base_stat}</li>
              <li>special-attack:{pokemonData.stats[3].base_stat}</li>
              <li>special-defense:{pokemonData.stats[4].base_stat}</li>
              <li>speed:{pokemonData.stats[5].base_stat}</li>
            </ul>
            <Card.Text>{pokemonData.types[0].type.name}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default DetallePoke;
