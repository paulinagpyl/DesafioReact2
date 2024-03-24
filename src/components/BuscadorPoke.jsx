import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BuscadorPoke = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getPoke = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`);
        setPokemonData(response.data.results);
      } catch (error) {
        alert("Error al obtener datos de la API:", error);
      }
    };
    getPoke();
  }, []);

  const handlePokemonSelect = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleGoToDetail = () => {
    if (selectedPokemon) {
      navigate(`/pokemon/${selectedPokemon}`);
    } else {
      alert("Por favor selecciona un Pokémon a consultar.");
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>Selecciona un pokemón</h1>
      <select
        style={{ width: "30%", margin: "auto" }}
        onChange={handlePokemonSelect}
        value={selectedPokemon}
      >
        <option style={{ textAlign: "center" }} value="">
          Pokemones
        </option>
        {pokemonData.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {" "}
            {pokemon.name}
          </option>
        ))}
      </select>
      <br />
      <Button
        style={{ width: "10%", margin: "auto" }}
        onClick={handleGoToDetail}
      >
        Ver Detalle
      </Button>
    </Container>
  );
};

export default BuscadorPoke;
