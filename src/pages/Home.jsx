import React, { useState } from "react";
import { fetchPokemon } from "../services/pokeapi";
import Search from "../components/Search";
import PokemonDetails from "../components/PokemonDetails";
import { Alert, Spinner } from "react-bootstrap";

const spinnerStyle = {
	width: "6rem",
	height: "6rem",
	borderWidth: "12px",
};

const Home = () => {
	const [pokemon, setPokemon] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const searchPokemon = async (pokemonName) => {
		if (!pokemonName) {
			setError(true);
			setErrorMessage("You must enter a Pokemon name");
			return;
		}
		setError(false);
		setLoading(true);
		setTimeout(async () => {
			const { pokemonData, hasError } = await fetchPokemon(pokemonName);
			if (hasError) {
				setLoading(false);
				setPokemon(null);
				setErrorMessage("Pokemon not found");
				return setError(true);
			}
			setPokemon(pokemonData);
			setLoading(false);
		}, 500);
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
			{error ? <Alert variant="danger">{errorMessage}</Alert> : null}
			{!loading && pokemon ? <PokemonDetails pokemon={pokemon} /> : null}
		</div>
	);
};

export default Home;
