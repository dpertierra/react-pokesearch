import React from "react";
import { Col, Card, ProgressBar } from "react-bootstrap";
const Stats = (props) => {
	return (
		<Col xs={12} md={6}>
			<Card>
				<Card.Body>
					<h4 className="title">Base Stats</h4>
					<div className="stats capitalized">
						{props.stats.map((stat, key) => (
							<div key={key}>
								<strong>{stat.stat.name}</strong>
								<ProgressBar
									now={stat.base_stat}
									max={255}
									label={stat.base_stat}
								/>
							</div>
						))}
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Stats;
