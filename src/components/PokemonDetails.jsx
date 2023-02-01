import React from "react";
import {
	Card,
	Col,
	Container,
	Row,
	OverlayTrigger,
	Tooltip,
} from "react-bootstrap";
import Stats from "./Stats";
const PokemonDetails = (props) => {
	return (
		<Container className="mt-2">
			<Row>
				<Col xs={10} md={6}>
					<Card>
						<Card.Header className="card-header">
							<h4 className="pokemon-name capitalized">{props.pokemon.name}</h4>
							<div className="images">
								<img
									src={
										props.pokemon.sprites.other["official-artwork"]
											.front_default
									}
									alt={props.pokemon.name}
									width="175px"
								/>
							</div>
							<div className="types">
								{props.pokemon.types.map((type) => {
									return (
										<OverlayTrigger
											key={`trigger-${type.type.name}`}
											placement="bottom"
											overlay={
												<Tooltip id={`tooltip-${type.type.name}`}>
													{type.type.name}
												</Tooltip>
											}
										>
											<img
												key={type.type.name}
												src={`icons/pokemon-types/${type.type.name}.svg`}
												alt={type.type.name}
												width="50px"
											></img>
										</OverlayTrigger>
									);
								})}
							</div>
						</Card.Header>
						<Card.Body>
							<h5 className="title">Abilities</h5>
							{props.pokemon.abilities.map((ability) => {
								return (
									<div className="ability" key={ability.ability.name}>
										<span className="capitalized">
											{ability.ability.name}
											{ability.is_hidden ? " (H)" : ""}
										</span>
									</div>
								);
							})}
						</Card.Body>
					</Card>
				</Col>
				<Stats stats={props.pokemon.stats} />
			</Row>
		</Container>
	);
};

export default PokemonDetails;
