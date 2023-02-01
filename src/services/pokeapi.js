const BASE_URL = "https://pokeapi.co/api/v2";
const SEARCH_TERMS = {
	pokemon: "pokemon",
};

async function fetchPokemon(pokemon) {
	try {
		const response = await fetch(
			`${BASE_URL}/${SEARCH_TERMS.pokemon}/${pokemon.toLowerCase()}`,
		);
		const data = await response.json();
		return { pokemonData: data, hasError: false };
	} catch (error) {
		return { pokemonData: null, hasError: true };
	}
}

async function fetchEvolutionaryLine(pokemonId) {}

export { fetchPokemon, fetchEvolutionaryLine };
