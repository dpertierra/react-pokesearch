const BASE_URL = "https://pokeapi.co/api/v2";
const SEARCH_TERMS = {
	pokemon: "pokemon",
};

async function fetchPokemon(pokemonName) {
	try {
		const response = await fetch(
			`${BASE_URL}/${SEARCH_TERMS.pokemon}/${pokemonName}`,
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export { fetchPokemon };
