import React from "react";
import "../styles/card.css";
import { DotsThree, Info } from "phosphor-react";

const Card = ({ id, title, description, tech, image, github, live }) => {
	return (
		<article className="card" data-aos={`fade-${id % 2 === 1 ? "down" : "up"}`}>
			<section className="img-section">
				<img src={image[0]} alt={title} />
			</section>
			<section className="text-section">
				<h3 className="text-gradient">
					{title}
					<div className="info-icon">
						<DotsThree color="var(--accent)" size={30} weight="duotone" />
					</div>
				</h3>
				<section className="pill-section">
					{tech.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</section>
				<section className="buttons-section">
					<button>Read More</button>
					<a href={github} target="_blank" rel="noopener noreferrer">
						Github
					</a>
					<a href={live} target="_blank" rel="noopener noreferrer">
						Live
					</a>
				</section>
			</section>{" "}
		</article>
	);
};

export default Card;
