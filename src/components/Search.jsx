import React, { useState } from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Search = (props) => {
	const [pokemonName, setPokemonName] = useState("");

	const formSubmit = (e) => {
		e.preventDefault();
		props.searchPokemon(pokemonName);
	};

	return (
		<Container className="search">
			<Form className="mt-2" onSubmit={formSubmit}>
				<Row className="align-items-center">
					<Col sm={10} className="my-1">
						<Form.Control
							onChange={(e) => setPokemonName(e.target.value)}
							placeholder="Enter a Pokemon name"
						/>
					</Col>
					<Col sm={2} className="my-1">
						<Button
							onClick={() => props.searchPokemon(pokemonName)}
							className="btn btn-primary w-100 p-2"
						>
							Search
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default Search;
