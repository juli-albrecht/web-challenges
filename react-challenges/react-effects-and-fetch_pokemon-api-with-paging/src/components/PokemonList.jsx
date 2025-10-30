import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState();
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );
  console.log(page);
  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(page);
        const data = await response.json();
        console.log(data);
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);
  if (!pokemon) {
    return <p>Loading</p>;
  }
  return (
    <main>
      <button type="button">Previous Page</button>
      <button type="button" onClick={() => setPage(pokemon.next)}>
        Next Page
      </button>
      <ul>
        {pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
