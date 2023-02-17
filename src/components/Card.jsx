import React from "react";
import "../styles/card.css";
import { DotsThree, Info } from "phosphor-react";

const Card = ({ id, title, description, tech, image, github, live }) => {
	return (
		<article
			key={id}
			className="card"
			data-aos={`fade-${id % 2 === 1 ? "down" : "up"}`}
		>
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
					{tech.map((item) => (
						<div>{item}</div>
					))}
				</section>
				<section className="buttons-section">
					{" "}
					{/* <p>{description}</p> */}
					<button>Read More</button>
					<button>Github</button>
					<button>Live</button>
				</section>
			</section>{" "}
		</article>
	);
};

export default Card;
