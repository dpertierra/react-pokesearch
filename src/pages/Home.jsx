import React, { useState } from "react";
import { fetchPokemon } from "../services/pokeapi";
import Search from "../components/Search";
import PokemonDetails from "../components/PokemonDetails";
import { Spinner } from "react-bootstrap";

const spinnerStyle = {
	width: "6rem",
	height: "6rem",
	borderWidth: "12px",
};

const Home = () => {
	const [pokemon, setPokemon] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const searchPokemon = async (pokemonName) => {
		if (!pokemonName) return setError(true);
		setLoading(true);
		setTimeout(async () => {
			const pokemonData = await fetchPokemon(pokemonName);
			setPokemon(pokemonData);
			setLoading(false);
		}, 750);
	};

	return (
		<div>
			<Search searchPokemon={searchPokemon} />
			{loading ? (
				<div className="loading-spinner">
					<Spinner
						style={{ ...spinnerStyle }}
						animation="border"
						variant="primary"
					/>{" "}
				</div>
			) : null}
			{!loading && pokemon ? <PokemonDetails pokemon={pokemon} /> : null}
		</div>
	);
};

export default Home;
