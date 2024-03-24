import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NotFound } from "./views";
import Navegacion from "./components/Navegacion";
import BuscadorPoke from "./components/BuscadorPoke"; // Importa el componente BuscadorPoke
import DetallePoke from "./views/DetallePoke"; // Importa el componente DetallePokemon

const App = () => {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<BuscadorPoke/>} />
        <Route path="/pokemon/:nombrePokemon" element={<DetallePoke />} />{" "}
        {/* Nueva ruta para el detalle del Pokémon */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
